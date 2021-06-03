<template>
  <q-page>
       <q-list bordered v-if="this.applications!=null">
      <q-item-label header text-bold class="bg-secondary text-white"
        >User applications</q-item-label
      >
      <q-item v-for="(application) in this.applications" v-bind:key="application.teamApplicationKey.userId">
        <q-item-section wrap> {{ application.appliedUser.userName }} </q-item-section>
        <q-item-section wrap> {{ application.appliedTeam.line.event.title }} </q-item-section>
        <q-item-section wrap> {{ application.applicationStatus }} </q-item-section>
          <q-item-section v-if="application.applicationStatus=='APPLIED'" wrap @click="respondToApplication(true,application)"><q-icon color="green" size="large" name="person_add"/> </q-item-section>
          <q-item-section v-if="application.applicationStatus=='APPLIED'" wrap @click="respondToApplication(false,application)"><q-icon color="red" size="large" name="person_remove"/> </q-item-section>
      </q-item>
      <q-item v-if="this.applications.length == 0">
        <div class="q-mt-lg">There aren't any applications for this organisation.</div>
      </q-item>
    </q-list>
  </q-page>
</template>
<style>
</style>

<script>
import organisationRest from "../../rest/organisationRest";

export default {
  name: "Organisation",
  props: {
    organisation: {
      type: Object,
      required: true,
    },
  },
   data(){
    return{
      applications: null
    }
  },
  methods: {
    getApplications() {
       organisationRest.getTeamApplications().then(result=>{
        console.log(result);
        this.applications=result.data;
      }).catch(err=>console.log(err)); 
    },
    respondToApplication(response,application){
          organisationRest.respondToTeamApplication(application.teamApplicationKey,response).then(()=>{
        this.getApplications();
      }).catch(err=>{
        this.$q.notify({
          message: err,
          color: "red",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      })
    }
  },
  beforeMount(){
    this.getApplications();
  }
};
</script>