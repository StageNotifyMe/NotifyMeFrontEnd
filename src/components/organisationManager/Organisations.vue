<template>
  <q-page>
    <OrganisationList/>
  </q-page>
</template>
<style>
</style>

<script>
import OrganisationList from './OrganisationList.vue';
export default {
  components:{
    OrganisationList
  },
  name: 'Organisations',
}
</script>