<template>
  <div>
    <q-list bordered v-if="this.applications!=null">
      <q-item-label header text-bold class="bg-secondary text-white"
        >User applications</q-item-label
      >
      <q-item v-for="(application) in this.applications" v-bind:key="application.organisationUserKey.userId">
        <q-item-section wrap> {{ application.userName }} </q-item-section>
        <q-item-section wrap> {{ application.applicationStatus }} </q-item-section>
          <q-item-section v-if="application.applicationStatus=='APPLIED'" wrap @click="respondToApplication(true,application.organisationUserKey)"><q-icon color="green" size="large" name="person_add"/> </q-item-section>
          <q-item-section v-if="application.applicationStatus=='APPLIED'" wrap @click="respondToApplication(false,application.organisationUserKey)"><q-icon color="red" size="large" name="person_remove"/> </q-item-section>
      </q-item>
      <q-item v-if="this.applications.length == 0">
        <div class="q-mt-lg">There aren't any applications for this organisation.</div>
      </q-item>
    </q-list>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import organisationRest from "../../rest/organisationRest";
export default {
  name: "ApplicationList",
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
       organisationRest.getUserApplications(this.organisation.id).then(result=>{
        console.log(result);
        this.applications=result.data;
      }).catch(err=>console.log(err)); 
    },
    respondToApplication(response,orgUserKey){
      let responseBody={
        "organisationUserKey": orgUserKey,
        "accepted": response
      }
      console.log(responseBody)
      organisationRest.respondToUserApplication(responseBody).then(()=>{
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