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
            data.loanee_wallet[0].paid_by
              .toLowerCase()
              .includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Name" prop="loanee_wallet[0].paid_by">
      </el-table-column>

      <el-table-column label="Date Issued" prop="date_issued">
      </el-table-column>
      <el-table-column label="Due Date" prop="end_date"> </el-table-column>
      <el-table-column label="Interval" prop="interval"> </el-table-column>

      <el-table-column label="Amount" prop="amount"> </el-table-column>
      <el-table-column label="Daily Payment" prop="daily_payment">
      </el-table-column>
      <el-table-column label="Balance" prop="total_payment"> </el-table-column>
      <!-- <el-table-column label="Status" prop="status"> </el-table-column> -->

      <el-table-column
        prop="status"
        label="Status"
        width="100"
        :filters="[
          { text: 'active', value: 'active' },
          { text: 'due', value: 'due' },
          { text: 'settled', value: 'settled' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope" class="p-0" prop="loanee_wallet[0].id">
          <el-tag
            :type="scope.row.status === 'active' ? 'success' : 'warning'"
            disable-transitions
            >{{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="History" prop="">
        <template slot-scope="scope" class="p-0" prop="loanee_wallet[0].id">
          <el-tag
            class="wallet btn d-flex align-self-center"
            @click.native.prevent="
              rowClicked(tableData[scope.$index].loanee_wallet[0].id)
            "
            disable-transitions
            >Wallet
          </el-tag>
        </template>
      </el-table-column>
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
    rowClicked(e) {
      // console.log(e);
      this.$router.push({
        path: `users/${e}`,
      });
    },

    handleEdit(index, row) {
      // console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
    },
    async getallLoanees() {
      //get all users from api
      try {
        const response = await api.listAllLoans();
        // console.log(response);
        this.tableData = response;
      } catch (error) {
        // console.log(error.response);
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