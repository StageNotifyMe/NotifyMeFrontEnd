<template>
  <q-page>
    <q-card class="q-ma-xl">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h3 q-ma-lg">Organisations</div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="large-card-section vertical-bottom">
        <div class="row justify-center" style="height:100%">
          <div class="column col-4 justify-center">
            <ApplyToOrganisation />
          </div>
          <div class="column col-6 justify-center">
            <ApplicationList />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped>
.large-card-section{
  height: 30em;
}
</style>

<script>
import ApplyToOrganisation from "../../components/user/ApplyToOrganisation";
import ApplicationList from "../../components/user/ApplicationList";

export default {
  components: {
    ApplyToOrganisation,
    ApplicationList,
  },
};
</script>
<style>
</style>