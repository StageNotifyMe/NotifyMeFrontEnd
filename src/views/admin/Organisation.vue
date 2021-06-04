<template>
  <q-page>
    <BreadCrumbs :locations="['Admin', 'Manage', 'Organisations', 'Edit']" />
    <div class="row justify-center">
      <div class="text-h3">Organisation</div>
    </div>
    <div class="row justify-center q-ma-md">
      <Organisation style="width: 30em"
        v-if="organisation != null"
        v-bind:organisation="this.organisation"
      />
    </div>
  </q-page>
</template>

<script>
import Organisation from "../../components/admin/Organisation";
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
      organisationRest.getOrganisation(parseInt(this.id)).then((response) => {
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