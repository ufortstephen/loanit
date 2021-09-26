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
          <h6 class="mb-3">Amount Recieved Today</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment.today">{{ daily_payment.today.total }}</h4>
          </div>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Recieved This Week</h6>
          <h4 v-if="daily_payment.week" id="agent_recieved">
            {{ daily_payment.week.total }}
          </h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Recieved This Month</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment.month">{{ daily_payment.month.total }}</h4>
          </div>
        </el-card>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total Amount Expected</h6>
          <div class="d-flex justify-content-between">
            <h4>{{ amountDisburded.total }}</h4>
          </div>
        </el-card>
      </div>

      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3 analytics__header__tet">
            Amount Expected  Today
          </h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment.today">{{ daily_payment.today.total }}</h4>
          </div>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Expected This Week</h6>
          <h4 v-if="daily_payment.week" id="agent_recieved">
            {{ daily_payment.week.total }}
          </h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Expected This Month</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment.month">{{ daily_payment.month.total }}</h4>
          </div>
        </el-card>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="">Administrators</h6>
          <h4 id="agent_disburded" class="">{{ admins.count }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Users</h6>
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
          <h6>Default Loans</h6>
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
        // location.reload();
      }
    },
  },
  created() {
    if (!this.userDetails.first_name === "Super") {
      this.$router.push("/agentAdmin");
    }
    this.getDashboardAnalytics();
    let getToken = this.$store.getters.isLoggedIn;
    this.userDetails = this.$store.getters.userData;
  },
  mounted() {},
};
</script>

<style scoped>
.analytics__header__text {
  color: #182143;
  font-weight: 600;
}
@media (max-width: 768px) {
  .col-md-3 {
    margin-bottom: 2rem;
  }
  .el-card__body {
    height: 120px;
  }
}
</style>


