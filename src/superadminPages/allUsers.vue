<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <!-- <CCardHeader> Administrators </CCardHeader> -->
        <h4 class="pl-3 pt-3">All Items {{ items.length }}</h4>

        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="10"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center' }"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge
                  :color="getBadge(data.item.status)"
                  style="width: 50px; text-align: center"
                  class="py-2"
                >
                  {{ data.item.status }}
                </CBadge>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import api from "@/helpers/api";
// import usersData from "./adminData";
export default {
  name: "Users",
  data() {
    return {
      items: [],
      fields: [
        { key: "user_id" },
        { key: "amount" },
        { key: "date_issued" },
        { key: "repayment_date" },
        { key: "interest" },
        { key: "daily_return" },

        // { key: "id", label: "Name", _classes: "font-weight-bold" },
      ],
      activePage: 1,
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
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Due":
          return "danger";
        default:
          "primary";
      }
    },
    rowClicked(item, index) {
      this.$router.push({ path: `admins/${index + 1}` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    async getAdmins() {
      try {
        const res = await api.listAllLoans();
        this.items = res;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getAdmins();
  },
};
</script>
