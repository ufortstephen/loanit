<template>
  <div class="update__user">
    <h6>Update Loan Status</h6>
    <form class="form mt-5">
      <div class="form-group">
        <label for="">User Id</label>
        <input
          type="text"
          name=""
          id=""
          class="form-control py-4"
          v-model="userId"
          placeholder=""
          aria-describedby="helpId"
        />
      </div>

      <button
        class="btn btn-lg w-100"
        @click="updateStatus"
        style="background-color: #3c4b64 !important; color: #fff !important"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
import api from "@/helpers/api.js";

export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    async updateStatus() {
      console.log("Clicked");
      try {
        const response = await api.changeStatus({ loan_id: this.userId });
        this.$message.success(
          `${response.data.data.user_id} loan has been settled`
        );
      } catch (error) {
        if (error.response.status === 401) {
          this.$message.error(`This loan has already been settled.`);
          console.log(error.response.data.data);
        } else {
          this.$message.error(`${error.response.data.errors.loan_id[0]}`);
          // this.$message.error(`${error.response}`)
          console.log(error.response);
        }
      }
    },
  },
  created() {
    // this.updateStatus();
  },
};
</script>


<style>
@media (min-width: 968px) {
  .form {
    width: 40%;
    margin: 0px auto;
  }
}
</style>
