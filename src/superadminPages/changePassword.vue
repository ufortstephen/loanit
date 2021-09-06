<template>
  <div class="change__pass">
    <form action="" class="form" @submit.prevent="passwordChange">
      <div class="form-group">
        <label for="">Old Password</label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          placeholder=""
          v-model="changePass.password"
          required
        />
      </div>

      <div class="form-group">
        <label for="">New Password</label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          placeholder=""
          v-model="changePass.new_password"
          required
        />
      </div>

      <div class="form-group">
        <label for="">Confirm Password</label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          placeholder=""
          v-model="changePass.confirm__password"
          required
        />
      </div>
      <button class="change__button btn">Submit</button>
    </form>
  </div>
</template>

<script>
import api from "@/helpers/api.js";
export default {
  data() {
    return {
      // Form input models
      changePass: {
        password: "",
        new_password: "",
        confirm__password: "",
      },
    };
  },
  methods: {
    async passwordChange() {
      try {
        // making api call with defined parameters

        const response = await api.changePassword({
          old_password: this.changePass.password,
          password: this.changePass.new_password,
          password_confirmation: this.changePass.confirm__password,
        });
        this.$message.success("Password successfully changed");
        this.changePass.password = "";
        this.changePass.new_password = "";
        this.changePass.confirm__password = "";

        console.log(response);
      } catch (error) {
        console.log(error.response);
        this.$message.error(error.response.data.message);
        if (error.response.status == 422) {
          for (let prop in error.response.data.errors) {
            console.log(error.response.data.errors[prop][0]);
            this.$message.error(error.response.data.errors[prop][0]);
          }
        }
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
};
</script>


<style scoped>
.change__button {
  background-color: #3c4b64 !important;
  color: #fff !important;
  width: 100% !important;
}
.change__button:focus {
  box-shadow: none !important;
  border: none !important;
}
@media (min-width: 968px) {
  form {
    width: 40%;
    margin: 2rem auto;
    background-color: #fff;
    background-color: #fff;

    align-self: center;
    padding: 1.4rem;
  }
  label {
    margin-bottom: 1rem;
  }
}
</style>