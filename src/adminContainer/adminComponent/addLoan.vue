<template>
  <div class="pb-5">
    <h2>Add Loan</h2>
    <div class="loan__container">
      <!-- Steps Header -->
      <el-steps :active="active" finish-status="success">
        <el-step title="Personal Information"><h2>Personnal Info</h2></el-step>
        <el-step title="Other Information"><h2>Other Info</h2></el-step>
        <el-step title="Loan Details"></el-step>
        <el-step title="Preview"></el-step>
      </el-steps>
      <!-- Steps Header -->

      <!-- Add Loan Form -->
      <form action="" class="mt-5" id="myFormId" @submit.prevent="addNewLoan">
        <!-- Personal Information Section -->
        <div class="personal" v-if="personal">
          <div class="row">
            <div class="col-md-6">
              <!-- First Name Form Group -->
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

            <!-- Lasy Name  -->
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
              <!-- Email -->
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
              <!-- Phone Number -->
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
              <!-- Date Of Birth -->
              <div class="form-group">
                <label for="">Date of birth</label>

                <br />
                <div>
                  <el-date-picker
                    v-model="addLoan.date_of_birth"
                    type="date"
                    placeholder="Pick a day"
                    required
                    max="1998-12-31"
                    :picker-options="datePickerOptions1"
                  >
                  </el-date-picker>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <!-- Occupation -->
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
        <!-- Personal Info Ends Here -->

        <!-- Other Information -->
        <div class="other_info" v-if="otherInfo">
          <div class="row">
            <!-- Dependants -->
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
              <!-- Marital Status -->
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
                <!-- Gender -->
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
              <!-- Address -->
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
        <!-- Other Information Ends Here -->

        <!-- Loan Details -->
        <div class="loan_details" v-if="loanDetails">
          <div class="row">
            <div class="col-md-6">
              <!-- Loan Category -->
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
              <!-- Loan Amount -->
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
              <!-- Start Date -->
              <div class="form-group">
                <label for="">Start Date</label> <br />

                <el-date-picker
                  style="width: 195px"
                  value-format="yyyy-MM-dd"
                  v-model="addLoan.start_date"
                  type="date"
                  :picker-options="pickerOptions"
                  placeholder="Select start date"
                >
                </el-date-picker>
              </div>
            </div>
            <div class="col-md-6">
              <!-- Start Date -->
              <div class="form-group">
                <label for="">End Date</label> <br />

                <el-date-picker
                  style="width: 195px"
                  value-format="yyyy-MM-dd"
                  v-model="addLoan.end_date"
                  type="date"
                  :picker-options="pickerOptions"
                  placeholder="Select end date"
                >
                </el-date-picker>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group w-100">
                <label for="">Purpose</label>

                <textarea
                  class="form-control"
                  name=""
                  id=""
                  rows="5"
                  required
                  v-model="addLoan.purpose"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- Preview Loan -->
        <div v-if="preview_loan">
          <el-row>
            <el-col>
              <el-card shadow="hover" class="preview">
                <h5 class="text-center mb-4">Loan It</h5>
                <div class="row">
                  <div class="col-6">
                    <h6>First Name</h6>
                    <p>{{ addLoan.first_name }}</p>
                  </div>
                  <div class="col-6">
                    <h6>Last Name</h6>
                    <p>{{ addLoan.last_name }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <h6>Phone</h6>
                    <p>{{ addLoan.mobile }}</p>
                  </div>
                  <div class="col-6">
                    <h6>Loan Category</h6>
                    <p>{{ addLoan.category }}</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <h6>Loan Amount</h6>
                    <p>NGN {{ addLoan.amount }}</p>
                  </div>
                  <div class="col-6">
                    <h6>Loan Interest</h6>
                    <p>15%</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <h6>Start Date</h6>
                    <p>{{ addLoan.start_date }}</p>
                  </div>
                  <div class="col-6">
                    <h6>End Date</h6>
                    <p>{{ addLoan.end_date }}</p>
                  </div>
                </div>
                <div class="mt-3">
                  <button class="btn btn-dark w-100">Add Loan</button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </form>
    </div>

    <!-- Steps Navigations -->
    <div class="loan__button">
      <el-button
        style="margin-top: 12px"
        v-if="back"
        class="loan__btn"
        @click="goBack"
        >{{ back_text }}</el-button
      >
      <el-button
        style="margin-top: 12px"
        class="loan__btn"
        v-if="loan_buttons"
        @click="next"
        >{{ stepText }}</el-button
      >
    </div>
  </div>
</template>

<script>
import api from "../../helpers/api";
export default {
  data() {
    return {
      // Disable Weekends Function
      datePickerOptions1: {
        disabledDate(date) {
          return new Date("2002-1-1") < date;
        },
      },
      pickerOptions: {
        disabledDate(time) {
          console.log(time.getDay());
          if (time.getDay() == 0) {
            return time.getDay();
          }
          if (time.getDay() == 6) {
            return time.getDay();
          }
        },
      },
      errors: [],
      back: false,
      stepText: "Next",
      personal: true,
      otherInfo: false,
      loanDetails: false,
      preview_loan: false,
      loan_buttons: true,
      back_text: "Back",
      active: 0,

      // Add Loan Models
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
        start_date: "",
        end_date: "",
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
        this.preview_loan = false;
        this.loan_buttons = true;
        this.stepText = "Next";
        this.back_text = "Back";
        this.active = 1;
      } else if (this.active == 1) {
        this.back = true;
        this.personal = false;
        this.otherInfo = true;
        this.loanDetails = false;
        this.preview_loan = false;
        this.loan_buttons = true;
        this.stepText = "Next";
        this.back_text = "Back";
      } else if (this.active == 2) {
        this.personal = false;
        this.otherInfo = false;
        this.loan_buttons = true;
        this.loanDetails = !this.loanDetails;
        this.back_text = "Back";
      } else if (this.active == 3) {
        this.preview_loan = true;
        // this.addNewLoan();
        // this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
        this.stepText = "Next";
        this.back = true;
        this.loan_buttons = false;
        this.back_text = "Edit";
      } else if (this.active++ > 3) {
        this.preview_loan = true;
        // this.addNewLoan();
        this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
        this.loan_buttons = true;
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
        this.preview_loan = false;
        this.loan_buttons = true;
        this.back_text = "Back";
      }
      if (this.active == 2) {
        this.active = 1;
        this.personal = false;
        this.otherInfo = true;
        this.loanDetails = false;
        this.preview_loan = false;
        this.loan_buttons = true;
        this.back_text = "Back";
      }
      if (this.active == 3) {
        this.active = 2;
        this.personal = false;
        this.otherInfo = false;
        this.loanDetails = true;
        this.preview_loan = false;
        this.loan_buttons = true;
        this.back_text = "Back";
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
        this.date_of_birth = "";
        this.addLoan.occupation = "";
        this.addLoan.dependants = "";
        this.addLoan.marital_status = "";
        this.addLoan.gender = "";
        this.addLoan.address = "";
        this.addLoan.category = "";
        this.addLoan.purpose = "";
        this.addLoan.amount = "";
        this.addLoan.interest = "";
        this.addLoan.start_date = "";
        this.addLoan.end_date = "";
        this.personal = true;
        this.otherInfo = false;
        this.loanDetails = false;
        this.preview_loan = false;
        this.loan_buttons = true;
        this.stepText = "Next";
        this.back_text = "Back";
      } catch (error) {
        console.log(error.response);
        if (error.response.status == 422) {
          for (let prop in error.response.data.errors) {
            this.errors.push(error.response.data.errors[prop][0]);
          }
          this.errors.pop();
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
.form-group {
  margin-bottom: 2rem !important;
}

/* Firefox */

input[type="number"] {
  -moz-appearance: textfield !important;
}

@media (max-width: 768px) {
  .el-step__title {
    line-height: 16px;
    /* margin-right: 0.5rem; */
    font-size: small;
  }
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

@media (min-width: 1324px) {
  .preview {
    width: 60%;
    margin: 0px auto;
    cursor: pointer;
  }
}
</style>