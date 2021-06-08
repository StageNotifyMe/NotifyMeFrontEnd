<template>
  <q-page>
    <BreadCrumbs
      :locations="['Organisation Manager', 'Manage', 'Team Applications']"
    />
    <div class="row justify-center">
      <div class="text-h3">
        Team applications
      </div>
    </div>
    <TeamApplications class="q-ma-lg" />
  </q-page>
</template>

<script>
import TeamApplications from "../../components/organisationManager/UserTeamApplications";
import BreadCrumbs from "../../components/BreadCrumbs";
export default {
  components: {
    TeamApplications,
    BreadCrumbs,
  },
};
</script>
<style>
</style>