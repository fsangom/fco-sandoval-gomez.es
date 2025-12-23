# Guia para crear contenido

Esta guia explica como crear nuevo contenido en la web usando GitHub.

## Como crear contenido nuevo

### Paso 1: Ir a GitHub Issues

1. Abre el repositorio en GitHub: https://github.com/Chemaclass/fco-sandoval-gomez.es
2. Haz clic en la pestana **Issues** (arriba)
3. Haz clic en el boton verde **New issue**
4. Veras las opciones:
   - **Nuevo Articulo** - Para reflexiones y articulos de opinion
   - **Nueva Investigacion** - Para publicaciones academicas
   - **Nuevo Trabajo** - Para proyectos de arquitectura
   - **Nueva Publicacion** - Para enlaces a articulos externos

### Paso 2: Rellenar el formulario

1. Haz clic en **Get started** junto al tipo de contenido que quieras crear
2. Rellena los campos del formulario
3. **Para imagenes**: Arrastra la imagen directamente al campo "Imagen destacada"
4. Haz clic en el boton verde **Submit new issue**

### Paso 3: Esperar

El sistema creara automaticamente el contenido y lo publicara en la web. Esto puede tardar 1-2 minutos. Recibiras un comentario en el issue cuando este listo.

---

## Tipos de contenido

### Articulos (`/articulos`)
Reflexiones y articulos de opinion sobre arquitectura y patrimonio.

**Campos:**
- **Titulo**: El titulo del articulo
- **Descripcion**: Resumen breve (1-2 frases)
- **Fecha**: Formato AAAA-MM-DD (ej: 2025-01-15). Dejar vacio para usar hoy.
- **Categoria**: "Patrimonio" o "Reflexiones"
- **Imagen**: Arrastra una imagen al campo (se sube automaticamente)
- **Contenido**: El texto completo del articulo

### Investigacion (`/investigacion`)
Publicaciones academicas y trabajos de investigacion.

**Campos:**
- **Titulo**: Titulo de la investigacion
- **Descripcion**: Resumen o abstract
- **Fecha**: Formato AAAA-MM-DD. Dejar vacio para usar hoy.
- **Tipo**: "Article", "Book" o "Conference Paper"
- **Ano**: Ano o rango (ej: "2025" o "2020-2024")
- **Coautores**: Nombres separados por coma (opcional)
- **Enlace**: URL de ResearchGate u otra publicacion (opcional)

### Trabajos (`/trabajos`)
Proyectos de arquitectura y conservacion.

**Campos:**
- **Titulo**: Nombre del proyecto
- **Descripcion**: Descripcion breve
- **Fecha**: Formato AAAA-MM-DD. Dejar vacio para usar hoy.
- **Categoria**: "Rehabilitacion" o "Investigacion"
- **Ubicacion**: Ciudad y region (ej: "Caravaca de la Cruz, Murcia")
- **Ano**: Ano o rango del proyecto
- **Imagen**: Arrastra una imagen al campo (se sube automaticamente)
- **Contenido**: Descripcion detallada del proyecto

### Publicaciones (`/publicaciones`)
Enlaces a articulos publicados en medios externos.

**Campos:**
- **Titulo**: Titulo del articulo
- **Descripcion**: Resumen breve
- **Fecha**: Formato AAAA-MM-DD. Dejar vacio para usar hoy.
- **Fuente**: Nombre del medio (ej: "El Noroeste Digital")
- **URL**: Enlace al articulo original

---

## Como anadir imagenes

### Metodo 1: Arrastrar al formulario (recomendado)
Cuando rellenas el formulario para crear contenido, simplemente **arrastra la imagen** al campo "Imagen destacada". GitHub la subira automaticamente.

### Metodo 2: Copiar y pegar
Tambien puedes copiar una imagen y pegarla (Ctrl+V) en el campo de imagen.

**Recomendaciones para imagenes:**
- Formato: JPG o PNG
- Tamano maximo recomendado: 1MB
- Resolucion recomendada: 1200px de ancho

---

## Formato Markdown (para contenido)

Cuando escribas el contenido de articulos o trabajos, puedes usar estos formatos:

### Titulos de seccion
```
## Titulo principal
### Subtitulo
```

### Texto en negrita y cursiva
```
**texto en negrita**
*texto en cursiva*
```

### Listas
```
- Elemento 1
- Elemento 2
- Elemento 3
```

### Enlaces
```
[texto del enlace](https://ejemplo.com)
```

### Citas
```
> Esto es una cita textual
```

### Parrafos
Deja una linea en blanco entre parrafos para separarlos.

---

## Preguntas frecuentes

### No veo mis cambios en la web
Espera 1-2 minutos. Si despues de 5 minutos no aparecen, revisa la pestana Actions para ver si hubo algun error.

### Me equivoque en algo
Puedes editar el archivo directamente en GitHub:
1. Ve a la carpeta `content/` correspondiente
2. Haz clic en el archivo
3. Haz clic en el icono del lapiz (Edit)
4. Haz los cambios
5. Haz clic en **Commit changes**

### Quiero borrar un contenido
1. Ve a la carpeta `content/` correspondiente
2. Haz clic en el archivo
3. Haz clic en los tres puntos (...) > **Delete file**
4. Haz clic en **Commit changes**

### El issue se cerro pero no veo el contenido
Revisa la pestana **Actions** para ver si hubo algun error en el proceso. Si hay un error, puedes abrir un nuevo issue con la informacion corregida.
