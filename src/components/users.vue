<template>
  <div class="mt-5">
    <h6 class="mt-5 mb-1 ml-2">LOANEES</h6>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="I.D" width="100"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address"  width="320" label="Address" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="loanAmount" label="Loan amount" width="">
      </el-table-column>
      <el-table-column prop="loanInterest" label="Loan Interest(%)" width="">
      </el-table-column>
      <el-table-column prop="loanAmountDue" label="Amount Due(#)" width="">
      </el-table-column>
      <el-table-column prop="dueDate" label="Due Date" width="">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="Status"
        width="100"
        :filters="[
          { text: 'Active Loans', value: 'Active' },
          { text: 'Non Active Loans', value: 'N/A' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === 'Active' ? 'success' : 'danger'"
            disable-transitions
            >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 4242,
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          loanAmount:  50000,
          loanInterest: 5 + '%',
          loanAmountDue: 50250,
          dueDate: "3 Months",
          tag: "Active",
          
        },
        {
          id: 4242,
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          loanAmount:50000,
          loanInterest: 5 + '%',
          loanAmountDue: 50250,
          dueDate: "3 Months",
          tag: "N/A",
        },
        {
          id: 4242,
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          loanAmount:  50000,
          loanInterest: 5 + '%',
          loanAmountDue: 50250,
          dueDate: "3 Months",
          tag: "Active",
        },
        {
          id: 4242,
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          loanAmount:  50000,
          loanInterest: 5 + '%',
          loanAmountDue: 50250,
          dueDate: "3 Months",
          tag: "N/A",
        },
      ],
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>