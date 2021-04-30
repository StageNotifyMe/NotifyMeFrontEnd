<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h2">Manage events page</div>
    </div>
    <div class="row justify-center">
      <div class="column"><CreateEvent /></div>
    </div>
  </q-page>
</template>

<script>
import CreateEvent from "../../components/venueManager/CreateEvent";
export default {
  components: {
    CreateEvent,
  },
};
</script>