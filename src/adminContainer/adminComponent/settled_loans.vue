<template>
  <div class="all__users all mb-5">
    <h3 class="p-3">Settled Loans</h3>
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
      <el-table-column label="First Name" prop="loanee.first_name">
      </el-table-column>
      <el-table-column label="Last Name" prop="loanee.last_name">
      </el-table-column>

      <el-table-column label="Email" prop="loanee.email"> </el-table-column>
      <el-table-column label="Occupation" prop="loanee.occupation">
      </el-table-column>
      <el-table-column label="Amount" prop="amount"> </el-table-column>
      <el-table-column label="Start date" prop="start_date"> </el-table-column>
      <el-table-column label="End Date" prop="end_date"> </el-table-column>
      <el-table-column label="Category" prop="category"> </el-table-column>

      <el-table-column label="Phone" prop="loanee.mobile"> </el-table-column>

      <el-table-column
        prop="status"
        label="Status"
        width="100"
        :filters="[
          { text: 'settled', value: 'settled' },
          { text: 'due', value: 'due' },
          { text: 'settled', value: 'settled' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope" class="p-0" prop="status">
          <el-tag
            :type="scope.row.status === 'settled' ? 'success' : 'success'"
            style="width: 100% !important"
            disable-transitions
            >settled
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="History" prop="">
        <template slot-scope="scope" class="p-0" prop="id">
          <el-tag
            class="wallet btn d-flex align-items-center"
            @click.native.prevent="rowClicked(tableData[scope.$index].id)"
            disable-transitions
            >View
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
      loading: true,
      scope: "scope",
      tableData: [],
      search: "",
    };
  },
  methods: {
    filterTag(value, row) {
      return row.status === value;
    },
    rowClicked(e) {
      this.$router.push({
        path: `loanees/${e}`,
      });
    },
  },
  async created() {
    let token = this.$store.getters.isLoggedIn;

    try {
      const response = await api.getSettledLoans({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      this.tableData = response.data.settled;
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