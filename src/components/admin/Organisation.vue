<template>
  <q-page> 
      <AddOrgAdmin v-bind:id="parseInt(this.id)"/>
  </q-page>
</template>
<style>
</style>

<script>
import AddOrgAdmin from "./AddOrgAdmin";
export default {
  name: "Organisation",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    organisation: null
  },
   components:{
    AddOrgAdmin
  },
  methods:{
getOrganisation(){
  
}
  }
};
</script>