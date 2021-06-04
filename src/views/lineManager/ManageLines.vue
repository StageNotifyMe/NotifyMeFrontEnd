<template>
  <q-page>
    <BreadCrumbs :locations="['Line Manager','Manage','Lines']"/>
    <div class="row justify-center">
      <h2>Manage lines</h2>
    </div>
    <div class="row justify-center">
      <ShowEventLines
        :eventId="parseInt(eventId)"
        class="q-ma-md show-table"
        @selectedLine="setSelectedLine"
      />
    </div>
    <div class="row justify-center">
      <div class="column">
        <q-btn label="Edit line" color="primary" @click="redirectToEdit()" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ShowEventLines from "../../components/lineManager/ShowEventLines";
import BreadCrumbs from "../../components/BreadCrumbs"

export default {
  props: {
    eventId: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      selectedLine: null,
    };
  },
  methods: {
    WIP() {
      this.$q.notify({
        message: "This feature is not yet implemented",
        color: "orange",
        icon: "warning",
        actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
      });
    },
    redirectToEdit() {
      if (this.selectedLine !== null && this.selectedLine !== undefined) {
        this.$router.push(
          "/lmanager/manage/lines/edit/" + this.selectedLine.id
        );
      } else {
        this.$q.notify({
          message: "Please select a line",
          color: "red",
          icon: "error",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
    },
    setSelectedLine(line) {
      this.selectedLine = line;
    },
  },

  created() {},

  components: {
    ShowEventLines,
    BreadCrumbs,
  },
};
</script>