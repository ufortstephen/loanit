<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <!-- <CCardHeader> Administrators </CCardHeader> -->
        <h4 class="pl-3 pt-3">Due Loans {{ items.length }}</h4>

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
import api from "../../helpers/api";

export default {
  name: "Users",
  data() {
    return {
      items: [],
      fields: [
        // { key: "reference" },
        { key: "first_name" },
        { key: "middle_name" },
        { key: "last_name" },
        { key: "email" },
        { key: "phone" },

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
    async getDueLoans() {
      try {
        const res = await api.listDueLoans();
        this.items = res;
      } catch (error) {
        // console.log(error);
      }
    },
  },

  created() {
    this.getDueLoans();
  },
};
</script>
