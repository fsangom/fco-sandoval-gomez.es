# Guia para crear contenido

Esta guia explica como crear nuevo contenido en la web usando GitHub.

---

## Como crear contenido nuevo

### Paso 1: Abrir el formulario

**Enlace directo:** https://github.com/Chemaclass/fco-sandoval-gomez.es/issues/new/choose

O manualmente:
1. Abre el repositorio en GitHub
2. Haz clic en la pestana **Issues** (arriba)
3. Haz clic en el boton verde **New issue**

### Paso 2: Elegir el tipo de contenido

Veras 4 opciones:
- **Nuevo Articulo** - Para reflexiones y articulos de opinion
- **Nueva Investigacion** - Para publicaciones academicas
- **Nuevo Trabajo** - Para proyectos de arquitectura
- **Nueva Publicacion** - Para enlaces a articulos externos

Haz clic en **Get started** junto al tipo que quieras crear.

### Paso 3: Rellenar el formulario

1. Rellena los campos del formulario
2. **Para imagenes**: Arrastra la imagen directamente al campo "Imagen destacada"
3. Haz clic en el boton verde **Submit new issue**

### Paso 4: Esperar

El sistema creara automaticamente el contenido y lo publicara en la web.
- Tardara 1-2 minutos
- Recibiras un comentario en el issue confirmando que se ha creado
- El issue se cerrara automaticamente

---

## Tipos de contenido

### Articulos (`/articulos`)

Reflexiones y articulos de opinion sobre arquitectura y patrimonio.

| Campo            | Descripcion                                    | Obligatorio |
|------------------|------------------------------------------------|-------------|
| Titulo           | El titulo del articulo                         | Si          |
| Descripcion      | Resumen breve (1-2 frases)                     | Si          |
| Fecha            | Formato AAAA-MM-DD. Dejar vacio = fecha de hoy | No          |
| Categoria        | "Patrimonio" o "Reflexiones"                   | Si          |
| Imagen destacada | Arrastra una imagen al campo                   | No          |
| Contenido        | El texto completo del articulo                 | No          |

### Investigacion (`/investigacion`)

Publicaciones academicas y trabajos de investigacion.

| Campo                  | Descripcion                                    | Obligatorio |
|------------------------|------------------------------------------------|-------------|
| Titulo                 | Titulo de la investigacion                     | Si          |
| Descripcion / Abstract | Resumen o abstract                             | Si          |
| Fecha                  | Formato AAAA-MM-DD. Dejar vacio = fecha de hoy | No          |
| Tipo de publicacion    | "Artículo", "Libro", "Capítulo de Libro", "Ponencia" o "Conferencia" | Si          |
| Ano                    | Ano o rango (ej: "2025" o "2020-2024")         | Si          |
| Coautores              | Nombres separados por coma                     | No          |
| Enlace                 | URL de ResearchGate u otra publicacion         | No          |

### Trabajos (`/trabajos`)

Proyectos de arquitectura y conservacion.

| Campo            | Descripcion                                         | Obligatorio |
|------------------|-----------------------------------------------------|-------------|
| Titulo           | Nombre del proyecto                                 | Si          |
| Descripcion      | Descripcion breve                                   | Si          |
| Fecha            | Formato AAAA-MM-DD. Dejar vacio = fecha de hoy      | No          |
| Categoria        | "Rehabilitacion" o "Investigacion"                  | Si          |
| Ubicacion        | Ciudad y region (ej: "Caravaca de la Cruz, Murcia") | Si          |
| Ano              | Ano o rango del proyecto                            | Si          |
| Imagen destacada | Arrastra una imagen al campo                        | No          |
| Contenido        | Descripcion detallada del proyecto                  | No          |

### Publicaciones (`/publicaciones`)

Enlaces a articulos publicados en medios externos.

| Campo       | Descripcion                                    | Obligatorio |
|-------------|------------------------------------------------|-------------|
| Titulo      | Titulo del articulo                            | Si          |
| Descripcion | Resumen breve                                  | Si          |
| Fecha       | Formato AAAA-MM-DD. Dejar vacio = fecha de hoy | No          |
| Fuente      | Nombre del medio (ej: "El Noroeste Digital")   | Si          |
| URL         | Enlace al articulo original                    | Si          |

---

## Como anadir imagenes

### Metodo 1: Arrastrar (recomendado)

Cuando rellenas el formulario, simplemente **arrastra la imagen** al campo "Imagen destacada". GitHub la subira automaticamente.

### Metodo 2: Copiar y pegar

Tambien puedes copiar una imagen y pegarla (Ctrl+V o Cmd+V) en el campo de imagen.

**Recomendaciones:**
- Formato: JPG o PNG
- Tamano maximo: 1MB
- Resolucion recomendada: 1200px de ancho

---

## Formato Markdown

Cuando escribas contenido, puedes usar estos formatos:

| Formato | Sintaxis | Resultado |
|---------|----------|-----------|
| Titulo de seccion | `## Mi titulo` | Titulo grande |
| Subtitulo | `### Mi subtitulo` | Titulo mediano |
| Negrita | `**texto**` | **texto** |
| Cursiva | `*texto*` | *texto* |
| Enlace | `[texto](https://url.com)` | texto con enlace |
| Lista | `- Elemento` | Lista con puntos |
| Cita | `> Texto citado` | Texto indentado |

**Parrafos:** Deja una linea en blanco entre parrafos para separarlos.

---

## Editar o borrar contenido

### Editar un contenido existente

1. Ve a la carpeta `content/` en GitHub
2. Navega a la subcarpeta correspondiente (articulos, investigacion, trabajos, publicaciones)
3. Haz clic en el archivo que quieras editar
4. Haz clic en el icono del lapiz (Edit)
5. Haz los cambios
6. Haz clic en **Commit changes**

### Borrar un contenido

1. Ve a la carpeta `content/` en GitHub
2. Navega a la subcarpeta y haz clic en el archivo
3. Haz clic en los tres puntos (...) > **Delete file**
4. Haz clic en **Commit changes**

---

## Preguntas frecuentes

### No veo mis cambios en la web

Espera 1-2 minutos. La web se actualiza automaticamente despues de cada cambio. Si despues de 5 minutos no aparecen, revisa la pestana **Actions** en GitHub para ver si hubo algun error.

### El issue se cerro pero no veo el contenido

Revisa la pestana **Actions** para ver si hubo algun error. Si hay un error, puedes abrir un nuevo issue con la informacion corregida.

### Quiero cambiar la imagen de un contenido

Edita el archivo directamente en GitHub y cambia la URL de la imagen en el campo `image = "..."`.
