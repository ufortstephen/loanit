<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <!-- <CIcon name="logo" height="48" alt="Logo" /> -->
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <!-- <CHeaderNavLink to="/dashboard"> Dashboard </CHeaderNavLink> -->
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <!-- <CHeaderNavLink to="/users" exact> Loanees </CHeaderNavLink> -->
      </CHeaderNavItem>
    </CHeaderNav>

    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <!-- <addAdmin /> -->
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell" />
        </CHeaderNavLink>
      </CHeaderNavItem>

      <CHeaderNavItem class="mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="mx-2">
        <CHeaderNavLink>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item>Action 1</el-dropdown-item> -->
              <span @click="gotoChangePass"
                ><el-dropdown-item
                  ><span>Change Password</span></el-dropdown-item
                ></span
              >
              <span @click="logout">
                <el-dropdown-item><span>Logout</span></el-dropdown-item></span
              >
            </el-dropdown-menu>
          </el-dropdown>
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <!-- <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0 mb-0" />
    </CSubheader> -->
  </CHeader>
</template>

<script>
// import addAdmin from "../components/addAdmin.vue";
export default {
  name: "TheHeader",
  components: {
    // addAdmin,
  },
  methods: {
    logout() {
      this.$confirm("End current Session?", "Logout", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("logout").then(this.$router.push("/login"));
        })
        .catch(() => {});
    },
    gotoChangePass() {
      this.$router.push("/agentAdmin/change_password_agent");
    },
  },
};
</script>
