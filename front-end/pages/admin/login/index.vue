<template>
  <div class="h-100">
    <b-row
      class="justify-content-center align-items-center text-center min-vh-100"
    >
      <b-col cols="4">
        <b-card>
          <b-form @submit.prevent="userLogin">
            <b-form-group label="Username">
              <b-form-input type="text" v-model="login.username"></b-form-input>
            </b-form-group>
            <b-form-group label="Password">
              <b-form-input
                type="password"
                v-model="login.password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" block>Login</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  layout: "login",
  auth: false,
  data() {
    return {
      login: {
        useruser: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', { data: this.login });
        console.log(this.$auth.user)
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>