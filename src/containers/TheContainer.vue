<template>
  <div class="c-app">
    <!-- {{ userDetails }}
    <br />
    <br />
    Token:
    {{ userToken }} -->
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
      userToken: {},
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(this.$router.push("/login"));
    },
      refreshPage() {
      if (localStorage.getItem("reloaded")) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem("reloaded");
      } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem("reloaded", "1");
        location.reload();
      }
    },
  },
  created() {
    this.userDetails = this.$store.getters.getUser;
    this.userToken = this.$store.getters.isLoggedIn;
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    this.refreshPage()
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
