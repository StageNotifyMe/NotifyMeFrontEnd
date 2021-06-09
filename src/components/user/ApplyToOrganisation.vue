<template>
  <div class="createOrgForm">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-select
          filled
          icon="groups"
          v-model="orgname"
          label="Apply to organisation."
          hint="Organisation name"
          lazy-rules
          use-input
          fill-input
          hide-selected
          :options="this.options"
          @filter="filterFn"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        ></q-select>

        <div>
          <q-btn label="Submit" type="submit" color="primary"></q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>
<style scoped>
.createOrgForm {
  min-height: 20%;
  max-height: 20%;
}
</style>
<script>
import organisationRest from "../../rest/organisationRest";
export default {
  name: "ApplyToOrganisation",
  data() {
    return {
      orgname: "",
      options: new Array(),
      orgnameCache: new Array(),
      organisations: new Array(),
    };
  },
  methods: {
    onSubmit() {
      organisationRest
        .applyToOrganisation(this.findOrgIdByName(this.orgname))
        .then(() => {
          this.sendRefresh();
        })
        .catch((err) => {
          console.log(err);
          this.errorText = err.response.data;
          this.seamless = true;
        });
    },
    sendRefresh() {
      this.$emit("sendRefresh");
    },
    findOrgIdByName(orgname) {
      return this.organisations.filter((org) => org.name == orgname)[0].id;
    },
    getOrganisations() {
      organisationRest
        .getOrganisationsLimitedInfo()
        .then((response) => {
          this.organisations = response.data.organisations;
          this.fillNamesFromOrgs();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fillNamesFromOrgs() {
      this.organisations.forEach((org) => {
        this.options.push(org.name);
        this.orgnameCache.push(org.name);
      });
    },
    filterFn(val, update) {
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.orgnameCache.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  beforeMount() {
    this.getOrganisations();
  },
};
</script>