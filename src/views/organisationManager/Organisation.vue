<template>
  <q-page>
    <BreadCrumbs
      :locations="['Organisation Manager', 'Manage', 'Organisations', 'Edit']"
    />
    <div class="row justify-center">
      <div class="text-h3">Organisation: {{organisation.name}}</div>
    </div>
    <Organisation
    class="q-ma-md"
      v-if="organisation != null"
      v-bind:organisation="this.organisation"
    />
  </q-page>
</template>

<script>
import Organisation from "../../components/organisationManager/Organisation";
import organisationRest from "../../rest/organisationRest";
import BreadCrumbs from "../../components/BreadCrumbs";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      organisation: null,
    };
  },
  components: {
    Organisation,
    BreadCrumbs,
  },
  methods: {
    getOrganisation() {
      organisationRest
        .getOrganisationOrgManager(parseInt(this.id))
        .then((response) => {
          this.organisation = response.data;
        });
    },
  },
  beforeMount() {
    this.getOrganisation();
  },
};
</script>
<style>
</style>