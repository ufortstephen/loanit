<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <!-- <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon
        class="c-sidebar-brand-full"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 556 134"
      />
      <CIcon
        class="c-sidebar-brand-minimized"
        name="logo"
        size="custom-size"
        :height="35"
        viewBox="0 0 110 134"
      />
    </CSidebarBrand> -->
    <h6 class="p-4" @click="signOut">
      <span class="d-none d-md-block">Loan History</span>
      <span class="d-none d-md-none">Sign Out</span>
      <span class="float-right d-md-none" 
        ><i class="fa fa-sign-out d-none d-md-none" aria-hidden="true"></i
      ></span>
    </h6>

    <CRenderFunction flat :content-to-render="$options.nav" />
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";

export default {
  name: "TheSidebar",
  nav,
  computed: {
    show() {
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
  },
  methods: {
    signOut() {
      this.$message.error("Signed Out");
      this.$store.dispatch("logout").then(this.$router.push("/login"));
    },
  },
};
</script>
