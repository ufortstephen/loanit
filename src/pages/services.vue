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
              <h2>Services</h2>
              <div class="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section End -->

    <!-- Services Section Begin -->
    <section class="services spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <div class="services__item__img">
                <img src="@/assets/img/services/services-1.jpg" alt="" />
              </div>
              <div class="services__item__text">
                <h4><span>01.</span> Business Loan</h4>
                <p>However, there is much more to branding</p>
                <a href="#">Find Out More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <div class="services__item__img">
                <img src="@/assets/img/services/services-2.jpg" alt="" />
              </div>
              <div class="services__item__text">
                <h4><span>02.</span> Car Loan</h4>
                <p>However, there is much more to branding</p>
                <a href="#">Find Out More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <div class="services__item__img">
                <img src="@/assets/img/services/services-3.jpg" alt="" />
              </div>
              <div class="services__item__text">
                <h4><span>03.</span> Home Loan</h4>
                <p>However, there is much more to branding</p>
                <a href="#">Find Out More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <div class="services__item__img">
                <img src="@/assets/img/services/services-4.jpg" alt="" />
              </div>
              <div class="services__item__text">
                <h4><span>04.</span> Credit & Debit Card</h4>
                <p>However, there is much more to branding</p>
                <a href="#">Find Out More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <div class="services__item__img">
                <img src="@/assets/img/services/services-5.jpg" alt="" />
              </div>
              <div class="services__item__text">
                <h4><span>05.</span> Education Loan</h4>
                <p>However, there is much more to branding</p>
                <a href="#">Find Out More</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="services__item">
              <div class="services__item__img">
                <img src="@/assets/img/services/services-1.jpg" alt="" />
              </div>
              <div class="services__item__text">
                <h4><span>06.</span> Health & Medical</h4>
                <p>However, there is much more to branding</p>
                <a href="#">Find Out More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services End -->

    <!-- Call Section Begin -->
    <section
      class="call spad set-bg my-0"
      data-setbg="img/call-bg.jpg"
      :style="{
        backgroundImage:
          'url(' +
          require('@/assets/img/testimonial/' + testimonialsImg + '.jpg') +
          ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div class="call__text">
              <div class="section-title">
                <h2>Request A Call Back</h2>
                <p>
                  Posters had been a very beneficial marketing tool because it
                  had paved to deliver an effective message that conveyed
                  customer’s attention.
                </p>
              </div>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1 col-md-6">
            <form action="#" class="call__form">
              <div class="row">
                <div class="col-lg-6">
                  <input type="text" placeholder="Name" />
                </div>
                <div class="col-lg-6">
                  <input type="text" placeholder="Email" />
                </div>
                <div class="col-lg-6">
                  <input type="text" placeholder="Phone" />
                </div>
                <div class="col-lg-6">
                  <select class="nice-select">
                    <option value="">Choose Our Services</option>
                    <option value="">Choose Our Services</option>
                    <option value="">Choose Our Services</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="site-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Call Section End -->

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