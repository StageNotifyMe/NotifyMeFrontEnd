<template>
  <q-page>
    <BreadCrumbs :locations="['Admin', 'Manage', 'Organisations']" />
    <div class="row justify-center">
      <div class="text-h3">Organisations</div>
    </div>
    <Organisations />
  </q-page>
</template>

<script>
import Organisations from "../../components/admin/Organisations";
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
    Organisations,
    BreadCrumbs,
  },
};
</script>
<style>
</style>