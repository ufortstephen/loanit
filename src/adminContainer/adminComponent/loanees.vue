<template>
  <div class="all__users loanees">
    <h3 class="p-3">All Loanees</h3>
    <el-table class="search__table">
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Search user by name or id"
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
            data.id.toLowerCase().includes(search.toLowerCase())
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
      <el-table-column label="Transactions" prop="">
        <template slot-scope="scope" class="p-0" prop="loanee_wallet[0].id">
          <el-tag
            class="wallet btn d-flex align-items-center"
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
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      },
    },
  },

  methods: {
    rowClicked(e) {
      console.log(e);
      this.$router.push({
        path: `loanees/${e}`,
      });
    },

    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    async getallLoanees() {
      //get all users from api
      try {
        const response = await api.getLoans();

        this.tableData = response;
      } catch (error) {
        console.log(error.response);
      }
    },
    filterTag(value, row) {
      return row.status === value;
    },
    go() {
      alert(66);
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

.wallet {
  background-color: transparent !important;
  border: 1px solid #3c4b64;
  color: #3c4b64;
  border-radius: 5px;
  padding: 0px 10px !important ;
  width: max-content !important;
  cursor: pointer;
}
.loanees .el-tag--successs {
  background-color: green !important;
  color: #fff !important;
}
.loanees .el-tag--warning {
  background-color: #ffc107 !important;
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