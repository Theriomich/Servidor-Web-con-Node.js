# Proyecto: Servidor Básico con Node.js

Este es un proyecto básico de un servidor HTTP creado con Node.js. Utiliza nodemon para la observación en vivo de los cambios y ESLint para el linting del código.

## Descripción

El servidor responde a las peticiones web con un mensaje simple en HTML. Este proyecto es ideal para entender los conceptos básicos de cómo funciona un servidor en Node.js.

## Características

- **Servidor HTTP básico**: Responde con un mensaje HTML.
- **Observación en vivo con nodemon**: Reinicia el servidor automáticamente cuando hay cambios en el código.
- **Linting con ESLint**: Asegura que el código sigue las mejores prácticas de JavaScript.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio o descarga los archivos del proyecto.
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto.
    ```sh
    cd nombre-del-directorio
    ```
3. Instala las dependencias necesarias.
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor con nodemon.
    ```sh
    npm run dev
    ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver el mensaje del servidor.

## Scripts

- `npm run dev`: Inicia el servidor y observa los cambios en el código usando nodemon.
- `npm run lint`: Ejecuta ESLint para revisar el código.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.
