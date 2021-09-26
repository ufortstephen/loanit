<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <div class="loader"></div>
    </div>
    <!-- Page Preloder -->

    <!-- Header -->
    <appHeader />
    <!-- Header -->

    <!-- Hero Section Begin -->
    <section
      class="hero set-bg"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/' + heroImg + '.jpg') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="hero__text">
              <h2>Find The Best Monthly Payment</h2>
              <h4>
                Apply for our loans in minutes, without any stress and hassle.
                Loan-It!
              </h4>
              <button class="primary-btn mb-5 mb-lg-3">Get Started</button>
              <button class="primary-btn howit-btn">How It Works</button>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-2">
            <div class="hero__form">
              <h3>How much do you need</h3>
              <form action="#">
                <div class="input-list">
                  <div class="input-list-item">
                    <p>Amount of money :</p>
                    <input type="number" required />
                  </div>
                  <div class="input-list-item">
                    <p>How long for (day):</p>
                    <input type="number" required />
                  </div>
                </div>
                <div class="input-full-width">
                  <p>Repayment:</p>
                  <input type="text" required />
                </div>
                <div class="input-list last">
                  <div class="input-list-item">
                    <p>Name:</p>
                    <input type="text" required />
                  </div>
                  <div class="input-list-item">
                    <p>Phone:</p>
                    <input type="number" required />
                  </div>
                </div>
                <div class="input-full-width">
                  <p>Email:</p>
                  <input type="email" required />
                </div>
                <button type="submit" class="site-btn">
                  Get Your Loan Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero Section End -->

    <!-- Home About Begin -->
    <section class="home-about spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="home__about__text">
              <div class="section-title">
                <h2>Thousands Of Customers Trust Our Company</h2>
                <p>
                  We make Finance available to Small and Medium Scale Business
                  by providing flexible Loans that help their business grow.
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6">
                  <div class="home__about__item">
                    <h4>Our Company</h4>
                    <p>
                      You could try by giving the viewer paper cut, but that’s
                      not the kind of attention
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6">
                  <div class="home__about__item">
                    <h4>Our Vision</h4>
                    <p>
                      The brochure must grab a viewer’s attention and hold it
                      long enough to
                    </p>
                  </div>
                </div>
              </div>
              <button class="primary-btn">learn More</button>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="home__about__img">
              <img src="@/assets/img/about/home-about.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Home About End -->

    <!-- Loan Services Section Begin -->
    <section class="loan-services spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Discover all the loans for you</h2>
              <p>
                If you try to cut corners on your brochure you will end up
                spending more money
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="loan__services__list">
          <div
            class="loan__services__item set-bg"
            data-setbg="@/assets/img/loan-services/ls-1.jpg"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/' + personalLoanImg + '.jpg') +
                ')',
            }"
          >
            <div class="loan__services__item__text">
              <h4><span>01.</span> Personal Loan</h4>
              <p>But that’s not the kind of attention you want, is it?</p>
              <a href="#">Find Out More</a>
            </div>
          </div>
          <div
            class="loan__services__item set-bg"
            data-setbg="img/loan-services/ls-2.jpg"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/' + businessLoanImg + '.jpg') +
                ')',
            }"
          >
            <div class="loan__services__item__text">
              <h4><span>02.</span> Business Loan</h4>
              <p>But that’s not the kind of attention you want, is it?</p>
              <a href="#">Find Out More</a>
            </div>
          </div>
          <div
            class="loan__services__item set-bg"
            data-setbg="img/loan-services/ls-3.jpg"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/' + educationLoanImg + '.jpg') +
                ')',
            }"
          >
            <div class="loan__services__item__text">
              <h4><span>03.</span> Education Loan</h4>
              <p>But that’s not the kind of attention you want, is it?</p>
              <a href="#">Find Out More</a>
            </div>
          </div>
          <div
            class="loan__services__item set-bg"
            data-setbg="img/loan-services/ls-4.jpg"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/' + commercialLoanImg + '.jpg') +
                ')',
            }"
          >
            <div class="loan__services__item__text">
              <h4><span>04.</span> Commercial Loan</h4>
              <p>But that’s not the kind of attention you want, is it?</p>
              <a href="#">Find Out More</a>
            </div>
          </div>
          <div
            class="loan__services__item set-bg"
            data-setbg="img/loan-services/ls-5.jpg"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/img/' + healthLoanImg + '.jpg') +
                ')',
            }"
          >
            <div class="loan__services__item__text">
              <h4><span>05.</span> Health Loan</h4>
              <p>But that’s not the kind of attention you want, is it?</p>
              <a href="#">Find Out More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Loan Services Section End -->

    <!-- Choose Section Begin -->
    <section class="choose spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Why People Choose Us</h2>
              <p>
                This question should make the viewer want to open the brochure
                to learn more.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="choose__item">
              <img src="@/assets/img/choose/choose-1.png" alt="" />
              <h5>Quick & Easy</h5>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="choose__item">
              <img src="@/assets/img/choose/choose-2.png" alt="" />
              <h5>Absolute Security</h5>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="choose__item">
              <img src="@/assets/img/choose/choose-3.png" alt="" />
              <h5>Quick Approval</h5>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="choose__item">
              <img src="@/assets/img/choose/choose-4.png" alt="" />
              <h5>Low Interest Rates</h5>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="choose__item">
              <img src="@/assets/img/choose/choose-5.png" alt="" />
              <h5>Personal Security</h5>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-6">
            <div class="choose__item">
              <img src="@/assets/img/choose/choose-6.png" alt="" />
              <h5>Disbursement Day</h5>
              <p>
                Typography should be relevant and thought out. Type is so strong
                that it can
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Choose Section Ends -->

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

    <!-- Counter Begin -->
    <div class="counter spad bg-wite">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="counter__item">
              <img src="@/assets/img/counter/counter-1.png" alt="" />
              <div class="counter__number">
                <h2 class="counter-add">5</h2>
              </div>
              <p>Successful Loan Approval</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="counter__item">
              <img src="@/assets/img/counter/counter-2.png" alt="" />
              <div class="counter__number">
                <h2 class="counter-add">99</h2>
                <span>%</span>
              </div>
              <p>Customer Satisfection</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="counter__item">
              <img src="@/assets/img/counter/counter-3.png" alt="" />
              <div class="counter__number">
                <h2 class="counter-add">9</h2>
                <span>+</span>
              </div>
              <p>Official Partners</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="counter__item">
              <img src="@/assets/img/counter/counter-4.png" alt="" />
              <div class="counter__number">
                <h2 class="counter-add">2021</h2>
                <span></span>
              </div>
              <p>CAC Certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Counter End -->

    <!-- Footer -->

    <appFooter />
    <!-- Footer -->

    <!-- Search Begin -->
    <div class="search-model">
      <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-switch">+</div>
        <form class="search-model-form">
          <input type="text" id="search-input" placeholder="Search here....." />
        </form>
      </div>
    </div>
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
      heroImg: "hero-bg",
      personalLoanImg: "loan-services/ls-1",
      businessLoanImg: "loan-services/ls-2",
      educationLoanImg: "loan-services/ls-3",
      commercialLoanImg: "loan-services/ls-4",
      healthLoanImg: "loan-services/ls-5",
      testimonialsImg: "testimonial-bg",
      // Loader
      loader: true,
    };
  },

  methods: {},
  created() {
    setTimeout(() => {
      this.loader = false;
    }, 3000);
  },
};
</script>

<style>
</style>