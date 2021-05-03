<template>
  <q-page>
    <h2>Organisation</h2>
    <Organisation v-bind:id="id"/>
  </q-page>
</template>

<script>
import Organisation from "../../components/admin/Organisation"
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      organisation: null,
    };
  },
  components: {
    Organisation
  },
};
</script>
<style>
</style>