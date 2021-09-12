<template>
  <div class="user_details" v-loading="loading">
    <div class="d-sm-flex justify-content-between px-3 mb-5">
      <div>
        <h4>Loanee Dashboard</h4>
        <p class="mb-0">{{ paidBy }}</p>
        <p>john@gmail.com</p>
      </div>
      <div>
        <div class="balance__container">
          <p class="mb-0">&nbsp; Balance</p>
          <h4 class="fa-1x">- {{ balance }}</h4>
        </div>
      </div>
    </div>

    <div class="row analytics__container">
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-4">
            <el-card class="box-card">
              <div>
                <h6 class="mb-3">Amount Borrowed</h6>
                <h4>{{ amountBorrowed }}</h4>
              </div>
            </el-card>
          </div>
          <div class="col-md-4">
            <el-card class="box-card">
              <div>
                <h6 class="mb-3">Due Today</h6>
                <h4>{{ dailyPayment }}</h4>
              </div>
            </el-card>
          </div>
          <div class="col-md-4">
            <el-card class="box-card">
              <div>
                <h6 class="mb-3">Total Amount Paid</h6>
                <h4>{{ amountBorrowed }}</h4>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div
        class="col-md-2 align-self-center text-center"
        style="cursor: pointer"
      >
        <!-- <i class="fa fa-plus-circle fa-3x mb-2" aria-hidden="true"></i>

        <h6>Add New Loan</h6> -->
      </div>
    </div>

    <!-- <div class="mb-5 payment__buttons px-2">
      <button @click="confirmDailyPayment">
        <i class="fa fa-money" aria-hidden="true"></i> Make daily payment</button
      ><button @click="promptBulkPayment()">
        <i class="fa fa-paypal" aria-hidden="true"></i>Make bulk payment</button
      ><button>
        <i class="fa fa-sign-out" aria-hidden="true"></i>Settle Loan
      </button>
    </div> -->

    <div class="row transactions">
      <div class="col-md-10">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"> All Transactions</span>
            <div class="my-4" v-if="transactions">
              <p>Transactions</p>

              <div v-for="x in transactionDetails" :key="x.loan_id">
                <div class="d-flex justify-content-between">
                  <div class="d-flex">
                    <div
                      class="align-self-center mr-3"
                      style="border-radius: 50%"
                    >
                      <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <div>{{ x.type }}</div>

                      <span
                        :type="x.channel === 'Borrowed' ? 'success' : 'danger'"
                        disable-transitions
                        ><h6>{{ x.channel }}</h6>
                      </span>
                    </div>
                  </div>

                  <div>
                    <span>
                      <el-tag
                        :type="x.channel === 'Borrowed' ? 'success' : 'danger'"
                        disable-transitions
                        >{{ x.amount }}
                      </el-tag></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Credit">
            <div v-for="x in creditTransactions" :key="x.wallet_id">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <div
                    class="align-self-center mr-3"
                    style="border-radius: 50%"
                  >
                    <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                  </div>
                  <div class="d-flex flex-column">
                    <div>{{ x.type }}</div>

                    <span
                      :type="x.channel === 'Borrowed' ? 'success' : 'danger'"
                      disable-transitions
                      ><h6>{{ x.channel }}</h6>
                    </span>
                  </div>
                </div>

                <div>
                  <span>
                    <el-tag
                      :type="x.channel === 'Borrowed' ? 'success' : 'danger'"
                      disable-transitions
                      >{{ x.amount }}
                    </el-tag></span
                  >
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Debit">
            <div v-for="x in debitTransactions" :key="x.id">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <div
                    class="align-self-center mr-3"
                    style="border-radius: 50%"
                  >
                    <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                  </div>
                  <div class="d-flex flex-column">
                    <div>{{ x.type }}</div>

                    <span
                      :type="x.type === 'Credit' ? 'success' : 'danger'"
                      disable-transitions
                      ><h6>{{ x.channel }}</h6>
                    </span>
                  </div>
                </div>

                <div>
                  <span>
                    <el-tag
                      :type="x.type === 'Credit' ? 'success' : 'danger'"
                      disable-transitions
                      >{{ x.amount }}
                    </el-tag></span
                  >
                </div>
              </div>
            </div></el-tab-pane
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
    };
  },

  methods: {
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/agentAdmin" });
    },

    // Get Loanees Data functon
    async getLoanees() {
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
      // Formatter
      const formatPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });
      //
      this.loanDetails = userDetails;
      this.prices = this.loanDetails[15][1].data;
      this.prices.forEach((price) => {
        console.log(price.amount);
        price.amount = formatPrice.format(+price.amount);
        console.log(price.amount);
      });

      // Creating a flat Aarray
      this.loanUsers = this.loanDetails.flat();

      this.loan_user = this.loanUsers[31];
      this.amountBorrowed = this.loanUsers[11];
      this.dailyPayment = this.loanUsers[17];
      this.balance = this.loanUsers[29][0].balance;
      this.paidBy = this.loanUsers[29][0].paid_by;

      // Getting Payment Details
      this.dailyPaymentDetails.loan_id = this.loanUsers[29][0].loan_id;
      this.dailyPaymentDetails.loanee_id = this.loanUsers[29][0].loanee_id;
      this.dailyPaymentDetails.wallet_id = this.loanUsers[29][0].id;
      this.dailyPaymentDetails.amount = this.loanUsers[17];
      this.loading = false;

      console.log(this.loanUsers[31]);

      this.transactionDetails = this.loanUsers[31].data;
      this.transactionDetails.forEach((type) => {
        console.log(type);
        if (type.type == "Credit") {
          this.creditTransactions.push(type);
        } else {
          this.debitTransactions.push(type);
        }
      });

      console.log(this.creditTransactions);

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
  mounted() {
    this.formatFigures();
  },
};
</script>

<style scoped>
button,
button:focus {
  border: none;
  outline: none;
}
.d-flex {
  margin-bottom: 1rem;
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
  /* color: black !important; */
}
.balance__container {
  /* background-blend-mode: overlay; */
  background-color: #3c4b64e7;
  padding: 1rem 1.6rem;
  color: #fff;
  border-radius: 10px;
  margin: 2rem 0;
  /* opacity: 0.5; */
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
  margin: 5rem 0;
}

.el-tag {
  font-size: 1rem !important;
  font-weight: bold;
}
.el-tabs__header {
  background: #3c4b64e7 !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: red !important;
}

@media (min-width: 768px) {
  .payment__buttons {
    flex-direction: row;
  }
  .analytics__container {
    margin-top: 4rem;
    margin-bottom: 2rem;
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
