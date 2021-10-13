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
    <div class="user_details" v-loading="false">
      <div class="row el-card mx-0">
        <div class="col-md-6 border-right">
          <div class="d-md-flex flex-column py-3">
            <h6>
              {{ loaneePersonalDetails.first_name }}
              {{ loaneePersonalDetails.last_name }}
            </h6>
            <h6>{{ loaneePersonalDetails.email }}</h6>
            <h6>{{ loaneePersonalDetails.mobile }}</h6>

            {{items}}
            <h6>{{ loaneePersonalDetails.address }}</h6>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-md-flex justify-content-between py-3">
            <el-tag type="info"> Borrowed- {{ user.amount }}</el-tag>
            <!-- <el-tag type="info"> Due Today- {{ daily_payment }}</el-tag> -->

            <el-tag type="danger" v-if="user.loanee_wallet"
              >Balance -{{ user.loanee_wallet[0].balance }}</el-tag
            >
          </div>
          <div class="mb-0 payment__buttons px-0">
            <el-tag type="success" @click="confirmDailyPayment()">
              <i class="fa fa-money" aria-hidden="true"></i> Make daily
              payment</el-tag
            >
            <el-tag type="success" @click="promptBulkPayment()">
              <i class="fa fa-paypal" aria-hidden="true"></i>Make part
              payment</el-tag
            >
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
      items: [],
      user: "",
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
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/agentAdmin" });
      // history.back();
    },

    // Get Loanees Data functon
    async getLoanees() {
      try {
        // Get response data from endpoint
        const res = await api.getMyLoans();
        this.items = res.data;

        // defining loanee_wallet_id to be route param id
        const loanee_wallet_id = this.$route.params.id;

        // Find loanee_wallet_id, params id in response
        const loanee = this.items.find(
          (item, index) => loanee_wallet_id == item.loanee_wallet[0].id
        );

        // Assigning loanee details to user variable
        this.user = loanee;

        console.log(loanee);

        // Getting Loanee User Details
        this.loaneePersonalDetails = loanee.loanee;

        // Getting Loanee Wallet Details
        this.loaneeWallet = this.user.top.data;

        // Getting Loanee Wallet TopUps
        this.topUps = loanee.loanee_wallet;

        // console.log(this.loaneeWallet);

        // Formatter
        const formatPrice = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 2,
        });

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

        this.dailyPaymentDetails.loanee_id =
          this.user.loanee_wallet[0].loanee_id;

        this.dailyPaymentDetails.wallet_id = this.user.loanee_wallet[0].id;

        this.dailyPaymentDetails.amount = this.user.daily_payment;

        this.user.loanee_wallet[0].balance = formatPrice.format(
          +this.user.loanee_wallet[0].balance
        );

        this.loading = false;
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
