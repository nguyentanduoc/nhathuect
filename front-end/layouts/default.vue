<template>
  <div class="default-layout">
    <header-app></header-app>
    <div class="my-5 pt-5">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import HeaderApp from "../components/layout/HeaderApp.vue";
import Footer from "../components/layout/Footer.vue";
export default {
  name: "default-layout",
  components: { HeaderApp, Footer },
  head: {
    title: "Trọ / Nhà Thuê Cần Thơ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Trọ / Nhà Thuê Cần Thơ",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>