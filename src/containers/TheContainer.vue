<template>
  <div class="c-app">
  
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";

export default {
  name: "TheContainer",
  components: {
    TheSidebar,
    TheHeader,
  },
  data() {
    return {
      userDetails: {},
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(this.$router.push("/login"));
    },
  },
  created() {
    this.userDetails = this.$store.getters.getUser;
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
