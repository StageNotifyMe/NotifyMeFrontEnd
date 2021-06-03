<template>
<div v-if="lines!=null && teamApplications!=null">
      <q-card v-for="(line) in this.lines" v-bind:key="line.id">
        <q-card-section>
        <div class="text-h6">{{line.event.title}}</div>
        <div class="text-subtitle2">{{line.event.venue.name}}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ line.event.dateTime[2]+'/'+line.event.dateTime[1]+'/'+line.event.dateTime[0]+'      start '+line.event.dateTime[3]+':'+line.event.dateTime[4]}}
      </q-card-section>

      <q-card-section class="q-pt-none" v-if="!checkApplicationExist(line.team.id)">
        <q-btn
          unelevated
          rounded
          color="primary"
          icon="person_add"
          label="Apply"
          class="q-ma-md"
          @click="sendTeamApplication(line.team.id)"
        />
      </q-card-section>
        <q-card-section class="q-pt-none" v-if="checkApplicationExist(line.team.id)">
        <q-btn
          unelevated
          rounded
          color="red"
          icon="person_remove"
          label="Cancel application"
          class="q-ma-md"
          @click="sendTeamApplication(line.team.id)"
        />
      </q-card-section>
      </q-card>
</div>
</template>

<script>
import lineRest from "../../rest/lineRest";
export default {
 name: "ApplicationList",
  data(){
    return{
      lines: null,
      teamApplications:null
    }
  },
  methods: {
    getAvailableLines() {
       lineRest.getAvailableLines().then(result=>{
        console.log(result);
        this.lines=result.data;
      }).catch(err=>console.log(err)); 
    },
    getTeamApplications(){
        lineRest.getTeamApplications().then(result=>{
                    console.log(result);
            this.teamApplications=result.data;
        }).catch(err=>console.log(err)); 
    },
    checkApplicationExist(teamId){
      let foundApplication=this.teamApplications.find(ta=>ta.appliedTeam.id==teamId);
      console.log(foundApplication)
      return foundApplication!=null
  },
    sendTeamApplication(teamId){
      lineRest.sendTeamApplication(teamId).then(()=>{
          this.getAvailableLines();
          this.getTeamApplications();
      }).catch(err=>{
           this.$q.notify({
          message: err.response.data,
          color: "red",
          icon: "error",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      })
  },
  },
  beforeMount(){
    this.getAvailableLines();
    this.getTeamApplications();
  },
}
</script>

<style>

</style>