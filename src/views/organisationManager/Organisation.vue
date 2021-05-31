<template>
  <q-page>
    <h3>Currently using app as: Organisation Manager</h3>
    <h2>Organisation</h2>
    <Organisation v-if="organisation!=null" v-bind:organisation="this.organisation"/>
  </q-page>
</template>

<script>
import Organisation from "../../components/organisationManager/Organisation"
import organisationRest from "../../rest/organisationRest";
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      organisation: null,
    };
  },
  components: {
    Organisation
  },
  methods: {
    getOrganisation() {
      organisationRest.getOrganisationOrgManager(parseInt(this.id)).then((response) => {
        this.organisation = response.data;
      });
    },
  },
  beforeMount(){
    this.getOrganisation();
  }
};
</script>
<style>
</style>