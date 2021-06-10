<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h3 q-my-md">Line manage - Home</div>
    </div>

    <div class="row justify-center">
      <ShowEvents :userId="getUserId()" @selectedEvent="setSelectedEvent"  class="show-table"/>
    </div>
    <div class="row justify-center">
      <div class="column">
        <q-btn
          label="Manage lines"
          class="q-ma-md"
          color="primary"
          unelevated
          @click="manageLines()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import cookieFun from "../../javascript/cookieFunctions";
import ShowEvents from "../../components/lineManager/ShowEvents";

export default {
  data() {
    return {
      selectedEvent: null,
    };
  },
  methods: {
    hasRole(role) {
      return cookieFun.hasRole(role);
    },
    getUserId() {
      return JSON.parse(cookieFun.getCookie("user_info")).id;
    },
    setSelectedEvent(event) {
      this.selectedEvent = event;
    },
    manageLines() {
      if (this.selectedEvent === null || this.selectedEvent === undefined) {
        this.$q.notify({
          message: "Please select an event",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      } else {
        this.$router.push("/lmanager/manage/lines/" + this.selectedEvent.id);
      }
    },
  },
  components: {
    ShowEvents,
  },
};
</script>