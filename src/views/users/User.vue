<template>
  <div class="user_details" v-loading="loading">
    <div class="row el-card mx-0">
      <div class="col-md-6 border-right">
        <div class="d-md-flex flex-column py-3">
          <h6>{{ loaneeDetails.first_name }} {{ loaneeDetails.last_name }}</h6>
          <h6>{{ loaneeDetails.email }}</h6>
          <h6>{{ loaneeDetails.mobile }}</h6>
          <h6>{{ loaneeDetails.address }}</h6>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-md-flex justify-content-between py-3">
          <el-tag type="info"> Borrowed- {{ amountBorrowed }}</el-tag>
          <el-tag type="info"> Due Today- {{ dailyPayment }}</el-tag>
          <el-tag type="danger">Balance -{{ balance }}</el-tag>
        </div>
      </div>
    </div>

    <div class="row transactions">
      <div class="col-md-12 p-0" style="padding: 0 !important">
        <el-tabs type="border-card">
          <el-tab-pane style="overflow: scroll !important">
            <span slot="label"> All Transactions</span>
            <div class="my-4" v-if="transactions">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in transactionDetails" :key="i">
                    <th scope="row">
                      <el-tag
                        :type="item.type === 'Credit' ? 'success' : 'danger'"
                        disable-transitions
                        >{{ item.type }}
                      </el-tag>
                    </th>
                    <td class="font-weight-bod">{{ item.amount }}</td>
                    <td class="font-weight-bod">{{ item.channel }}</td>

                    <td>{{ item.type }}</td>
                    <td class="font-weight-bold">{{ item.balance }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Credit" style="overflow: scroll !important">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in creditTransactions" :key="i">
                  <th scope="row">
                    <el-tag
                      :type="item.type === 'Credit' ? 'success' : 'danger'"
                      disable-transitions
                      >{{ item.type }}
                    </el-tag>
                  </th>
                  <td class="font-weight-bod">{{ item.amount }}</td>
                  <td class="font-weight-bod">{{ item.channel }}</td>

                  <td>{{ item.type }}</td>
                  <td class="font-weight-bold">{{ item.balance }}</td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
          <el-tab-pane label="Debit" style="overflow: scroll !important">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in debitTransactions" :key="i">
                  <th scope="row">
                    <el-tag
                      :type="item.type === 'Credit' ? 'success' : 'danger'"
                      disable-transitions
                      >{{ item.type }}
                    </el-tag>
                  </th>
                  <td class="font-weight-bod">{{ item.amount }}</td>
                  <td class="font-weight-bod">{{ item.channel }}</td>

                  <td>{{ item.type }}</td>
                  <td class="font-weight-bold">{{ item.balance }}</td>
                </tr>
              </tbody>
            </table></el-tab-pane
          >
        </el-tabs>
      </div>
      <div class="col-md-2">
        <div class="d-flex justify-content-between">
          <div></div>
        </div>
      </div>
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
      credit: false,
      creditTransactions: [],
      debitTransactions: [],
      paymentType: [],
      loanDetails: "",
      usersOpened: null,
      loanUsers: "",
      loansIssued: false,
      loanIssuedText: "Show Issued Loans",
      loan_user: "",
      loaneeDetails: "",

      loading: true,
      // Transactions
      transactions: true,
      amountBorrowed: "",
      dailyPayment: "",
      balance: "",
      success: "danger",
      paidBy: "",
      prices: [],
      transactionDetails: [],
      dailyPaymentDetails: {
        loan_id: "",
        loanee_id: "",
        wallet_id: "",
        amount: "",
      },
      green_balance: false,
      red_balance: true,
    };
  },

  methods: {
    goBack() {
      // this.usersOpened
      //   ? this.$router.go(-1)
      //   : this.$router.push({ path: "/agentAdmin" });
      history.back();
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },

    // Get Loanees Data functon
    async getLoanees() {
      const res = await api.viewAllLoans();
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
      // Formatter
      const formatPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });
      //
      this.loanDetails = userDetails;

      this.prices = this.loanDetails[15][1];
      // Creating a flat Aarray
      this.loanUsers = this.loanDetails.flat();
      console.log(this.loanUsers);

      this.prices.forEach((price) => {
        price.amount = formatPrice.format(+price.amount);
        price.balance = formatPrice.format(+price.balance);
        console.log(price.amount);
      });
      this.loaneeDetails = this.loanUsers[29];
      this.loan_user = this.loanUsers[31];
      this.amountBorrowed = this.loanUsers[11];
      this.dailyPayment = this.loanUsers[17];
      this.balance = this.loanUsers[31][0].balance;
      this.paidBy = this.loanUsers[31][0].paid_by;
      console.log(this.loanUsers[31][0].balance);
      console.log(this.balance);
      if (this.balance == "NGN 0.00") {
        this.red_balance = false;
        this.green_balance = true;
      } else {
      }

      // Getting Payment Details
      // this.dailyPaymentDetails.loan_id = this.loanUsers[29][0].loan_id;
      // this.dailyPaymentDetails.loanee_id = this.loanUsers[29][0].loanee_id;
      // this.dailyPaymentDetails.wallet_id = this.loanUsers[29][0].id;
      // this.dailyPaymentDetails.amount = this.loanUsers[17];
      this.loading = false;

      console.log(this.loanUsers[31]);

      this.transactionDetails = this.loanUsers[33].data;

      // Formatter
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });
      this.amountBorrowed = formatter.format(+this.amountBorrowed);
      this.dailyPayment = formatter.format(+this.dailyPayment);
      // this.balance = formatter.format(+this.balance);

      console.log(this.balance);

      this.transactionDetails.forEach((type) => {
        type.amount = formatter.format(+type.amount);
        type.balance = formatter.format(+type.balance);

        if (type.type == "Credit") {
          this.creditTransactions.push(type);
        } else {
          this.debitTransactions.push(type);
        }
      });

      console.log(this.creditTransactions);
    },
    // toggletransactions
    toggletransactions() {
      this.transactions = !this.transactions;
    },

    // Prompt Confirm
    confirmDailyPayment() {
      this.$confirm("Approve daily payment?", {
        confirmButtonText: "YES",
        cancelButtonText: "NO",
        type: "warning",
      })
        .then(() => {
          this.makeDailyPayment();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Payment cancelled",
          });
        });
    },

    // Make Daily Payment
    async makeDailyPayment() {
      try {
        const response = await api.makeDailyPayment(this.dailyPaymentDetails);
        console.log(response);
        this.$message({
          type: "success",
          message: "Payment successful",
        });
        this.getLoanees();
      } catch (error) {
        console.log(response.error);
        this.$message({
          type: "error",
          message: `${response.error}`,
        });
      }
    },

    // Prompt Bulk Payment
    promptBulkPayment() {
      this.$prompt("Please input amount", "Bulk Payment", {
        confirmButtonText: "OK",
        inputType: "number",
        cancelButtonText: "Cancel",
      })
        .then(({ value }) => {
          this.makePartPayment({ value });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Payment canceled",
          });
        });
    },

    // Make Part  Payment
    async makePartPayment({ value }) {
      console.log(value);
      try {
        this.dailyPaymentDetails.amount = value;
        const response = await api.makePartPayment(this.dailyPaymentDetails);
        console.log(response);
        this.$message({
          type: "success",
          message: "Bulk Payment of" + " " + value + " " + "made",
        });
        this.getLoanees();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getLoanees();
  },
  mounted() {},
};
</script>

<style scoped>
button,
button:focus {
  border: none;
  outline: none;
}

.payment__buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.payment__buttons button {
  border: 1px solid #3c4b64e7;
  padding: 0.5rem;
  border-radius: 10px;
}
.payment__buttons i {
  margin-right: 0.45rem;
}
input[type="number" i]::-webkit-inner-spin-button:focus,
input[type="number" i]::-webkit-inner-spin-button:active,
input[type="number" i]::-webkit-outer-spin-button:active,
input[type="number" i]::-webkit-outer-spin-button:focus {
  -webkit-appearance: none !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
.el-tag {
  width: 100% !important;
  display: block;
  text-align: left !important;
  margin-bottom: 0.5rem;
  width: max-content !important;
}
.balance__container {
  background-color: #f56c6c;
  padding: 1rem 1.6rem;
  color: #fff;
  border-radius: 10px;
  margin: 2rem 0;
}
.green {
  background-color: #50ae20;
  padding: 1rem 1.6rem;
  color: #fff;
  border-radius: 10px;
  margin: 2rem 0;
}
.col-md-4 .box-card {
  margin-bottom: 1rem;
}
h4 {
  font-size: medium;
}
.amount__style {
  color: green !important;
}
.transactions {
  margin: 1rem 0;
}

.el-tag {
  font-size: 0.8rem !important;
  font-weight: bold;
}
.el-tabs__header {
  background: #3c4b64e7 !important;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: red !important;
}
@media (max-width: 768px) {
  .analytics__container .scroll {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    margin: 2rem 0;
  }
  .transactions {
    margin: 2rem 0;
  }

  .wallet {
    padding: 0 !important;
  }
}

@media (min-width: 768px) {
  .payment__buttons {
    flex-direction: row;
  }
  .analytics__container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .analytics__container .scroll {
    display: flex;
    flex-wrap: wrap;
  }
}
@media (min-width: 968px) {
  /* .user_details {
    width: 50%;
    margin: 0px auto;
  } */

  .balance__container {
    /* background-blend-mode: overlay; */

    margin: 0;
  }
  .col-md-4 .box-card {
    margin-bottom: 0rem;
  }
  h4 {
    font-size: 1.3rem;
  }
}
</style>
