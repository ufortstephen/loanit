<template>
  <div>
    <!-- <WidgetsDropdown /> -->
    <loanees />

    <!-- <users class="my-5" /> -->
  </div>
</template>

<script>
// import MainChartExample from "./charts/MainChartExample";
// import WidgetsDropdown from "./widgets/WidgetsDropdown";
import loanees from "@/adminContainer/adminComponent/loanees.vue";
// import users from "./users/Users.vue";
// import WidgetsBrand from "./widgets/WidgetsBrand";

export default {
  name: "Dashboard",
  components: {
    // MainChartExample,
    // WidgetsDropdown,
    loanees,
    // users,
    // WidgetsBrand,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
