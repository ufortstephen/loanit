<template>
  <div>
    <div class="mb-5">
      <!-- {{ user.amount }} <br />
      <br />
      {{ loaneePersonalDetails }} <br />
      <br />
      {{ loaneeWallet }} <br />
      <br />
      {{ topUps }} <br />
      <br />
      <br />
      {{ user }} -->
    </div>

    <!-- profile -->
    <div class="row align-items-center">
      <div class="col-md-12 grid-margin stretch-card mb-0">
        <div class="card">
          <div class="card-body d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0" v-if="user.loanee">
              {{ user.loanee.first_name }} {{ user.loanee.last_name }}
            </h5>
            <div>
              <button
                class="btn btn-dark"
                @click="approveLoan()"
                v-if="approved"
              >
                Approve Loan
              </button>

              <div>
                <el-tag type="danger" v-if="user.top.data.length > 1"
                  >Bal: {{ user.top.data[0].balance }}</el-tag
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dark mx-3 p-2 p-lg-5 w-100">
        <div class="row text-center text-md-left">
          <div class="col-md-6 text-center my-3 my-md-0">
            <div>
              <el-avatar :src="preview" class="avatar"></el-avatar>
            </div>
          </div>
          <div class="col-md-6 d-lg-flex justify-content-between">
            <div class="row align-items-center w-100">
              <div class="col-6">
                <div class="text-left">
                  <p class="text-white">Name:</p>
                  <p class="text-white">Email:</p>

                  <p class="text-white">Amount Borrowed:</p>
                  <p class="text-white">Account Status:</p>
                  <p class="text-white">Balance:</p>
                  <p class="text-white">Due Date:</p>
                </div>
              </div>
              <div class="col-6">
                <div class="text-right">
                  <p class="text-white" v-if="user.loanee.first_name">
                    {{ user.loanee.first_name }}
                    {{ user.loanee.last_name }}
                  </p>
                  <p class="text-white">{{ user.loanee.email }}</p>

                  <p class="text-white">
                    {{ user.amount }}
                  </p>
                  <p class="text-white">
                    {{ user.status }}
                  </p>
                  <p class="text-white">
                    {{ user.total_payment }}
                  </p>
                  <p class="text-white">
                    {{ user.end_date }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row transactions">
      <div class="col-md-12 p-0" style="padding: 0 !important">
        <el-tabs type="border-card">
          <el-tab-pane class="overflow">
            <span slot="label"> All Transactions</span>

            <div class="my-4" v-if="true">
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
                  <tr v-for="(item, i) in loaneeWallet" :key="i">
                    <th scope="row">
                      <el-tag
                        :type="item.type === 'Credit' ? 'success' : 'danger'"
                        disable-transitions
                        >{{ item.type }}
                      </el-tag>
                    </th>
                    <td class="font-weight-bod">{{ item.amount }}</td>
                    <td class="font-weight-bod">{{ item.channel }}</td>

                    <td>{{ item.updated_at }}</td>
                    <td class="font-weight-bold">{{ item.balance }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Credit" class="overflow">
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

                  <td>{{ item.updated_at }}</td>
                  <td class="font-weight-bold">{{ item.balance }}</td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
          <el-tab-pane label="Debit" class="overflow">
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

                  <td>{{ item.updated_at }}</td>
                  <td class="font-weight-bold">{{ item.balance }}</td>
                </tr>
              </tbody>
            </table>
          </el-tab-pane>
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
      loading: true,
      approved: true,
      items: [],
      user: [],
      preview:
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      loaneePersonalDetails: "",
      loaneeWallet: "",
      topUps: "",
      creditTransactions: "",
      debitTransactions: "",
      daily_payment: "",
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
      // this.usersOpened
      //   ? this.$router.go(-1)
      //   : this.$router.push({ path: "/agentAdmin" });
      history.back();
    },

    // Get Loanees Data functon
    async getLoanees() {
      try {
        // Get response data from endpoint
        const res = await api.listAllLoans();
        this.items = res.data.loans;

        // defining loanee_wallet_id to be route param id
        let user_id = this.$route.params.id;

        // Find loanee_wallet_id, params id in response
        // const loanee = this.items.find(
        //   (item, index) => user_id == item.id
        // );

        // Assigning loanee details to user variable
        this.user = this.items.find((item, index) => user_id == item.id);
        if (this.user.status == "approved") {
          this.approved = false;
        } else {
          this.aproved = true;
        }

        console.log(this.items);
        console.log(this.user);

        // Getting Loanee User Details

        // Getting Loanee Wallet Details
        this.loaneeWallet = this.user.top.data;
        console.log(this.loanee_wallet);

        // Getting Loanee Wallet TopUps
        this.topUps = this.user.loanee_wallet;

        console.log(this.loaneeWallet);

        // Formatter
        const formatPrice = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 2,
        });

        this.user.total_payment = formatPrice.format(+this.user.total_payment);

        // Find DebitTransactions, params id in response
        this.debitTransactions = this.loaneeWallet.filter(
          (item, index) => "Debit" == item.type
        );

        // Find creditTransactions, params id in response
        this.creditTransactions = this.loaneeWallet.filter(
          (item, index) => "Credit" == item.type
        );

        // Formatting Figures
        this.user.amount = formatPrice.format(+this.user.amount);
        this.daily_payment = formatPrice.format(+this.user.daily_payment);

        this.loaneeWallet.forEach((element) => {
          element.amount = formatPrice.format(+element.amount);
          element.balance = formatPrice.format(+element.balance);
        });

        // Getting DailyPayment Details
        this.dailyPaymentDetails.loan_id = this.user.loanee_wallet[0].loan_id;

        // this.dailyPaymentDetails.loanee_id =
        this.user.loanee_wallet[0].loanee_id;

        this.dailyPaymentDetails.wallet_id = this.user.loanee_wallet[0].id;

        this.dailyPaymentDetails.amount = this.user.daily_payment;

        this.user.loanee_wallet[0].balance = formatPrice.format(
          +this.user.loanee_wallet[0].balance
        );

        // this.loading = false;
      } catch (error) {
        console.log(error);
      }
      //
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
        console.log(error.response);
        this.$message({
          type: "error",
          message: `${error.response.data.data}`,
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
      if (value) {
        console.log(value);
        try {
          this.dailyPaymentDetails.amount = value;
          const response = await api.makePartPayment(this.dailyPaymentDetails);
          console.log(response);
          this.$message({
            type: "success",
            message: "Part Payment of" + " " + value + " " + "made",
          });
          this.getLoanees();
        } catch (error) {
          console.log(error.response);
          this.$message({
            type: "error",
            message: `${error.response.data.data}`,
          });
        }
      } else {
        this.$message({
          type: "error",
          message: `Please Input am amount`,
        });
      }
    },

    async approveLoan() {
      try {
        let response = await api.approveLoan({
          id: this.user.id,
          status: "approved",
        });

        console.log(response);
        this.getLoanees();
      } catch (error) {
        console.log(error.response);
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
.overflow {
  overflow: scroll !important;
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
  .overflow::-webkit-scrollbar {
    display: none;
  }
}

.avatar {
  width: 150px;
  height: 150px;
}
.right {
  right: 0px;
}

@media (min-width: 768px) {
  .avatar {
    width: 200px;
    height: 200px;
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

