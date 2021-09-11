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
          <span>{{ paidBy }} </span>
          <br />
          john@gmail.com
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
            >{{ balance }}</span
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
        <div class="text-success">{{ amountBorrowed }}</div>
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
        <div>Category</div>
        <div>{{ loanUsers[7] }}</div>
      </div>
      <div class="d-flex justify-content-between">
        <div>Balance</div>
        <div class="">{{ balance }}</div>
      </div>
    </el-card>

    <div class="my-4" v-if="transactions">
      <h4>Transactions</h4>
      <div v-for="x in loanUsers[31]" :key="x.id">
        <div v-for="y in x" :key="y.index">
          <el-card class="box-card mb-3"
            >{{ y.type }}: {{ y.channel }}
            <span class="amount">{{ y.amount }}</span></el-card
          >

          <!-- {{ y }} -->
        </div>
        <!-- {{ x }} -->
      </div>
      <!-- <div>{{ loanUsers[29] }}</div> -->

      <!-- <el-tag type="danger">Tag 5</el-tag> -->
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
      vm.usersOpened = from.fullPath.includes("admins");
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
      transactions: true,
      amountBorrowed: "",
      dailyPayment: "",
      balance: "",
      success: "danger",
      paidBy: "",
    };
  },

  methods: {
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/superAdmin" });
    },

    // Get Admin Data functon
    async getAdmins() {
      const res = await api.listAllLoans();
      // console.log(res);
      this.items = res;

      // defining detail to be route param id
      const detail = this.$route.params.id;

      // Find detail, params id in response
      const user = this.items.find(
        (item, index) => detail == item.loanee_wallet[0].id
      );
      // console.log(user);

      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];

      //
      this.loanDetails = userDetails;

      this.loanUsers = this.loanDetails.flat();
      // console.log(this.loanUsers);
      this.loan_user = this.loanUsers[31];
      this.amountBorrowed = this.loanUsers[11];
      this.dailyPayment = this.loanUsers[17];
      this.balance = this.loanUsers[27];
      this.paidBy = this.loanUsers[29][0].paid_by;
      this.loading = false;

      // Formatter
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });

      this.amountBorrowed = formatter.format(+this.amountBorrowed);
      this.dailyPayment = formatter.format(+this.dailyPayment);
      this.balance = formatter.format(+this.balance);
    },
    // toggletransactions
    toggletransactions() {
      this.transactions = !this.transactions;
    },
    formatFigures() {
      let allAmounts = document.getElementsByTagName("span");
      allAmounts.forEach((amount) => {
        if (amount.classList.contains("amount")) {
          console.log(amount);
        }
      });
      console.log(99);
      // console.log(allAmounts);
    },

    // Formatter
  },
  created() {
    this.getAdmins();
  },
  mounted() {
    this.formatFigures();
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
