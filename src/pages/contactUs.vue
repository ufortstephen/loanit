<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>

    <!-- App Header -->
    <appHeader />
    <!-- App Header -->

    <!-- Breadcrumb Section Begin -->
    <div
      class="breadcrumb-option set-bg"
      data-setbg="@/assets/img/breadcrumb/breadcrumb-bg.jpg"
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/breadcrumb/' + breadcrumb + '.jpg') +
          ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <div class="breadcrumb__text">
              <h2>Contact Us</h2>
              <div class="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section End -->

    <!-- Contact Begin -->
    <section class="contact spad">
      <div class="container">
        <div class="contact__form">
          <div class="row">
            <div class="col-lg-12">
              <div class="contact__form__text">
                <div class="contact__form__title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please contact us or send us an email or go to our forum.
                  </p>
                </div>
                <form action="#">
                  <div class="input-list">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Your email" />
                  </div>
                  <textarea placeholder="Your Message"></textarea>
                  <button type="submit" class="site-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact End -->

    <!-- App Footer -->
    <appFooter />
    <!-- App Footer -->
  </div>
</template>

<script>
import appHeader from "./headerComponent";
import appFooter from "./footerComponent";
export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {
      breadcrumb: "breadcrumb-bg",
      history: "history-bg",
      testimonialsImg: "testimonial-bg",
      // Loader
      loader: true,
    };
  },

  methods: {},
  created() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
};
</script>

<style>
</style>