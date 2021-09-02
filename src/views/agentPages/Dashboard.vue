<template>
  <div>
    <!-- <WidgetsDropdown /> -->
    <admins />

    <!-- <users class="my-5" /> -->
  </div>
</template>

<script>
// import MainChartExample from "./charts/MainChartExample";
// import WidgetsDropdown from "./widgets/WidgetsDropdown";
import admins from "../admins/admins.vue";
// import users from "./users/Users.vue";
// import WidgetsBrand from "./widgets/WidgetsBrand";

export default {
  name: "Dashboard",
  components: {
    // MainChartExample,
    // WidgetsDropdown,
    admins,
    // users,
    // WidgetsBrand,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
