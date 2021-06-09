<template>
  <div>
    <q-list bordered v-if="this.applications != null">
      <q-item-label header text-bold class="bg-secondary text-white"
        >Organisation applications</q-item-label
      >
      <q-item
        v-for="application in this.applications"
        v-bind:key="application.organisationUserKey.organisationId"
      >
        <q-item-section wrap> {{ application.orgName }} </q-item-section>
        <q-item-section wrap>
          {{ application.applicationStatus }}
        </q-item-section>
      </q-item>
      <q-item v-if="this.applications.length == 0">
        <div class="q-mt-lg">You don't have any applications.</div>
      </q-item>
    </q-list>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import organisationRest from "../../rest/organisationRest";
export default {
  name: "ApplicationList",
  props: {
    refresh: {
      type: Boolean,
      required: false,
    },
  },
  watch: {
    refresh: function (newValue) {
      this.refreshMethod(newValue);
    },
  },
  data() {
    return {
      applications: null,
    };
  },
  methods: {
    getApplications() {
      organisationRest
        .getOrganisationApplications()
        .then((result) => {
          console.log(result);
          this.applications = result.data;
        })
        .catch((err) => console.log(err));
    },
    refreshMethod(value) {
      if (value == true) {
        this.getApplications();
        this.$emit("refreshed");
      }
    },
  },
  beforeMount() {
    this.getApplications();
  },
};
</script>