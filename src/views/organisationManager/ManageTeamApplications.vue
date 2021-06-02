<template>
  <q-page>
    <h3>Currently using app as: Organisation manager</h3>
    <h2>Team applications</h2>
    <TeamApplications />
  </q-page>
</template>

<script>
import TeamApplications from "../../components/organisationManager/UserTeamApplications"
export default {
components:{
    TeamApplications
},
}
</script>
<style>

</style>