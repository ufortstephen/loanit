<template>
  <div class="pb-5">
    <h2>Add Loan</h2>
    <div class="loan__container">
      <el-steps :active="active" finish-status="success">
        <el-step title="Personal Information"><h2>Personnal Info</h2></el-step>
        <el-step title="Other Information"><h2>Other Info</h2></el-step>
        <el-step title="Loan Details"></el-step>
      </el-steps>
      <form action="" class="mt-5" id="myFormId" @submit.prevent="addNewLoan">
        <div class="personal" v-if="personal">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="form-control"
                  placeholder=""
                  required
                  aria-describedby="helpId"
                  v-model="addLoan.first_name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.last_name"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.email"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="mobile">Phone Number</label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  name="mobile"
                  id="mobile"
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.mobile"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Date of birth</label>
                <!-- <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                /> -->
                <br />
                <div>
                  <el-date-picker
                    v-model="addLoan.date_of_birth"
                    type="date"
                    placeholder="Pick a day"
                    required
                  >
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Occupation</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.occupation"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="other_info" v-if="otherInfo">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Dependants</label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class="form-control"
                  name=""
                  required
                  id=""
                  aria-describedby="emailHelpId"
                  placeholder=""
                  v-model="addLoan.dependants"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Marital Status</label>
                <select
                  class="form-control"
                  name=""
                  id=""
                  required
                  v-model="addLoan.marital_status"
                >
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Gender</label>
                <select
                  class="form-control"
                  name=""
                  id=""
                  required
                  v-model="addLoan.gender"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.address"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="loan_details" v-if="loanDetails">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Loan Category</label>
                <select
                  class="form-control"
                  name=""
                  required
                  id=""
                  v-model="addLoan.category"
                >
                  <option>Business Loan</option>
                  <option>Education Loan</option>
                  <option>Personal Loan</option>

                  <option>Others</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Loan Amount</label>
                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  name=""
                  id=""
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.amount"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Repayment Days</label>

                <input
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  name=""
                  id=""
                  required
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.repayment_date"
                />
              </div>
            </div>
            <div class="col-md-6">
              <!-- <div class="form-group">
                <label for="">Loan Interest</label>
                <select
                  class="form-control"
                  name=""
                  id=""
                  v-model="addLoan.interest"
                >
                  <option>2%</option>
                  <option>4%</option>
                  <option>6%</option>
                  <option>8%</option>
                  <option>10%</option>
                  <option>12%</option>
                </select>
              </div> -->
              <div class="form-group">
                <label for="" class="d-block">Loan Interest</label>
                <div class="input-group mb-3">
                  <input
                    type="number"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    class="form-control"
                    v-model="addLoan.interest"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    required
                  />
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row"></div>
          <div class="row">
            <div class="col-md-12">
              <div class="form-group w-100">
                <label for="">Purpose</label>
                <textarea
                  class="form-control"
                  name=""
                  id=""
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="loan__button">
      <el-button
        style="margin-top: 12px"
        v-if="back"
        class="loan__btn"
        @click="goBack"
        >Back</el-button
      >
      <el-button style="margin-top: 12px" class="loan__btn" @click="next">{{
        stepText
      }}</el-button>
    </div>
  </div>
</template>

<script>
import api from "../../helpers/api";
export default {
  data() {
    return {
      errors: [],
      back: false,
      stepText: "Next",
      personal: true,
      otherInfo: false,
      loanDetails: false,
      active: 0,
      addLoan: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        date_of_birth: "",
        occupation: "",
        dependants: "",
        marital_status: "",
        gender: "",
        address: "",
        category: "",
        purpose: "",
        amount: "",
        interest: "",
        repayment_date: "",
      },
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) {
        this.active = 0;
      }
      if (this.active == 0) {
        this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
        this.stepText = "Next";
        this.active = 1;
      } else if (this.active == 1) {
        this.back = true;
        this.personal = false;
        this.otherInfo = true;
        this.loanDetails = false;
        this.stepText = "Next";
      } else if (this.active == 2) {
        this.personal = false;
        this.otherInfo = false;
        this.loanDetails = !this.loanDetails;
      } else if (this.active++ > 2) {
        this.stepText = "Request Loan";
        this.addNewLoan();
        this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
        this.stepText = "Next";
        this.back = false;
        this.active = 0;
      }
    },
    goBack() {
      if (this.active == 1) {
        this.back = false;
        this.active = 0;
        this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
      }
      if (this.active == 2) {
        this.active = 1;
        this.personal = false;
        this.otherInfo = true;
        this.loanDetails = false;
      }
    },
    open() {
      this.$confirm(
        "This will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete completed",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
    async addNewLoan() {
      try {
        const response = await api.addLoan(this.addLoan);
        this.active = 0;
        // console.log(response);
        this.$message({
          message: "New Loan added successfully.",
          type: "success",
        });
        this.addLoan.first_name = "";
        this.addLoan.last_name = "";
        this.addLoan.email = "";
        this.addLoan.mobile = "";
        this.addLoan.date_of_birth = "";
        this.addLoan.occupation = "";
        this.addLoan.dependants = "";
        this.addLoan.marital_status = "";
        this.addLoan.gender = "";
        this.addLoan.address = "";
        this.addLoan.category = "";
        this.addLoan.purpose = "";
        this.addLoan.amount = "";
        this.addLoan.interest = "";
        this.addLoan.repayment_date = "";
      } catch (error) {
        console.log(error.response);
        if (error.response.status == 422) {
          console.log(`${error.response.data.errors.address}`);
          for (let prop in error.response.data.errors) {
            console.log(error.response.data.errors[prop][0]);
            this.errors.push(error.response.data.errors[prop][0]);
          }
          for (let index = 0; index < this.errors.length; index++) {
            setTimeout(() => {
              this.$message.error({
                message: `${this.errors[index]}`,
                position: "top-right",
                duration: 5000,
              });
              if (index > this.errors.length - 1) {
                this.errors = [];
              }
            }, 5);
            index++;
          }
          console.log(this.errors);
        }
      }
    },
  },
};
</script>

<style>
.el-input__icon {
  height: fit-content !important;
}
.loan__button {
  width: 100%;
  display: flex;
  text-align: center;
}
.loan__btn {
  background-color: #3c4b64 !important;
  color: #fff !important;
  /* width: 100% !important; */
}
.loan__btn:focus {
  border: none !important;
  outline: none !important;
}
/* Chrome, Safari, Edge, Opera */

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}
input:focus,
select:focus {
  box-shadow: 0px 1px 1px 1px #3c4b64 !important;
  border: none !important;
}

/* Firefox */

input[type="number"] {
  -moz-appearance: textfield !important;
}

@media (min-width: 768px) {
  .loan__container {
    width: 50%;
    margin: 0px auto;
  }
  .loan__button {
    width: 50%;
    margin: 0px auto;
  }
}
</style>