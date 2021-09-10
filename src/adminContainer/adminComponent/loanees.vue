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
      <el-table-column
        id="table"
        label="First name"
        prop="loan_user.first_name"
      >
      </el-table-column>
      <el-table-column label="Last name" prop="loan_user.last_name">
      </el-table-column>
      <!-- <el-table-column label="Email" prop="loan_user.email"> </el-table-column> -->
      <!-- <el-table-column label="Amount" prop="amount"> </el-table-column> -->

      <el-table-column label="Date Issued" prop="date_issued">
      </el-table-column>
      <!-- <el-table-column label="Due Date" prop="end_date"> </el-table-column> -->

      <el-table-column label="Period" prop="interval"></el-table-column>
      <el-table-column label="Due Today" prop="daily_payment">
      </el-table-column>
      <el-table-column label="Total Pmt" prop="total_payment">
      </el-table-column>
      <!-- <el-table-column label="Total Pmt" prop="loan_user.id"> </el-table-column> -->

      <!-- <el-table-column label="Status" prop="status"> </el-table-column> -->
      <el-table-column label="Admin" prop="admin.first_name"> </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        width="100"
        :filters="[
          { text: 'active', value: 'active' },
          { text: 'settled', value: 'settled' },
          { text: 'due', value: 'due' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status === 'settled' ? 'successs' : 'warning'"
            disable-transitions
            >{{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="History" prop="">
        <template slot-scope="scope" class="p-0" prop="loan_user.id">
          <el-tag
            class="wallet"
            @click.native.prevent="
              rowClicked(tableData[scope.$index].loan_user.id)
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
.c-main {
  /* padding-top: 0 !important; */
}
.c-main .container-fluid {
  /* padding: 0 !important; */
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