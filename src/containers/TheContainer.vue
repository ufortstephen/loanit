<template>
  <div class="c-app">
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>
    <!-- Page Preloder -->
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.fullPath"></router-view>
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
      loader: true,
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
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },

  beforeCreate() {
    this.userDetails = this.$store.getters.getUser;
    console.log(this.userDetails);
    this.userToken = this.$store.getters.isLoggedIn;

    if (!this.$store.getters.isLoggedIn) {
      this.$router.push("/login");
    }
    if (this.userDetails.email !== "super@gmail.com") {
      this.$router.push("/login");
    }
  },
  beforeMount() {
    this.refreshPage();

    this.$message.success("Welcome Admin");
    // console.log(this.userDetails);
    // this.refreshPage();
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
