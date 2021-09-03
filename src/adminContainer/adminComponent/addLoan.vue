<template>
  <div class="pb-5">
    <h2>Add Loan</h2>
    <div class="loan__container">
      <el-steps :active="active" finish-status="success">
        <el-step title="Personal Information"><h2>Personnal Info</h2></el-step>
        <el-step title="Other Information"><h2>Other Info</h2></el-step>
        <el-step title="Loan Details"></el-step>
      </el-steps>
      <form action="" class="mt-5">
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
                  type="text"
                  name="email"
                  id="email"
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
                  type="text"
                  name="mobile"
                  id="mobile"
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
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.dependants"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Marital Status</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.marital_status"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Gender</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.gender"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Address</label>
                <input
                  type="text"
                  name=""
                  id=""
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
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.category"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Purpose</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.purpose"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Loan Amount</label>
                <input
                  type="number"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.amount"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="">Loan Interest</label>
                <input
                  type="number"
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.interest"
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
                  name=""
                  id=""
                  class="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  v-model="addLoan.repayment_date"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="loan__button">
      <el-button style="margin-top: 12px" class="loan__btn" @click="next">{{
        stepText
      }}</el-button>
      <!-- {{addLoan.first_name}} {{addLoan.last_name}} {{addLoan.email}} {{addLoan.mobile}} {{addLoan.date_of_birth}} {{addLoan.mobile}} {{addLoan.dependants}} {{addLoan.occupation}} <br>
      {{addLoan.dependants}} {{addLoan.marital_status}} {{addLoan.gender}} {{addLoan.address}} {{addLoan.category}} {{addLoan.purpose}} {{addLoan.amount}} {{addLoan.interest}} {{addLoan.repayment_date}} -->
    </div>
  </div>
</template>

<script>
import api from "../../helpers/api";
export default {
  data() {
    return {
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
      } else if (this.active == 1) {
        this.personal = false;
        this.otherInfo = true;
        this.loanDetails = false;
        this.stepText = "Next";
      } else if (this.active == 2) {
        this.stepText = "Request Loan";
        this.personal = false;
        this.otherInfo = false;
        this.loanDetails = !this.loanDetails;
      } else if (this.active == 3) {
        this.addNewLoan();
        this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
        this.stepText = "Next";
      }
    },
    async addNewLoan() {
      try {
        const response = await api.addLoan(this.addLoan);
        this.active = 0;
        console.log(response);
        this.$message({
          message: "New Loan added successfully.",
          type: "success",
        });
      } catch (error) {
        console.log(error);
        this.$message({
          message: "Error adding new loan",
          type: "error",
        });
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

  text-align: center;
}
.loan__btn {
  background-color: #3c4b64 !important;
  color: #fff !important;
  width: 100% !important;
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