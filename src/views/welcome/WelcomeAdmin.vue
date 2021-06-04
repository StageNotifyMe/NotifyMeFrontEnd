<template>
  <q-page>
    <div class="row justify-center">
      <h2>Welcome screen for admins</h2>
    </div>
    
    <div class="row justify-center q-my-md">
      <q-btn color="secondary" @click="redirectToManage('organisations')" icon-right="groups" label="Manage organisations"></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn color="secondary" @click="redirectToManage('venues')" icon-right="groups" label="Manage venues"></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn color="secondary" @click="redirectTo('/admin/system/notifications')" icon-right="feed" label="Notifications log"></q-btn>
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
    redirectToManage(location){
      this.$router.push("/admin/manage/"+location)
    },
    redirectTo(location){
      this.$router.push(location);
    }
  },
};
</script>