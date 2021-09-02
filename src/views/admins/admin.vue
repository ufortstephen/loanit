<template>
  <CRow>
    <CCol col="12" lg="12">
      <CCard>
        <CCardHeader> Administrator id: {{ $route.params.id }} </CCardHeader>
        <!-- {{ items }} -->
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
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
      items: [],
      usersOpened: null,
    };
  },
  computed: {
    fields() {
      return [
        { key: "key", label: this.username, _style: "width:150px" },
        { key: "value", label: "", _style: "width:150px;" },
      ];
    },
    userData() {
      const id = this.$route.params.id;
      const user = usersData.find((user, index) => index + 1 == id);
      const userDetails = user ? Object.entries(user) : [["id", "Not found"]];
      return userDetails.map(([key, value]) => {
        return { key, value };
      });
    },
    visibleData() {
      return this.userData.filter((param) => param.key !== "username");
    },
    username() {
      return this.userData.filter((param) => param.key === "username")[0].value;
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
      console.log(res);
      this.items = res;
    },
  },
};
</script>
