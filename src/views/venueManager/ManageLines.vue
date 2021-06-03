<template>
  <q-page>
            <h3>Currently using app as: Venue Manager</h3>

    <div class="row justify-center">
      <h2>Manage lines (venue manager)</h2>
    </div>
    <div class="row justify-center">
      <ShowEventLines :eventId="parseInt(eventId)" class="q-ma-md"/>
    </div>
    <div class="row justify-center">
      <CreateLine :eventId="parseInt(eventId)" />
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