/**
 * Content Creator - Parses GitHub issue forms and generates Zola markdown files
 */

/**
 * Parse issue body from GitHub forms format
 * @param {string} body - Raw issue body text
 * @returns {Object} Parsed key-value pairs
 */
function parseIssueBody(body) {
  const sections = {};
  const regex = /### (.+?)\n\n([\s\S]*?)(?=\n### |\n*$)/g;
  let match;
  while ((match = regex.exec(body)) !== null) {
    const key = match[1].trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '_');
    let value = match[2].trim();
    if (value === '_No response_') value = '';
    sections[key] = value;
  }
  return sections;
}

/**
 * Create URL-friendly slug from text
 * @param {string} text - Input text
 * @returns {string} URL slug
 */
function slugify(text) {
  return text
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Extract image URL from markdown image or direct URL
 * @param {string} text - Text containing image
 * @returns {string} Extracted URL or empty string
 */
function extractImageUrl(text) {
  if (!text) return '';
  const imgMatch = text.match(/!\[.*?\]\((.*?)\)/);
  if (imgMatch) return imgMatch[1].trim();
  const urlMatch = text.match(/(https?:\/\/[^\s"'<>]+)/);
  if (urlMatch) return urlMatch[1].replace(/[)\]"']+$/, '').trim();
  return '';
}

/**
 * Clean description: remove images, newlines, and escape quotes
 * @param {string} text - Raw description text
 * @returns {string} Cleaned description
 */
function cleanDescription(text) {
  if (!text) return '';
  return text
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/"/g, '\\"')
    .trim();
}

/**
 * Format date to YYYY-MM-DD with zero-padded month/day
 * @param {string} dateStr - Date string in YYYY-M-D format
 * @returns {string|null} Formatted date or null
 */
function formatDate(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.trim().split('-');
  if (parts.length !== 3) return null;
  const [year, month, day] = parts;
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

/**
 * Generate content for articulos
 */
function generateArticulo(data, date) {
  const slug = slugify(data.titulo);
  const filename = `content/articulos/${date}-${slug}.md`;
  const imageUrl = extractImageUrl(data.imagen_destacada);

  const content = `+++
title = "${data.titulo}"
description = "${cleanDescription(data.descripcion)}"
date = ${date}

[extra]
category = "${data.categoria}"
image = "${imageUrl}"
+++

${data.contenido || ''}
`;

  return { filename, content, contentType: 'articulos' };
}

/**
 * Generate content for investigacion
 */
function generateInvestigacion(data, date) {
  const slug = slugify(data.titulo);
  const filename = `content/investigacion/${date}-${slug}.md`;

  let extraFields = `category = "${data.tipo_de_publicacion}"
year = "${data.ano}"`;

  if (data.titulo_original) {
    extraFields += `\noriginal_title = "${data.titulo_original}"`;
  }

  if (data.coautores) {
    extraFields += `\ncoauthors = "${data.coautores}"`;
  }

  let links = '';
  if (data.enlace) {
    links = `
[[extra.links]]
name = "ResearchGate"
url = "${data.enlace}"`;
  }

  const content = `+++
title = "${data.titulo}"
description = "${cleanDescription(data.descripcion)}"
date = ${date}

[extra]
${extraFields}${links}
+++
`;

  return { filename, content, contentType: 'investigacion' };
}

/**
 * Generate content for trabajos
 */
function generateTrabajo(data, date) {
  const slug = slugify(data.titulo);
  const filename = `content/trabajos/${date}-${slug}.md`;
  const imageUrl = extractImageUrl(data.imagen_destacada);

  const content = `+++
title = "${data.titulo}"
description = "${cleanDescription(data.descripcion)}"
date = ${date}

[extra]
category = "${data.categoria}"
location = "${data.ubicacion}"
year = "${data.ano}"
image = "${imageUrl}"
+++

${data.contenido || ''}
`;

  return { filename, content, contentType: 'trabajos' };
}

/**
 * Generate content for publicaciones
 */
function generatePublicacion(data, date) {
  const slug = slugify(data.titulo);
  const filename = `content/publicaciones/${date}-${slug}.md`;

  const content = `+++
title = "${data.titulo}"
description = "${cleanDescription(data.descripcion)}"
date = ${date}

[extra]
source = "${data.fuente}"
url = "${data.url}"
+++
`;

  return { filename, content, contentType: 'publicaciones' };
}

/**
 * Main function to create content from issue
 * @param {string} body - Issue body
 * @param {string[]} labels - Issue labels
 * @returns {Object} { filename, content, contentType, title }
 */
function createContent(body, labels) {
  const data = parseIssueBody(body);
  const today = new Date().toISOString().split('T')[0];
  const date = formatDate(data.fecha) || today;

  let result;

  if (labels.includes('nuevo-articulo')) {
    result = generateArticulo(data, date);
  } else if (labels.includes('nueva-investigacion')) {
    result = generateInvestigacion(data, date);
  } else if (labels.includes('nuevo-trabajo')) {
    result = generateTrabajo(data, date);
  } else if (labels.includes('nueva-publicacion')) {
    result = generatePublicacion(data, date);
  } else {
    throw new Error('Unknown content type');
  }

  return { ...result, title: data.titulo };
}

module.exports = {
  parseIssueBody,
  slugify,
  extractImageUrl,
  cleanDescription,
  formatDate,
  generateArticulo,
  generateInvestigacion,
  generateTrabajo,
  generatePublicacion,
  createContent,
};
