<template>
  <q-page :key="this.key">
    <BreadCrumbs :locations="['User', 'Lines']" />
    <div class="row justify-center q-ma-md">
      <div class="text-h3">Available lines:</div>
    </div>
    <AvailableLines class="q-ma-lg"/>
    <div class="row justify-center q-ma-md">
      <div class="text-h3">Your teams:</div>
    </div>
    <Teams class="q-ma-lg" v-on:refresh="updateKey()" />
  </q-page>
</template>

<script>
import Teams from "../../components/user/Teams.vue";
import AvailableLines from "../../components/user/AvailableLines";
import BreadCrumbs from "../../components/BreadCrumbs";

export default {
  components: {
    AvailableLines,
    Teams,
    BreadCrumbs,
  },
  data() {
    return {
      key: 1,
    };
  },
  methods: {
    updateKey() {
      this.key++;
    },
  },
};
</script>
<style>
</style>