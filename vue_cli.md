### Vue CLI
v2: https://github.com/vuejs/vue-cli/tree/v2
`sudo npm -g vue-cli`
` vue {name of template}`
webpack - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.

webpack-simple - A simple Webpack + vue-loader setup for quick prototyping.

browserify - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.

browserify-simple - A simple Browserify + vueify setup for quick prototyping.

pwa - PWA template for vue-cli based on the webpack template

simple - The simplest possible Vue setup in a single HTML file
---
v3:
`npm install -g @vue/cli`, which includes...
`@vue/cli-service` cf create-react-app:
- The core service that loads other CLI Plugins;
- An internal webpack config that is optimized for most apps;
- The vue-cli-service binary inside the project, which comes with the basic serve, build and inspect commands.
`vue create {name of app}`
`vue serve`
`vue ui`
- ability to add `@vue/cli-plugin-` (`vue-cli-plugin` for community ones)
e.g. `vue add @vue/eslint`/ `vue add router`/ `vue add vuex`
- presets in `.vuerc` file
