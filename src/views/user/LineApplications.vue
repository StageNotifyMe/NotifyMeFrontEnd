<template>
  <q-page :key="this.key">
        <h3>Currently using app as: Regular user/member</h3>
    <h2>Available Lines</h2>
    <AvailableLines />
    <h2>Your teams</h2>
    <Teams v-on:refresh="updateKey()"/>
  </q-page>
</template>

<script>
import Teams from '../../components/user/Teams.vue'
import AvailableLines from "../../components/user/AvailableLines"

export default {
components:{
    AvailableLines,
    Teams
},
data(){
  return{
    key: 1
  }
},
methods:{
  updateKey(){
    this.key++;
  }
}
}
</script>
<style>

</style>