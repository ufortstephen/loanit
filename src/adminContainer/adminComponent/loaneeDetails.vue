<template>
  <div class="user_details">
    <!-- <h5 class="mb-4">
      User Wallet : {{ loan_user.first_name }} {{ loan_user.last_name }}
      {{ loanUsers[5] }}
    </h5> -->
    <h6></h6>

    <el-card class="box-card" v-loading="loading">
      <div
        slot="header"
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <span>{{ loan_user.first_name }} {{ loan_user.last_name }}</span>
          <br />
          {{ loan_user.email }}
          <br />
          {{ loan_user.mobile }}
        </div>
        <div class="text-right">
          <span class="text-danger fa-2x"
            ><el-dropdown>
              <el-button type="text" class="text-danger">
                <i class="fa fa-caret-down mr-2" aria-hidden="true"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <span @click="toggletransactions">
                  <el-dropdown-item>View Transactions</el-dropdown-item></span
                >
                <el-dropdown-item>View Account Log</el-dropdown-item>
              </el-dropdown-menu> </el-dropdown
            >{{ amountBorrowed }}</span
          >
          <br />
          <!-- <el-button type="text">Manage</el-button> -->
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <div>User ID</div>
        <div>{{ loanUsers[5] }}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Status</div>
        <div>{{ loanUsers[19] }}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Amount Borowed</div>
        <div>{{ amountBorrowed }}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Interest</div>
        <div>{{ loanUsers[15] }}%</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Daily Payment</div>
        <div>{{ dailyPayment }}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Interval</div>
        <div>{{ loanUsers[25] }} days</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Balance</div>
        <div>{{ amountBorrowed }}</div>
      </div>
    </el-card>

    <div class="my-4" v-if="transactions">
      <h4>Transactions</h4>

      <el-tag type="success">Tag 2</el-tag>

      <el-tag type="danger">Tag 5</el-tag>
    </div>

    <div class="btn btn-dark my-3" @click="goBack">Back</div>
  </div>
</template>

<script>
import api from "@/helpers/api";

export default {
  name: "User",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.usersOpened = from.fullPath.includes("loanees");
    });
  },
  data() {
    return {
      items: [],
      loanDetails: "",
      usersOpened: null,
      loanUsers: "",
      loansIssued: false,
      loanIssuedText: "Show Issued Loans",
      loan_user: "",
      loading: true,
      // Transactions
      transactions: false,
      amountBorrowed: "",
      dailyPayment: "",
    };
  },

  methods: {
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/agentAdmin" });
    },

    // Get Admin Data functon
    async getAdmins() {
      const res = await api.getLoans();
      console.log(res);
      this.items = res;

      // defining detail to be route param id
      const detail = this.$route.params.id;

      // Find detail, params id in response
      const user = this.items.find(
        (item, index) => detail == item.loan_user.id
      );

      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];

      //
      this.loanDetails = userDetails;
      this.loanUsers = this.loanDetails.flat();
      this.loan_user = this.loanUsers[31];
      this.amountBorrowed = this.loanUsers[11];
      this.dailyPayment = this.loanUsers[17];
      this.loading = false;

      // Formatter
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });
      this.amountBorrowed = formatter.format(+this.amountBorrowed);
      this.dailyPayment = formatter.format(+this.dailyPayment);
    },
    // toggletransactions
    toggletransactions() {
      this.transactions = !this.transactions;
    },

    // Formatter
    format() {},
  },
  created() {
    this.getAdmins();
  },
};
</script>

<style scoped>
.d-flex {
  margin-bottom: 1rem;
}
.el-tag {
  width: 100% !important;
  display: block;
  text-align: left !important;
  margin-bottom: 0.5rem;
  color: black I !important;
}
@media (min-width: 968px) {
  .user_details {
    width: 50%;
    margin: 0px auto;
  }
}
</style>
