<template>
  <div>
    <!-- Page Preloder -->
    <div id="preloder" v-if="loader">
      <!-- <h3 class="login__text__loader">Logging In ......</h3> -->
      <div class="loader"></div>
    </div>
    <!-- Page Preloder -->

    <appHeader />
    <div class="home">
      <div class="form">
        <!-- Login Form -->
        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="120px"
          class="demo-dynamic"
          :rules="rules"
        >
          <!-- Form Email -->
          <el-form-item
            prop="email"
            label="Email"
            :rules="[
              {
                required: true,
                message: 'Please input email address',
                trigger: 'blur',
              },
              {
                type: 'email',
                message: 'Please input correct email address',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input
              v-model="dynamicValidateForm.email"
              placeholder="Email"
            ></el-input>
          </el-form-item>

          <!-- FormPassword -->
          <el-form-item label="Password" prop="pass">
            <el-input
              type="password"
              v-model="dynamicValidateForm.pass"
              autocomplete="off"
              placeholder="Password"
              class="my-2"
            ></el-input>
          </el-form-item>

          <!-- Form Login Button -->
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('dynamicValidateForm')"
              class="sign__in--btn w-100"
              :class="{ loading: loading }"
              :disabled="disabled"
              >{{ login_text }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- <appFooter /> -->
  </div>
</template>

<script>
import api from "@/helpers/api.js";
import appHeader from "../../pages/headerComponent.vue";
import appFooter from "../../pages/footerComponent.vue";
export default {
  components: {
    appHeader,
    appFooter,
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.dynamicValidateForm.checkPass !== "") {
          this.$refs.dynamicValidateForm.validateField("checkPass");
        }
        callback();
      }
    };

    return {
      loader: true,
      disabled: false,
      loading: false,
      login_text: "Login",
      // Form input models
      dynamicValidateForm: {
        email: "",
        pass: "",
      },

      // Ui Rules
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    // Submit form function
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // Call login function if details are valid
          this.login();
        } else {
          return false;
        }
      });
    },

    async login() {
      try {
        // making api call with defined parameters
        this.loader = true;
        this.login_text = "Verifying......";
        this.loading = true;
        this.disabled = true;
        const response = await api.login({
          email: this.dynamicValidateForm.email,
          password: this.dynamicValidateForm.pass,
        });

        console.log(response);

        // Setting token to variable
        const token = response.data.token;

        // Getting Logged In user details
        const userData = response.data.user;

        // Dispatching token and userdata to store
        this.$store.dispatch("login", { token, userData });
        // .then(() => this.$router.push("/superAdmin/users"))
        // .catch((err) => console.log(err));

        // Push router to SuperAdmin Dashboard
        if (response.data.user.email === "super@gmail.com") {
          this.$router.push("/superAdmin");
        } else {
          this.$router.push("/agentAdmin");
        }

        // Successful alert
        // this.open2();
      } catch (err) {
        this.loader = false;
        // Show error message
        this.open4();

        // Reset Input fields
        this.dynamicValidateForm.email = "";
        this.dynamicValidateForm.pass = "";
        this.login_text = "Login";
        this.loading = false;
        this.disabled = false;
      }
    },

    // Error message function
    open4() {
      this.$message.error("Invalid login details");
    },

    // Successful message function
    open2() {
      this.$message({
        message: "Welcome",
        type: "success",
      });
    },
  },

  created() {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  },
};
</script>


<style>
@import "./login.css";
.login__text__loader {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-top: -13px;
  margin-left: -13px;
  border-radius: 60px;
}
</style>