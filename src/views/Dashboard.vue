<template>
  <div>
    <!-- Card Rows For Analytics Endpoint -->
    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total Amount Disbursed</h6>
          <div class="d-flex justify-content-between">
            <h4>{{ amountDisburded.total }}</h4>
          </div>
        </el-card>
      </div>

      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total Daily Repayment</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment.today">{{ daily_payment.today.total }}</h4>
          </div>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total Weekly Repayment</h6>
          <h4 v-if="daily_payment.week" id="agent_recieved">{{ daily_payment.week.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total Monthly Repayment</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment.month">{{ daily_payment.month.total }}</h4>
          </div>
        </el-card>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Administrators</h6>
          <h4 id="agent_disburded">{{ admins.count }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Active Loans</h6>
          <h4 id="agent_recieved">{{ active_loan.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Settled Loans</h6>
          <h4 id="interest_recieved">{{ settled_loan.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Due Loans</h6>
          <h4 id="loanees">{{ active_loan.total }}</h4>
        </el-card>
      </div>
    </div>

    <!-- All Loanees Component -->

    <allUsers />

    <!-- All Loanees Component -->
  </div>
</template>

<script>
import api from "@/helpers/api";

import allUsers from "@/views/users/Users.vue";

export default {
  name: "Dashboard",
  components: {
    allUsers,
  },
  data() {
    return {
      userDetails: "",
      items: [],
      totalAmountDisbursed: 0,
      percentTotal: 0,
      totalExpected: 0,
      dueToday: 0,
      token: "",
      analytics: "",
      amountDisburded: "",
      loanee: "",
      daily_payment: "",
      active_loan: "",
      settled_loan: "",
      admins: "",
    };
  },
  methods: {
    async getDashboardAnalytics() {
      try {
        const response = await api.superadminAnalytics();
        console.log(response);
        this.analytics = response;
        this.amountDisburded = response.total_amount_disbursed;
        this.loanee = response.total_loanee;
        this.daily_payment = response.total_daily_payment;
        this.active_loan = response.active_loan;
        this.settled_loan = response.settled_loan;
        this.admins = response.administrators;

        // Formatter
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 2,
        });

        this.amountDisburded.total = formatter.format(
          +this.amountDisburded.total
        );
        this.amountDisburded.today.total = formatter.format(
          +this.amountDisburded.today.total
        );
        this.amountDisburded.month.total = formatter.format(
          +this.amountDisburded.month.total
        );
        this.daily_payment.total = formatter.format(+this.daily_payment.total);
        this.daily_payment.today.total = formatter.format(
          +this.daily_payment.today.total
        );
        this.daily_payment.month.total = formatter.format(
          +this.daily_payment.month.total
        );
        this.daily_payment.week.total = formatter.format(
          +this.daily_payment.week.total
        );
      } catch (error) {}
    },

    refreshPage() {
      if (localStorage.getItem("reloaded")) {
        localStorage.removeItem("reloaded");
      } else {
        localStorage.setItem("reloaded", "1");
        location.reload();
      }
    },
  },
  async created() {
    if (!this.userDetails.first_name === "Super") {
      this.$router.push("/agentAdmin");
    }
    
    let getToken = this.$store.getters.isLoggedIn;
    console.log(getToken);
  },
  mounted() {
    this.getDashboardAnalytics();
    // let getToken = this.$store.getters.isLoggedIn;
    // this.userDetails = this.$store.getters.userData;
    // this.token = getToken;
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .col-md-3 {
    margin-bottom: 2rem;
  }
  .el-card__body {
    height: 120px;
  }
}
</style>


