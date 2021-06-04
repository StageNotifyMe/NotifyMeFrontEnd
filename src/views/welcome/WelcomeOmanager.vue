<template>
  <q-page>
    <div class="row justify-center">
      <h2>Welcome screen for organisation managers</h2>
    </div>
    
    <div class="row justify-center q-my-md">
      <q-btn color="secondary" @click="redirectToManage('organisations')" icon-right="groups" label="Manage organisations"></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn color="secondary" @click="redirectToManage('teamApplications')" icon-right="groups" label="Team applications for events"></q-btn>
    </div>
  </q-page>
</template>

<script>
import cookieFun from "../../javascript/cookieFunctions"

export default {
  methods:{
    hasRole(role){
      return cookieFun.hasRole(role)
    },
    redirectToManage(location){
      this.$router.push("/omanager/manage/"+location)
    },
  }

};
</script>