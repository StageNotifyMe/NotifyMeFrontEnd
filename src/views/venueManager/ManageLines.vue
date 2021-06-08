<template>
  <q-page>
    <BreadCrumbs :locations="['Line Manager','Manage','Lines']"/>
    <div class="row justify-center">
      <h3>Manage lines</h3>
    </div>
    <div class="row justify-center">
      <ShowEventLines :eventId="parseInt(eventId)" class="q-ma-md show-table"/>
    </div>
    <div class="row justify-center">
      <CreateLine :eventId="parseInt(eventId)" class="show-table" />
    </div>
  </q-page>
</template>

<script>
import CreateLine from "../../components/venueManager/CreateLine";
import ShowEventLines from "../../components/venueManager/ShowEventLines";
import BreadCrumbs from "../../components/BreadCrumbs"

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
    BreadCrumbs,
  },
};
</script>