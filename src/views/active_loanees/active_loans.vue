<template>
  <div class="all__users">
    <h4 class="pl-2 pb-3">Active Loans</h4>
    <el-table class="search__table">
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Search user by name, email and mobile"
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
            data.loan_user.first_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            data.loan_user.last_name
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            data.loan_user.email.toLowerCase().includes(search.toLowerCase()) ||
            data.status.toLowerCase().includes(search.toLowerCase()) ||
            data.loan_user.mobile.toLowerCase().includes(search.toLowerCase())
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
      <el-table-column label="Amount due today" prop="daily_return">
      </el-table-column>

      <el-table-column label="Status" prop="status"> </el-table-column>
      <el-table-column label="Admin" prop="admin.first_name"> </el-table-column>
      <!-- <el-table-column
        prop="status"
        label="Status"
        width="100"
        :filters="[
          { text: 'active', value: 'active' },
          { text: 'due', value: 'due' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === 'due' ? 'primary' : 'success'"
            disable-transitions
            >{{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column> -->
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
        const response = await api.listAllLoans();
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
.c-main {
  /* padding-top: 0 !important; */
}
.c-main .container-fluid {
  /* padding: 0 !important; */
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