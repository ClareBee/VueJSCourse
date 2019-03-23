### Vue CLI 3
`npm i -g @vue/cli`
(also creates vuerc file w config)
`vue create projectName`
choose preset: default or manually select
`npm run serve`
package.json incl browserList

### plugins after create
vue-cli-plugin-nameOfPlugin
vue add vuetify (material design component framework)

### css preprocessing
npm i --save sass-loader node-sass

### env variables
`.env` file
VUE_APP_URL=http://www.whatever.com
accessible everywhere
via data() {
  return {
    url: process.env.VUE_APP_URL
  }
}
also, variables for different modes:
`.env.development`
---
can set mode during build: `--mode development`
---
### instant prototyping
`npm install -g @vue/cli-service-global`
`vue serve nameOfComponent.vue`
