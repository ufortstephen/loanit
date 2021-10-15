<template>
  <div class="all__users all mb-5">
    <h3 class="p-3">All Users</h3>
    <el-table class="search__table">
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Search user by name"
          />
        </template>
      </el-table-column>
    </el-table>
    <el-table
      class="p-3"
      stripe
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.first_name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="First Name" prop="first_name"> </el-table-column>
      <el-table-column label="Last Name" prop="last_name"> </el-table-column>

      <el-table-column label="Email" prop="email"> </el-table-column>
      <el-table-column label="Gender" prop="gender"> </el-table-column>
      <el-table-column label="DOB" prop="date_of_birth"> </el-table-column>
      <el-table-column label="Dependants" prop="dependants"> </el-table-column>

      <el-table-column label="Phone" prop="mobile"> </el-table-column>
      <!-- 
      <el-table-column
        prop="status"
        label="Status"
        width="100"
        :filters="[
          { text: 'approved', value: 'approved' },
          { text: 'pending', value: 'pending' },
          { text: 'settled', value: 'settled' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope" class="p-0" prop="status">
          <el-tag
            :type="scope.row.status === 'pending' ? 'approved' : 'success'"
            style="width: 100% !important"
            disable-transitions
            >{{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column> -->
      <el-table-column label="Add Loan" prop="">
        <template slot-scope="scope" class="p-0" prop="id">
          <el-tag
            class="wallet btn d-flex align-items-center"
            @click="rowClicked(tableData[scope.$index])"
            disable-transitions
          >
            Add Loan
          </el-tag>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :visible.sync="dialogFormVisible" style="z-index: 9999999999">
      <div class="text-center">
        <h5>Issue Loan to {{ user.first_name }}</h5>
      </div>

      <div class="form-group">
        <div class="form-group">
          <label for="">Category</label>

          <select class="form-control" name="" id="" v-model="addLoan.category">
            <option selected>[Select Category]</option>
            <option>Business Loan</option>
            <option>Education Loan</option>
            <option>House Loan</option>
          </select>
        </div>
      </div>
      <div class="form-group">
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

        <label for="">Amount</label>

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
      <div class="form-group">
        <label for="">Start Date</label>

        <input
          type="date"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="addLoan.start_date"
        />
      </div>
      <div class="form-group">
        <label for="">End Date</label>

        <input
          type="date"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          required
          v-model="addLoan.end_date"
        />
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addLoans()">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from "@/helpers/api.js";

export default {
  data() {
    return {
      loading: true,
      scope: "scope",
      tableData: [],
      search: "",
      dialogFormVisible: false,
      user: "",
      addLoan: {
        loan_user_id: "",
        category: "",
        purpose: "",
        amount: "",
        start_date: "",
        end_date: "",
      },
      errors: [],
    };
  },
  methods: {
    filterTag(value, row) {
      return row.status === value;
    },

    rowClicked(e) {
      //   this.$router.push({
      //     path: `loanees/${e}`,
      //   });
      this.dialogFormVisible = true;

      this.user = e;
      this.addLoan.loan_user_id = e.id;
    },
    async addLoans() {
      try {
        const response = await api.addLoan(this.addLoan);
        console.log(response);
        this.$message.success({
          message: `Loan successfully added`,
          position: "top-right",
          duration: 5000,
        });
      } catch (error) {
        console.log(error.response);
        if (error.response.status == 422 || error.response.status == 400) {
          this.errors = error.response.data.errors;

          for (let prop in this.errors) {
            setTimeout(() => {
              this.$message.error({
                message: `${this.errors[prop][0]}`,
                position: "top-right",
                duration: 5000,
              });
            }, 5);
          }
        }
        if (error.response.data.data) {
          this.$message.error({
            message: `${error.response.data.data}`,
            position: "top-right",
            duration: 5000,
          });
        }

        this.addLoan.loan_user_id = "";
        this.addLoan.category = "";
        this.addLoan.purpose = "";
        this.addLoan.amount = "";
        this.addLoan.start_date = "";
        this.addLoan.end_date = "";
      }
    },
  },
  async created() {
    let token = this.$store.getters.isLoggedIn;

    try {
      const response = await api.getUsers({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      this.tableData = response.data.loanee;
      this.tableData.forEach((data) => {
        // Formatter
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 2,
        });
        data.amount = formatter.format(+data.amount);
        data.daily_payment = formatter.format(+data.daily_payment);
        data.loanee_wallet[0].balance = formatter.format(
          +data.loanee_wallet[0].balance
        );
      });

      this.loading = false;
    } catch (error) {}
  },
};
</script>


<style >
.search__table .el-table__empty-block {
  display: none !important;
}
.search__table input {
  height: 40px !important;
}
/* tr {
  cursor: pointer !important;
} */
.all .el-tag--successs {
  background-color: green !important;
  color: #fff !important;
}
.all .el-tag--warning {
  background-color: #ffc107c1 !important;
  color: #fff !important;
}
.v-modal {
  z-index: 0 !important;
}
.el-dialog {
  width: 100% !important;
}

input {
  margin-bottom: 1.5rem;
  padding: 0.5rem;
}
label {
  margin-bottom: 0.5rem;
  color: #000;
}

@media (min-width: 768px) {
  .el-dialog {
    width: 30% !important;
  }
}

.wallet {
  background-color: transparent !important;
  border: 1px solid #3c4b64;
  color: #3c4b64;
  border-radius: 5px;
  padding: 0px 24px !important ;
  width: max-content !important;
  cursor: pointer;
}
@media (max-width: 768px) {
  .wallet {
    padding: 5px 10px !important;
  }
}

@media (min-width: 768px) {
  .search__table input {
    width: 25%;
    height: 40px !important;
  }
  .search__table .el-input__inner {
    font-size: 16px !important;
  }
}
</style>