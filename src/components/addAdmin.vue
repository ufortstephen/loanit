<template>
  <div class="addAdmin">
    <el-button type="text" @click="dialogFormVisible = true"
      ><button class="btn btn-success">Add new Admin</button></el-button
    >

    <el-dialog :visible.sync="dialogFormVisible" style="z-index: 9999999999">
      <div class="text-center"><h5>Add New Administrator</h5></div>

      <div class="form-group">
        <label for="">First Name</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="addAdmin.first_name"
        />
      </div>
      <div class="form-group">
        <div class="form-group">
          <label for="">Last Name</label>
          <input
            type="text"
            name=""
            id=""
            class="form-control"
            placeholder=""
            aria-describedby="helpId"
            v-model="addAdmin.last_name"
          />
        </div>

        <label for="">Middle Name</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="addAdmin.middle_name"
        />
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input
          type="email"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="addAdmin.email"
        />
      </div>
      <div class="form-group">
        <label for="">Phone Number</label>
        <input
          type="tel"
          name=""
          id=""
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="addAdmin.phone"
        />
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import api from "../helpers/api.js";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      addAdmin: {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        phone: "",
      },
      userToken: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input user name",
            trigger: "blur",
          },
        ],
        pass: [{ validator: validatePass, trigger: "blur", required: true }],
      },

      dialogFormVisible: false,

      formLabelWidth: "120px",
    };
  },
  methods: {
    submitForm() {
      try {
        this.adAdmin();
      } catch (error) {
        console.log(error);
      }
      // this.$router.push("/dashboard").catch(() => {});
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async adAdmin() {
      try {
        const token = this.userToken;
        const response = await api.addAdmin(this.addAdmin);
        console.log(response);
        this.dialogFormVisible = !this.dialogFormVisible;
        this.$message({
          message: "New Admin Added.",
          type: "success",
        });
      } catch (error) {
        console.log(error.response.data);

        this.$message.error(`${error.response.data.data}`);
      }
    },
  },
  created() {
    this.userToken = this.$store.getters.isLoggedIn;
  },
};
</script>

<style>
.v-modal {
  z-index: 0 !important;
}
.el-dialog {
  width: 100% !important;
}

input {
  margin-bottom: 1.5rem;
  padding: 0.5rem;
}
label {
  margin-bottom: 0.5rem;
  color: #000;
}

@media (min-width: 768px) {
  .el-dialog {
    width: 30% !important;
  }
}
</style>