<template>
  <CRow v-loading="loading">
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader> Administrator id: {{ $route.params.id }} </CCardHeader>

        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <div class="my-2 p-4" v-if="loansIssued">
          <h5 class="p-3">Loans Issued</h5>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Daily Payment</th>
                <th>Total Payment</th>
                <th>Interval</th>
                <th>End date</th>
                <th>Status</th>
                <th>Wallet</th>
              </tr>
            </thead>
            <tbody v-for="x in loanUsers.loan" :key="x.users">
              <tr v-for="y in x" :key="y.loan_user.id">
                <td scope="column">{{ y.loan_user.id }}</td>
                <td scope="column">
                  {{ y.loan_user.first_name }} {{ y.loan_user.last_name }}
                </td>

                <td scope="column">NGN {{ y.daily_payment }}</td>
                <td scope="column">NGN {{ y.total_payment }}</td>
                <td scope="column">{{ y.interval }} days</td>
                <td scope="column">{{ y.end_date }}</td>
                <td scope="column">{{ y.status }}</td>
                <td scope="column">
                  <span
                    @click.prevent="gotowallet(y.loan_user.id)"
                    class="wallet btn"
                    >View Wallet</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CCardFooter class="d-flex">
          <CButton color="primary" @click="goBack">Back</CButton>
          <span
            class="text-center font-weight-bold"
            style="width: max-content; margin: 0px auto; cursor: pointer"
            @click="toggleLoanIssued"
            >{{ loanIssuedText }}
            <i class="fa fa-caret-down" aria-hidden="true"></i
          ></span>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import api from "@/helpers/api";
import usersData from "./adminData";
export default {
  name: "User",
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.usersOpened = from.fullPath.includes("admins");
    }); 
  },
  data() {
    return {
      loading: true,
      items: [],
      loanDetails: "",
      usersOpened: null,
      loanUsers: "",
      loansIssued: false,
      loanIssuedText: "Show Issued Loans",
    };
  },
  computed: {
    fields() {
      return [
        { key: "key", label: "Admin Details", _style: "width:150px" },
        { key: "value", label: "", _style: "width:150px;" },
      ];
    },

    userData() {
      // this.getAdmins();
      const detail = this.$route.params.id;
      const id = this.$route.params.id;
      const user = this.items.find((item, index) => detail == item.id);
      this.loanUsers = user;
      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];
      const adminLoans = user ? Object.entries(user) : [["id", "Not found"]];
      this.loandetails = adminLoans;
      let loans = userDetails.pop();
      // console.log(loans);
      this.loanDetails = loans[1].data;
      // console.log(this.loanDetails);

      userDetails.pop();
      userDetails.pop();

      return userDetails.map(([key, value]) => {
        // console.log(userDetails.pop());
        return { key, value };
      });
    },
    // visibleData() {
    //   return this.userData.filter((param) => param.key !== "username");
    // },
    // username() {
    //   return this.userData.filter((param) => param.key === "username")[0].value;
    // },

    visibleData() {
      return this.userData.filter((param) => param.key !== "username");
    },
    username() {
      return this.userData.filter((param) => param.key === "username")[0];
    },
  },
  methods: {
    goBack() {
      this.usersOpened
        ? this.$router.go(-1)
        : this.$router.push({ path: "/superAdmin" });
    },
    async getAdmins() {
      const res = await api.viewAdmins();
      // console.log(res);
      this.items = res;
      this.loading = false;
    },
    toggleLoanIssued() {
      this.loansIssued = !this.loansIssued;
      this.loanIssuedText = "Hide Issued Loans";
      if (this.loansIssued == false) {
        this.loanIssuedText = "Show Issued Loans";
      }
    },

    gotowallet(e) {
      // console.log(e);
      this.$router.replace({
        path: `/superAdmin/users/${e}`,
      });
    },
  },
  created() {
    this.getAdmins();
  },
};
</script>

<style>
.wallet {
  background-color: transparent !important;
  border: 1px solid #3c4b64;
  color: #3c4b64;
  border-radius: 5px;
  padding: 0px 10px !important ;
  width: max-content !important;
  cursor: pointer;
}
</style>
