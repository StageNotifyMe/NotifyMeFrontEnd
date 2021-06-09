<template>
  <q-page>
    <BreadCrumbs :locations="['User', 'Manage', 'Organisations']" />
    <q-card class="q-ma-xl" flat>
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h3 q-ma-lg">Organisations</div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="large-card-section vertical-bottom">
        <div class="row justify-center" style="height: 100%">
          <div class="column col-4 justify-center">
            <ApplyToOrganisation @sendRefresh="sendRefresh" />
          </div>
          <div class="column col-6 justify-center">
            <ApplicationList :refresh="refreshTable" @refreshed="sendRefresh" />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.large-card-section {
  height: 30em;
}
</style>

<script>
import ApplyToOrganisation from "../../components/user/ApplyToOrganisation";
import ApplicationList from "../../components/user/ApplicationList";
import BreadCrumbs from "../../components/BreadCrumbs";

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
    ApplyToOrganisation,
    ApplicationList,
    BreadCrumbs,
  },
};
</script>
<style>
</style>