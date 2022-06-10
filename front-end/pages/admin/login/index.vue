<template>
  <div class="h-100">
    <b-row
      class="justify-content-center align-items-center text-center min-vh-100"
    >
      <b-col cols="4">
        <b-card>
          <b-form>
            <b-form-group label="Username">
              <b-form-input></b-form-input>
            </b-form-group>
            <b-form-group label="Password">
              <b-form-input type="password"></b-form-input>
            </b-form-group>
            <b-button block>Login</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  layout: "login",
};
</script>