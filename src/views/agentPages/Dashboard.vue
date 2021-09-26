<template>
  <div v-loading="loading">
    <!-- <WidgetsDropdown /> -->

    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total amount disbursed</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="amount_disbursed">{{ amount_disbursed.total }}</h4>
          </div>
        </el-card>
      </div>

      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Recieved Today</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment">{{ daily_payment.today.total }}</h4>
          </div>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Recieved This Week</h6>
          <h4 v-if="daily_payment">{{ daily_payment.week.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Recieved This Month</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment">{{ daily_payment.month.total }}</h4>
          </div>
        </el-card>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Total Amount Expected</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="amount_disbursed">{{ amount_disbursed.total }}</h4>
          </div>
        </el-card>
      </div>

      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Expected Today</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment">{{ daily_payment.today.total }}</h4>
          </div>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Expected This Week</h6>
          <h4 v-if="daily_payment">{{ daily_payment.week.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6 class="mb-3">Amount Expected This Month</h6>
          <div class="d-flex justify-content-between">
            <h4 v-if="daily_payment">{{ daily_payment.month.total }}</h4>
          </div>
        </el-card>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Total Loanees</h6>
          <h4 v-if="loanee">{{ loanee.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Active Loans</h6>
          <h4 v-if="active_loan">{{ active_loan.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Settled Loans</h6>
          <h4 v-if="settled_loan">{{ settled_loan.total }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Default Loans</h6>
          <h4 v-if="active_loan">{{ active_loan.total }}</h4>
        </el-card>
      </div>
    </div>
    <!-- {{ items }} -->
    <loanees />

    <!-- <users class="my-5" /> -->
  </div>
</template>

<script>
import api from "@/helpers/api";
// import MainChartExample from "./charts/MainChartExample";
// import WidgetsDropdown from "./widgets/WidgetsDropdown";
import loanees from "@/adminContainer/adminComponent/loanees.vue";
// import users from "./users/Users.vue";
// import WidgetsBrand from "./widgets/WidgetsBrand";

export default {
  name: "Dashboard",
  components: {
    // MainChartExample,
    // WidgetsDropdown,
    loanees,
    // users,
    // WidgetsBrand,
  },
  data() {
    return {
      loading: true,
      userDetails: "",
      items: [],
      totalAmountDisbursed: 0,
      percentTotal: 0,
      totalExpected: 0,
      dueToday: 0,
      token: "",
      analytics: "",
      amount_disbursed: "",
      loanee: "",
      daily_payment: "",
      active_loan: "",
      settled_loan: "",
      admins: "",
    };
  },
  methods: {
    async getAnalytics() {
      try {
        const response = await api.adminAnalytics();
        console.log(response);
        this.analytics = response;
        this.amount_disbursed = response.total_amount_disbursed;
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

        this.amount_disbursed.total = formatter.format(
          +this.amount_disbursed.total
        );
        this.amount_disbursed.today.total = formatter.format(
          +this.amount_disbursed.today.total
        );
        this.amount_disbursed.month.total = formatter.format(
          +this.amount_disbursed.month.total
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
        this.loading = false;
      } catch (error) {
        // this.showLoans()
      }
    },
  },
  created() {
    this.getAnalytics();
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


