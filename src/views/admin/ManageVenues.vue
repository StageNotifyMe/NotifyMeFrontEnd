<template>
  <q-page>
    <div class="row">
      <div class="col">
        <CreateVenue />
      </div>
    </div>
  </q-page>
</template>

<script>
import CreateVenue from "../../components/admin/CreateVenue";
export default {
  components: {
    CreateVenue,
  },
};
</script>