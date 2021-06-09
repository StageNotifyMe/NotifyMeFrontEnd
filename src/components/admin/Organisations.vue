<template>
  <q-page>
    <CreateOrganisation @sendRefresh="sendRefresh" />
    <OrganisationList
      class="orgList"
      :refresh="refreshTable"
      @refreshed="sendRefresh"
    />
  </q-page>
</template>
<style>
</style>

<script>
import CreateOrganisation from "./CreateOrganisation.vue";
import OrganisationList from "./OrganisationList.vue";
export default {
  data() {
    return {
      refreshTable: false,
    };
  },
  methods: {
    sendRefresh() {
      this.refreshTable = !this.refreshTable;
    },
  },
  components: {
    CreateOrganisation,
    OrganisationList,
  },
  name: "Organisations",
};
</script>