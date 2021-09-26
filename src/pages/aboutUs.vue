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
              <h2>About Us</h2>
              <div class="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>About</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section End -->

    <!-- About Section Begin -->
    <section class="about spad">
      <div class="container">
        <div class="about__content">
          <div class="row">
            <div class="col-lg-5">
              <div class="about__img">
                <img src="@/assets/img/about/about.jpg" alt="" />
                <a
                  href="https://www.youtube.com/watch?v=RpvAmG1NNN0"
                  class="play-btn video-popup"
                  ><img src="@/assets/img/about/video-play.png" alt=""
                /></a>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
              <div class="about__text">
                <h2>Welcome To LoanIt.</h2>
                <h4>However, there is much more to branding than</h4>
                <p class="first_para">
                  Where a powerful web presence has become a vital ingredient of
                  your branding
                </p>
                <p class="last_para">
                  Unfortunately, many graphic design firms who position
                  themselves as advertising agencies believe that branding your
                  corporate identity is all about developing great looking
                  visual solutions.
                </p>
                <a href="#" class="primary-btn">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="about__item">
              <h4>Our Vision</h4>
              <p>
                The modern world is in a continuous movement and people
                everywhere are looking for quick, safe means of accessing
                accurate information. Prompt information is vital for people who
                want to keep the
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="about__item">
              <h4>Our Mission</h4>
              <p>
                The modern world is in a continuous movement and people
                everywhere are looking for quick, safe means of accessing
                accurate information. Prompt information is vital for people who
                want to keep the
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div class="about__item">
              <h4>Our Value</h4>
              <p>
                The modern world is in a continuous movement and people
                everywhere are looking for quick, safe means of accessing
                accurate information. Prompt information is vital for people who
                want to keep the
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About End -->

    <!-- History Section Begin -->
    <section
      class="history spad set-bg"
      data-setbg="img/history/history-bg.jpg"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/history/' + history + '.jpg') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Our History</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                has been the
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="history__img">
              <img src="@/assets/img/history/history-img.jpg" alt="" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="history__text nice-scroll">
              <div class="history__item">
                <div class="history__indicator"></div>
                <span>25th, March 2020</span>
                <h4>LoanIt was founded.</h4>
                <p>
                  LoanIt is a four year old online loan financing company that
                  provides loans to Small and Medium Scale Businesses.
                </p>
              </div>
              <div class="history__item">
                <div class="history__indicator"></div>
                <span>12th, July 2020</span>
                <h4>Opened another branch in Uyo, Akwa Ibom State.</h4>
                <p>
                  We expanded our Business Scope and opened a branch in Uyo,
                  Akwa Ibom State.
                </p>
              </div>
              <div class="history__item">
                <div class="history__indicator"></div>
                <span>8th, October 2021</span>
                <h4>Pitched Our Startup at the AKITECH WEEK 2021</h4>
                <p>
                  LoanIt was among the participants of the Akwa Ibom Tech Week
                  2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- History Section End -->

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