<template>
  <q-page>
    <div class="row justify-center">
      <h2>Manage lines</h2>
    </div>
    <div class="row justify-center">
      <CreateLine :eventId="parseInt(eventId)" />
    </div>
    <div class="row justify-center">
      <ShowEventLines :eventId="parseInt(eventId)" class="q-ma-md"/>
    </div>
  </q-page>
</template>

<script>
import CreateLine from "../../components/venueManager/CreateLine";
import ShowEventLines from "../../components/venueManager/ShowEventLines";
export default {
  props: {
    eventId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },

  created() {
    //this.eventId = this.$router.param.eventId;
  },

  components: {
    CreateLine,
    ShowEventLines,
  },
};
</script>