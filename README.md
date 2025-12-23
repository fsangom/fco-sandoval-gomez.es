# Francisco Sandoval - Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/cf973209-e268-4672-9015-436f01a99edd/deploy-status)](https://app.netlify.com/projects/fco-sandoval-gomez/deploys)

Portfolio personal de arquitectura y conservación del patrimonio.

## Link

https://fco-sandoval-gomez.es

## Tech

### Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) (0.21.0 or higher)

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Chemaclass/fco-sandoval-gomez.es.git
cd fco-sandoval-gomez.es
```

2. Run the development server:
```bash
zola serve
```

Open http://127.0.0.1:1111/ in your browser.

### Build

```bash
zola build
```

The static site will be generated in the `public/` directory.

## Structure

```
├── content/
│   ├── articulos/        # Blog posts
│   ├── trabajos/         # Portfolio projects
│   ├── investigacion/    # Research articles (external links)
│   ├── publicaciones/    # External publications
│   └── sobre-mi/         # About page
├── sass/
│   └── style.scss        # Main stylesheet
├── static/
│   └── images/           # Site images
└── templates/
    ├── partials/         # Reusable template parts
    ├── macros/           # Tera macros
    └── *.html            # Page templates
```
