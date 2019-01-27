This is a simple web application with frontend part made in vanilla JavaScript, and styling made with usage of SASS, a CSS preprocessor. The bundling and minification is handled by Webpack, which can be configured in webpack.config.js file. Webpack is configured to run two different builds for development and production mode.

Backend of application is a simple server made in Node.js using express framework, which as of now, has only one endpoint for sending contact form data via email. It also servers static .html, .js, .css and image files from build generated /dist folder with Webpack.

# to run application locally in dev mode with webpack dev server (used for FE testing):

1) To have node and npm installed

2) Navigate to / (root) folder

3) Run 'npm install'

4) Run 'npm run dev'

5) Application is loaded on localhost:5020

# to run application locally in prod mode with node server (used for BE testing):

1) To have node and npm installed

2) Navigate to / (root) folder

3) Run 'npm install'

4) Run 'npm run prod'

5) Navigate to backend/ folder

6) Run 'npm install'

7) Run 'node server'

8) Start the application in browser on localhost:5020