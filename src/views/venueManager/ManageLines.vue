<template>
  <q-page>
    <BreadCrumbs :locations="['Line Manager', 'Manage', 'Lines']" />
    <div class="row justify-center">
      <h3>Manage lines</h3>
    </div>
    <div class="row justify-center">
      <ShowEventLines
        :eventId="parseInt(eventId)"
        class="q-ma-md show-table"
        :refresh="refreshTable"
        @refreshed="sendRefresh"
        @selectedLine="setSelectedLine"
      />
    </div>
    <div
      v-if="selectedLine !== null && selectedLine !== undefined"
      class="row justify-center"
    >
      <q-btn
        label="Delete line"
        icon="delete"
        color="primary"
        unelevated
        @click="deleteSelectedLine()"
      />
    </div>
    <div class="row justify-center">
      <CreateLine
        :eventId="parseInt(eventId)"
        class="show-table"
        @sendRefresh="sendRefresh"
      />
    </div>
  </q-page>
</template>

<script>
import CreateLine from "../../components/venueManager/CreateLine";
import ShowEventLines from "../../components/venueManager/ShowEventLines";
import BreadCrumbs from "../../components/BreadCrumbs";

export default {
  props: {
    eventId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      refreshTable: false,
      selectedLine: null,
    };
  },

  methods: {
    deleteSelectedLine() {
      this.$q.notify({
        message: "This feature hasn't been implemented yet. Just imagine that this line deletes itself.",
        color: "orange",
        icon: "warning",
        actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
      });
    },
    setSelectedLine(line) {
      this.selectedLine = line;
    },
    sendRefresh() {
      this.refreshTable = !this.refreshTable;
    },
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