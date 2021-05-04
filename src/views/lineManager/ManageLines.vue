<template>
  <q-page>
    <div class="row justify-center">
      <h2>Manage lines (line manager)</h2>
    </div>
    <div class="row justify-center">
      <ShowEventLines :eventId="parseInt(eventId)" class="q-ma-md"/>
    </div>
    <div class="row justify-center">
      <div class="column">
        <q-btn 
        label="Edit line"
        color="primary"
        @click="WIP()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
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
  methods:{
    WIP(){
      this.$q.notify({
          message: "This feature is not yet implemented",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
    }
  },

  created() {
  },

  components: {
    ShowEventLines,
  },
};
</script>