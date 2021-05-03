<template>
  <q-page>
    <AddOrgAdmin v-if="organisation != null" v-bind:organisation="this.organisation" />
  </q-page>
</template>
<style>
</style>

<script>
import AddOrgAdmin from "./AddOrgAdmin";
export default {
  name: "Organisation",
  props: {
    organisation: {
      type: Object,
      required: true,
    },
  },
  components: {
    AddOrgAdmin,
  },
};
</script>