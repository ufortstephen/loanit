<template>
  <div>
    <!-- Header Section Begin -->
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="header__top__widget">
                <li><i class="fa fa-map-marker"></i>264 Oron road Uyo,</li>
                <li><i class="fa fa-phone"></i>+234-909 000 9216</li>
                <li><i class="fa fa-envelope"></i> loanit@gmail.com</li>
                <li class="float-right">
                  <button
                    class="primary-btn ml-auto p-1 px-3"
                    @click="goToLogin()"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="header__logo text-center text-lg-left">
              <img src="@/assets/img/loanit.png" alt="" @click="goToHome()" />
            </div>
          </div>
          <div class="col-lg-9">
            <div class="header__nav">
              <nav class="header__menu">
                <ul>
                  <li><p @click="goToHome()">Home</p></li>
                  <li><p @click="goToAbout()">About</p></li>
                  <li><p @click="goToServices()">Services</p></li>

                  <li>
                    <p>Loans</p>
                    <ul class="dropdown">
                      <li><p>Education Loan</p></li>
                      <li>
                        <p>Health Loan</p>
                      </li>
                      <li><p>Personal Loan</p></li>
                    </ul>
                  </li>
                  <li><p @click="goToContact()">Contact</p></li>
                </ul>
              </nav>
              <div class="header__search">
                <i class="fa fa-search search-switch"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="canvas__open">
          <span class="fa fa-bars"></span>
        </div> -->
      </div>
    </header>
    <!-- Header Section End -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToHome() {
      this.$router.push("/");
    },
    goToAbout() {
      this.$router.push("/about");
    },
    goToServices() {
      this.$router.push("/services");
    },
    goToContact() {
      this.$router.push("/contact_us");
    },
  },
};
</script>

<style>
.header__logo img:hover {
  cursor: pointer;
}
</style>