<template>
  <div>
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
            data.status.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column align="">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <!-- <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template> -->
      </el-table-column>
      <el-table-column label="First name" prop="loan_user.first_name">
      </el-table-column>
      <el-table-column label="Last name" prop="loan_user.last_name">
      </el-table-column>
      <el-table-column label="Email" prop="loan_user.email"> </el-table-column>
      <el-table-column label="Phone" prop="loan_user.mobile"> </el-table-column>
      <el-table-column label="Status" prop="status"> </el-table-column>
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
  },
  created() {
    this.getallLoanees();
  },
};
</script>