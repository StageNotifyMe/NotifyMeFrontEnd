<template>
  <q-page>
        <h3>Currently using app as: Venue Manager</h3>

    <div class="row justify-center">
      <div class="text-h2">Manage events page</div>
    </div>
    <div class="row justify-center">
      <ShowEvents
        :userId="getUserId()"
        @selectedEvent="setSelectedEvent"
        class="q-my-md"
      />
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
      <div class="column">
        <q-btn
          label="Edit lines"
          class="q-ma-md"
          color="primary"
          unelevated
          @click="editLines()"
        />
      </div>
    </div>
    <div class="row justify-center">
      <div class="column"><CreateEvent /></div>
    </div>
  </q-page>
</template>

<script>
import CreateEvent from "../../components/venueManager/CreateEvent";
import ShowEvents from "../../components/lineManager/ShowEvents";
import cookieFun from "../../javascript/cookieFunctions";
export default {
  methods: {
    data() {
      return {
        selectedEvent: null,
      };
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
        this.$router.push("/vmanager/manage/lines/" + this.selectedEvent.id);
      }
    },
    editLines() {
      if (this.selectedEvent === null || this.selectedEvent === undefined) {
        this.$q.notify({
          message: "Please select an event",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      } else {
        this.$router.push("/vmanager/manage/events/" + this.selectedEvent.id);
      }
    }
  },
  components: {
    CreateEvent,
    ShowEvents,
  },
};
</script>