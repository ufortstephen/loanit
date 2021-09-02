<template>
  <CRow>
    <CCol col="12" xl="12">
      <CCard>
        <CCardHeader> Administrators </CCardHeader>
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
import usersData from "./adminData";
export default {
  name: "Users",
  data() {
    return {
      items: usersData,
      fields: [
        { key: "id" },

        { key: "username", label: "Name", _classes: "font-weight-bold" },
        { key: "registered" },
        { key: "loanAmount" },
        { key: "loanInterest" },

        { key: "amountDue" },
        { key: "dueDate" },

        { key: "status" },
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
  },
};
</script>
