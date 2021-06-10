<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="username"
                type="text"
                label="username"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="secondary"
              size="lg"
              class="full-width"
              label="Login"
              @click="authorize()"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">
              Not registered? <br> <q-btn label="Register here" color="primary" flat @click="redirectToRegister()" />
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
.q-card {
  width: 60vw;
  max-width: 50em;
  min-height: 20em;
}
</style>

<script>
import cookieFun from "../javascript/cookieFunctions";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    authorize() {
      cookieFun.authorize(this.username, this.password).then(() => {
        this.redirect();
      });
    },

    //redirects to the welcome page of the first role in the roles array found in the token
    redirect() {
      this.$router.push({ path: "/landing" });
    },

    redirectToRegister(){
      this.$router.push("/register")
    }
  },

  components: {},
};
</script>