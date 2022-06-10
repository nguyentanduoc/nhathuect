export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "front-end",
    htmlAttrs: {
      lang: "en",
    },
    meta: [{ charset: "utf-8" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/static/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/icon.plugins.js",
    "~/plugins/sideBarMenu.plugins.js",
    "~/plugins/fontawesome.js",
    "~/plugins/ckeditor.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },
  axios: {
    // proxy: true
    baseUrl: process.env.BASE_API_URL || "http://localhost:8000",
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    baseApiUrl: process.env.BASE_API_URL || "http://localhost:8000",
  },
};
