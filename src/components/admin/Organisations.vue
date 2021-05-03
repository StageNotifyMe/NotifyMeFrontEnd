<template>
  <q-page>
    <CreateOrganisation/>
    <OrganisationList class="orgList"/>
  </q-page>
</template>
<style>
</style>

<script>
import CreateOrganisation from './CreateOrganisation.vue';
import OrganisationList from './OrganisationList.vue';
export default {
  components:{
    CreateOrganisation,
    OrganisationList
  },
  name: 'Organisations',
}
</script>