<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="primary"
        :header="items.length"
        text="Active Loanees"
      >
        <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end">
            <template #toggler-content>
              <CIcon name="cil-settings" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height: 70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" :header="itemLength" text="Administrators">
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
            :caret="false"
          >
            <template #toggler-content>
              <CIcon name="cil-location-pin" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height: 70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 } } }"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        :header="totalAmountDisbursed"
        text="Amount Recieved Disbursed"
      >
        <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end">
            <template #toggler-content>
              <CIcon name="cil-settings" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height: 70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 } } }"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        :header="dueToday"
        text="Amount Due Today"
      >
        <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end">
            <template #toggler-content>
              <CIcon name="cil-settings" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height: 70px"
            background-color="rgb(250, 152, 152)"
            label="Amount Due"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="success"
        :header="totalAmountDisbursed"
        text="Total amount disbursed"
        class="pb-4"
      >
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="dark"
        :header="percentTotal"
        text="Total Interest (%)"
        class="pb-4"
      >
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="success"
        header="10000"
        text="Total amount expected"
        class="pb-4"
      >
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="dark"
        header="10000"
        text="Total amount expected"
        class="pb-4"
      >
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import api from "@/helpers/api";
import { CChartLineSimple, CChartBarSimple } from "../charts/index.js";

export default {
  name: "WidgetsDropdown",
  components: { CChartLineSimple, CChartBarSimple },
  data() {
    return {
      items: [],
      itemLength: "",
      totalAmountDisbursed: 0,
      percentTotal: 0,
      totalExpected: 0,
      dueToday: 0,
      token: "",
    };
  },
  methods: {
    async showLoans() {
      try {
        const res = await api.viewAdmins();
        this.items = res;
      } catch (error) {
        // this.showLoans()
      }
      this.getItem();
    },
    amount(item) {
      return item.amount;
    },
    percent(item) {
      return item.interest;
    },

    today(item) {
      return item.daily_return;
    },
    sum(prev, next) {
      return +prev + +next;
    },
    getItem() {
      let total = this.items.map(this.amount).reduce(this.sum);
      this.totalAmountDisbursed = total;
      let totalExp = total;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 2,
      });
      this.totalAmountDisbursed = formatter.format(this.totalAmountDisbursed);
      //
      let totalPercent = this.items.map(this.percent).reduce(this.sum);
      this.percentTotal = totalPercent;
      this.totalExpected = +this.percentTotal * totalExp;
      this.totalExpected = formatter.format(this.totalExpected);
      //
      let todayAmt = this.items.map(this.today).reduce(this.sum);
      this.dueToday = formatter.format(todayAmt);
    },
    refresh() {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else {
        localStorage.removeItem("firstLoad");
      }
    },
  },
  created() {
    this.showLoans();
  },
  mounted() {
    let getToken = this.$store.getters.isLoggedIn;
    this.token = getToken;
    // this.refresh();
  },
};
</script>


