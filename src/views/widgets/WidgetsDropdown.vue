<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" header="4" text="Active Loanees">
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
        header="9 million"
        text="Amount Recieved"
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
      <CWidgetDropdown color="danger" header="500" text="Amount Due">
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
        header="5000"
        text="Total amount disbursed"
        class="pb-4"
      >
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="dark"
        header="5000"
        text="Total Interest (#)"
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
import api from "../../helpers/api";
import { CChartLineSimple, CChartBarSimple } from "../charts/index.js";

export default {
  name: "WidgetsDropdown",
  components: { CChartLineSimple, CChartBarSimple },
  data() {
    return {
      items: [],
      itemLength: "",
    };
  },
  methods: {
    async getAdmins() {
      const res = await api.viewAdmins();
      console.log(res);
      this.items = res;
      this.itemLength = res.length.toString();
    },
  },
  created() {
    setTimeout(this.getAdmins(), 10000);
  },
};
</script>


