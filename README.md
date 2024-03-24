# S-Squared Employee App
S-Squared Enterprises is hiring EnerGov Solutions to develop an application to manage their personnel system.

Read more detail about this project in ./docs/TylerTechEnergovAssessment.docx

## Project Specifications
### Techstack
PHP
MySQL
ReactJS
Typescript
CSS


This project was built with a PHP backend and a React JS frontend.
This project uses a mySQL database to store all data.

### File Structure
* api [back-end] php files
    * .htaccess (local config)
    * dbconfig.php - database connection
    * index.php - backend entrypoint and API requests
* app - [front-end] remix files + custom react components 
    * components
        * Managers.tsx - manager's dropdown component 
        * Roles.tsx - role checkboxes component
    * routes - remix routing files
        * add._index.tsx - add employees page
        * edit._index.tsx - edit employee page
    * root.tsx - frontend entry point
    * styles.css - stylesheet
* docs - documentation
* sql - this folder contains sql backup files

### ::TODO
* add edit methods and logic
* add delete methods and logic
* fix ts warnings
* improve styles

***
***
***

# Remix README.md
## templates/spa

This template leverages [Remix SPA Mode](https://remix.run/docs/en/main/future/spa-mode) and the [Remix Vite Plugin](https://remix.run/docs/en/main/future/vite) to build your app as a Single-Page Application using [Client Data](https://remix.run/docs/en/main/guides/client-data) for all of your data loads and mutations.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/spa
```

## Development

You can develop your SPA app just like you would a normal Remix app, via:

```shellscript
npm run dev
```

## Production

When you are ready to build a production version of your app, `npm run build` will generate your assets and an `index.html` for the SPA.

```shellscript
npm run build
```

### Preview

You can preview the build locally with [vite preview](https://vitejs.dev/guide/cli#vite-preview) to serve all routes via the single `index.html` file:

```shellscript
npm run preview
```

> [!IMPORTANT]
>
> `vite preview` is not designed for use as a production server

### Deployment

You can then serve your app from any HTTP server of your choosing. The server should be configured to serve multiple paths from a single root `/index.html` file (commonly called "SPA fallback"). Other steps may be required if the server doesn't directly support this functionality.

For a simple example, you could use [sirv-cli](https://www.npmjs.com/package/sirv-cli):

```shellscript
npx sirv-cli build/client/ --single
```
