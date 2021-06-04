<template>
  <q-page>
    <div class="row justify-center">
      <h2>Welcome screen for default users</h2>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirectToManage('organisations')"
        icon-right="groups"
        label="Manage organisations"
      ></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirectToManage('communicationPreferences')"
        icon-right="notifications"
        label="Notification settings"
      ></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirect('availableLines')"
        icon-right="groups"
        label="Available Lines"
      ></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirectTo('/user/settings')"
        icon-right="account_circle"
        label="Account settings"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
import cookieFun from "../../javascript/cookieFunctions";

export default {
  methods: {
    hasRole(role) {
      return cookieFun.hasRole(role);
    },
    redirectToManage(location) {
      this.$router.push("/user/manage/" + location);
    },
    redirect(location) {
      this.$router.push("/user/" + location);
    },
    redirectTo(location) {
      this.$router.push(location);
    },
  },
};
</script>