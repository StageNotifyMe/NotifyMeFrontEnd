<template>
  <q-page>
    <h2>Organisation</h2>
    <Organisation v-if="organisation!=null" v-bind:organisation="this.organisation"/>
  </q-page>
</template>

<script>
import Organisation from "../../components/admin/Organisation"
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
      organisationRest.getOrganisation(parseInt(this.id)).then((response) => {
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