<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 q-my-md">NotifyMe</h5>
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
              color="light-green-7"
              size="lg"
              class="full-width"
              label="Login"
              @click="redirectToAuth()"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
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
    };
  },
  methods: {
    redirectToAuth() {
      authRest
        .getToken(this.username, this.password)
        .then((result) => {
          console.log(result.data.access_token);
          if (result.status == 200) {
            let d = new Date();
            d.setTime(d.getTime() + 1 * 1 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie =
              "access_token=" +
              result.data.access_token +
              ";" +
              expires +
              ";path=/";
            "username=" + result.data.username + ";" + expires + ";path=/";
            this.decodeToken(result.data.access_token, expires);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    decodeToken(token, expires) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      let userInfoCookie = {
        name: decoded.name,
        given_name: decoded.given_name,
        family_name: decoded.family_name,
        username: decoded.preferred_username,
        roles: decoded.resource_access.notifyme.roles,
      };
      document.cookie =
        "user_info=" +
        JSON.stringify(userInfoCookie) +
        ";" +
        expires +
        ";path=/";
    },
  },
};
</script>