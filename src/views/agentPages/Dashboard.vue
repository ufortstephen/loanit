<template>
  <div v-loading="loading">
    <!-- <WidgetsDropdown /> -->

    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Total Amount Disbursed</h6>
          <h4 id="agent_disburded">{{ totalAmountDisbursed }}</h4>
        </el-card>
      </div>

      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Total Interest</h6>
          <h4 id="interest_recieved">{{ percentTotal }}%</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Total Amount Expected</h6>
          <h4 id="agent_recieved">{{ totalExpected }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Amount Due Today</h6>
          <h4 id="loanees">{{ dueToday }}</h4>
        </el-card>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Number of Loanees</h6>
          <h4 id="agent_disburded">{{ items.length }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Active Loans</h6>
          <h4 id="agent_recieved">{{ items.length }}</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Settled Loans</h6>
          <h4 id="interest_recieved">0</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Due Loans</h6>
          <h4 id="loanees">0</h4>
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
      items: [],
      totalAmountDisbursed: 0,
      percentTotal: 0,
      totalExpected: 0,
      dueToday: 0,
      loading: true,
    };
  },
  methods: {
    async showLoans() {
      try {
        const res = await api.getLoans();
        this.items = res;
        this.getItem();
      } catch (error) {
        // this.showLoans()
      }
    },
    amount(item) {
      return item.amount;
    },
    percent(item) {
      return item.interest;
    },

    today(item) {
      return item.daily_return;
    },
    sum(prev, next) {
      return +prev + +next;
    },
    getItem() {
      let total = this.items.map(this.amount).reduce(this.sum);
      this.totalAmountDisbursed = total;
      let totalExp = total;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });
      this.totalAmountDisbursed = formatter.format(this.totalAmountDisbursed);
      //
      let totalPercent = this.items.map(this.percent).reduce(this.sum);
      this.percentTotal = totalPercent;
      this.totalExpected = +this.percentTotal * totalExp;
      this.totalExpected = formatter.format(this.totalExpected);
      //
      let todayAmt = this.items.map(this.today).reduce(this.sum);
      this.dueToday = formatter.format(todayAmt);
      this.loading = false;
    },
  },
  created() {
    this.showLoans();
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


