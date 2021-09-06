<template>
  <div>
    <!-- <WidgetsDropdown /> -->

    <div class="row mb-5">
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Total Amount Disburded</h6>
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
          <h4 id="agent_recieved">9</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Settled Loans</h6>
          <h4 id="interest_recieved">1</h4>
        </el-card>
      </div>
      <div class="col-md-3">
        <el-card class="box-card">
          <h6>Due Loans</h6>
          <h4 id="loanees">0</h4>
        </el-card>
        {{ userDetails }}
      </div>
    </div>
    <!-- {{ items }} -->
    <allUsers />

    <!-- <users class="my-5" /> -->
  </div>
</template>

<script>
import api from "@/helpers/api";
// import MainChartExample from "./charts/MainChartExample";
// import WidgetsDropdown from "./widgets/WidgetsDropdown";
import allUsers from "@/views/users/Users.vue";
// import users from "./users/Users.vue";
// import WidgetsBrand from "./widgets/WidgetsBrand";

export default {
  name: "Dashboard",
  components: {
    // MainChartExample,
    // WidgetsDropdown,
    allUsers,
    // users,
    // WidgetsBrand,
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
    };
  },
  methods: {
    async showLoans() {
      try {
        const res = await api.viewAdmins();
        this.items = res;
      } catch (error) {
        // this.showLoans()
      }
      this.getItem();
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
      this.totalAmountDisbursed = formatter.format(+this.totalAmountDisbursed);
      //
      let totalPercent = this.items.map(this.percent).reduce(this.sum);
      this.percentTotal = totalPercent;
      this.totalExpected = 5000000;
      this.totalExpected = formatter.format(this.totalExpected);
      //
      let todayAmt = 800000;
      this.dueToday = formatter.format(todayAmt);
    },
    refresh() {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else {
        localStorage.removeItem("firstLoad");
      }
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
    
    console.log(this.userDetails);
    //   if (!this.userDetails.first_name === "Super") {
    //   this.$router.push("/agentAdmin");
    // }
    this.showLoans();
  },
  mounted() {
    let getToken = this.$store.getters.isLoggedIn;
    this.userDetails = this.$store.getters.userData;
    this.token = getToken;
    // this.refreshPage()
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


