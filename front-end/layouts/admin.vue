<template>
  <div>
    <sidebar-menu
      :menu="menu"
      width="200px"
      theme="white-theme"
      :collapsed="collapsed"
      @toggle-collapse="onCollapse"
      :hideToggle="true"
    >
    </sidebar-menu>
    <div
      class="content-admin"
      :class="[{ 'content-admin-collapsed': collapsed }]"
    >
      <HeaderAdminVue></HeaderAdminVue>
      <div class="mx-3 mt-3">
        <Nuxt></Nuxt>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderAdminVue from "../components/layout/HeaderAdmin.vue";
import { SidebarMenu } from "vue-sidebar-menu";

export default {
  name: "admin-layout",
  components: { HeaderAdminVue, SidebarMenu },
  data() {
    return {
      collapsed: false,
      menu: [
        {
          href: "/admin/post",
          title: "Bài viết",
          icon: "fa fa-user",
        },
        {
          href: "/admin/account",
          title: "Tài khoản",
          icon: "fa fa-user",
        },
      ],
    };
  },
  methods: {
    onCollapse(c) {
      this.collapsed = c;
    },
  },
};
</script>