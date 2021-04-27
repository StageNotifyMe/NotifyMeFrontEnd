<template>
  <q-page>
    <div class="row justify-center">
      <h2>Welcome screen for line managers</h2>
    </div>
    <div class="row justify-center">
      <p>user has user role: {{hasRole('user')}}</p>
    </div>
    <div class="row justify-center">
      <p>user has admin role: {{hasRole('admin')}}</p>
    </div>
    <div class="row justify-center">
      <p>user has venue_manager role: {{hasRole('venue_manager')}}</p>
    </div>
    <div class="row justify-center">
      <p>user has line_manager role: {{hasRole('line_manager')}}</p>
    </div>
    <div class="row justify-center">
      <p>user has organisation_manager role: {{hasRole('organisation_manager')}}</p>
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
  }

};
</script>