<template>
  <q-page>
      <div v-if="teams!=null">
      <q-card v-for="(team) in this.teams" v-bind:key="team.id">
        <q-card-section>
        <div class="text-h6">{{team.line.event.title}}</div>
        <div class="text-subtitle2">note: {{team.line.note}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ team.line.event.dateTime[2]+'/'+team.line.event.dateTime[1]+'/'+team.line.event.dateTime[0]+'      start '+team.line.event.dateTime[3]+':'+team.line.event.dateTime[4]}}
      </q-card-section>
        <q-card-section class="q-pt-none">
        <q-btn
          unelevated
          rounded
          color="red"
          icon="person_remove"
          label="Cancel"
          class="q-ma-md"
          @click="cancelAttendance(team.id)"
        />
      </q-card-section>
      </q-card>
</div>
  </q-page>
</template>
<style>
</style>

<script>
import userRest from "../../rest/userRest";

export default {
  name: "Teams",
   data(){
    return{
      teams: null
    }
  },
  methods: {
    getTeams() {
       userRest.getTeamsForUser().then(result=>{
        console.log(result);
        this.teams=result.data;
      }).catch(err=>console.log(err)); 
    },
    cancelAttendance(teamId){
      userRest.deleteUserFromTeam(teamId).then(()=>{this.$emit("refresh")}).catch(err=>
         this.$q.notify({                                                                                                                                                                                                                                         
            message: err,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          })
      );
    },
  },
  beforeMount(){
    this.getTeams();
  }
};
</script>