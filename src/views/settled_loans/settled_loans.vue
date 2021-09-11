<template>
  <div class="all__users all">
    <h3 class="p-3">Settled Loans {{ tableData.length }}</h3>

    <el-table
      class="p-3"
      stripe
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.loan_user.first_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            data.loan_user.last_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            data.id.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="First name" prop="loan_user.first_name">
      </el-table-column>
      <el-table-column label="Last name" prop="loan_user.last_name">
      </el-table-column>
      <!-- <el-table-column label="Email" prop="loan_user.email"> </el-table-column> -->
      <!-- <el-table-column label="Amount" prop="amount"> </el-table-column> -->

      <el-table-column label="Date Issued" prop="date_issued">
      </el-table-column>

      <el-table-column label="Repayment Date" prop="repayment_date">
      </el-table-column>

      <el-table-column label="Status" prop="status"> </el-table-column>
      <el-table-column label="Admin" prop="admin.first_name"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from "@/helpers/api.js";

export default {
  data() {
    return {
      scope: "scope",
      tableData: [],
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    async getallLoanees() {
      //get all users from api
      try {
        const response = await api.settledLoans();
        console.log(response);
        this.tableData = response;
      } catch (error) {
        console.log(error.response);
      }
    },
    filterTag(value, row) {
      return row.status === value;
    },
  },
  created() {
    this.getallLoanees();
  },
};
</script>


<style>
.search__table .el-table__empty-block {
  display: none !important;
}
.search__table input {
  height: 40px !important;
}

.all .el-tag--successs {
  background-color: green !important;
  color: #fff !important;
}
.all .el-tag--warning {
  background-color: #ffc107c1 !important;
  color: #fff !important;
}

@media (min-width: 768px) {
  .search__table input {
    width: 40%;
    height: 40px !important;
  }
  .search__table .el-input__inner {
    font-size: 16px !important;
  }
}
</style>