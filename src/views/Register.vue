<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 q-my-md">NotifyMe registration</h5>
      </div>
      <div class="row" >
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="firstname"
                type="text"
                label="First name"
              />
              <q-input
                square
                filled
                clearable
                v-model="lastname"
                type="text"
                label="Last name"
              />
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="Email"
              />
              <q-input
                square
                filled
                clearable
                v-model="phoneNumber"
                type="phone"
                label="Phone number"
              />
              <q-input
                square
                filled
                clearable
                v-model="username"
                type="text"
                label="Username"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="Password"
              />
              <q-input
                square
                filled
                clearable
                v-model="password2"
                type="password"
                label="Repeat Password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="secondary"
              size="lg"
              class="full-width"
              label="Register"
              @click="register()"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <q-btn
              label="Login instead"
              unelevated
              color="primary"
              @click="redirectToLogin()"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <template>
      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="seamless" seamless position="right">
          <q-card style="width: 350px">
            <q-card-section class="row items-center no-wrap">
              <div class="row">
                <q-icon
                  name="warning"
                  class="text-red column q-pr-md"
                  style="font-size: 3rem"
                />
                <div class="column">
                  <div class="text-weight-bold">Error</div>
                  <div class="text-grey">{{ errorText }}</div>
                </div>
              </div>
              <q-space />
              <q-btn flat round icon="close" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div> </template
  ></q-page>
</template>


<style>
.q-card {
  width: 400 em;
}
</style>

<script>
import authRest from "../rest/authorizationRest";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      email: "",
      firstname: "",
      lastname: "",
      phoneNumber: "",

      seamless: false,
      errorText: "",
    };
  },
  methods: {
    register() {
      if (this.password === this.password2) {
        if (
          this.username !== "" &&
          this.firstname !== "" &&
          this.lastname !== "" &&
          this.password !== "" &&
          this.email !== ""
        ) {
          const registration = {
            username: this.username,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            phoneNumber: this.phoneNumber,
            password: this.password,
          };
          authRest
            .register(registration)
            .then(() => {
              console.log("Successfully registered");
              this.redirectToLogin();
            })
            .catch((err) => console.log(err));
        } else {
          this.errorText = "Not all fields contain a value";
          this.seamless = true;
        }
      } else {
        this.errorText = "Passwords do not match";
        this.seamless = true;
      }
    },
    redirectToLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>