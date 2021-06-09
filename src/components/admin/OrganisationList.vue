<template>
  <div>
    <q-list bordered v-if="this.organisations != null">
      <q-item-label header text-bold class="bg-secondary text-white"
        >Organisations</q-item-label
      >
      <q-item
        v-for="organisation in this.organisations"
        v-bind:key="organisation.id"
      >
        <q-item-section wrap> {{ organisation.name }} </q-item-section>
        <q-item-section wrap @click="redirectToOrganisation(organisation.id)"
          ><q-icon name="edit" />
        </q-item-section>
      </q-item>
      <q-item v-if="this.organisations.length == 0">
        <div class="q-mt-lg">There aren't any organisations yet.</div>
      </q-item>
    </q-list>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import organisationRest from "../../rest/organisationRest";
export default {
  name: "OrganisationList",
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
      organisations: null,
    };
  },
  methods: {
    refreshMethod(value) {
      if (value == true) {
        this.getOrganisations();
        this.$emit("refreshed");
      }
    },
    getOrganisations() {
      organisationRest
        .getOrganisations()
        .then((result) => {
          this.organisations = result.data;
        })
        .catch((err) => console.log(err));
    },
    redirectToOrganisation(id) {
      this.$router.push({ path: `/admin/manage/organisation/${id}` });
    },
  },
  beforeMount() {
    this.getOrganisations();
  },
};
</script>