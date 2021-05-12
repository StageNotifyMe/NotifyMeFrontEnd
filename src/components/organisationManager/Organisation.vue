<template>
  <q-page>
      <h2>{{organisation.name}}</h2>
      <UserApplications v-bind:organisation="this.organisation"/>
  </q-page>
</template>
<style>
</style>

<script>
import UserApplications from "./UserApplications"
export default {
  name: "Organisation",
  components:{
    UserApplications
  },
  props: {
    organisation: {
      type: Object,
      required: true,
    },
  },
};
</script>