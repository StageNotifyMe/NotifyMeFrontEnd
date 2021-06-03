<template>
  <q-page>
    <div class="row justify-center">
      <h2>Welcome screen for default users</h2>
    </div>
    <div class="row justify-center">
      <p>user has user role: {{ hasRole("user") }}</p>
    </div>
    <div class="row justify-center">
      <p>user has admin role: {{ hasRole("admin") }}</p>
    </div>
    <div class="row justify-center">
      <p>user has venue_manager role: {{ hasRole("venue_manager") }}</p>
    </div>
    <div class="row justify-center">
      <p>user has line_manager role: {{ hasRole("line_manager") }}</p>
    </div>
    <div class="row justify-center">
      <p>
        user has organisation_manager role:
        {{ hasRole("organisation_manager") }}
      </p>
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