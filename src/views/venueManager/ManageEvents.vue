<template>
  <q-page>
    <BreadCrumbs :locations="['Venue Manager', 'Manage', 'Events']" />
    <div class="row justify-center q-ma-lg">
      <div class="text-h3">Manage events</div>
    </div>
    <div class="row justify-center">
      <ShowEvents
        :userId="getUserId()"
        @selectedEvent="setSelectedEvent"
        class="q-my-md show-table"
        :refresh="refreshTable"
        @refreshed="sendRefresh"
      />
    </div>
    <div
      class="row justify-center"
      v-if="
        selectedEvent !== null &&
        selectedEvent !== undefined &&
        selectedEvent.eventStatus != 'CANCELED'
      "
    >
      <div class="column">
        <q-btn
          label="Create/Delete lines"
          class="q-ma-md"
          color="primary"
          icon="flaky"
          unelevated
          @click="manageLines()"
        />
      </div>
      <div class="column">
        <q-btn
          label="Edit lines/managers"
          class="q-ma-md"
          color="primary"
          icon="edit"
          unelevated
          @click="editLines()"
        />
      </div>
      <div class="column">
        <q-btn
          label="Cancel event"
          class="q-ma-md"
          color="primary"
          unelevated
          icon="delete"
          @click="cancelEventPopup()"
        />
      </div>
    </div>
    <div
      v-else-if="selectedEvent !== null && selectedEvent !== undefined"
      class="row justify-center"
    >
      <q-btn
        label="Activate event"
        class="q-ma-md"
        color="primary"
        unelevated
        icon="check"
        @click="activateEvent()"
      />
    </div>
    <div class="row justify-center">
      <div class="column"><CreateEvent @sendRefresh="sendRefresh" /></div>
    </div>

    <q-dialog v-model="confirmDelete" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="priority_high" color="orange" text-color="white" />
          <span class="q-ml-sm"
            >Are you sure that you want to cancel this event?<br />All involved
            parties will be notified.</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Keep event" color="primary" v-close-popup />
          <q-btn
            flat
            label="Cancel event"
            color="red"
            v-close-popup
            @click="cancelEvent()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import CreateEvent from "../../components/venueManager/CreateEvent";
import ShowEvents from "../../components/lineManager/ShowEvents";
import cookieFun from "../../javascript/cookieFunctions";
import eventRest from "../../rest/eventRest";
import BreadCrumbs from "../../components/BreadCrumbs";

export default {
  data() {
    return {
      selectedEvent: null,
      confirmDelete: false,
      refreshTable: false,
    };
  },
  methods: {
    sendRefresh() {
      this.refreshTable = !this.refreshTable;
    },
    activateEvent() {
      eventRest.activateEvent(this.selectedEvent.id).catch((error) => {
        console.log(error);
        this.$q.notify({
          message: error.response.data,
          color: "red",
          icon: "error",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      });
    },
    cancelEventPopup() {
      if (this.selectedEvent !== undefined && this.selectedEvent !== null) {
        console.log(this.selectedEvent);
        this.confirmDelete = true;
      } else {
        this.$q.notify({
          message: "Please select an event first",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
    },
    cancelEvent() {
      eventRest.cancelEvent(this.selectedEvent.id).catch((error) => {
        console.log(error);
        this.$q.notify({
          message: error.response.data,
          color: "red",
          icon: "error",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      });
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
    },
  },
  components: {
    CreateEvent,
    ShowEvents,
    BreadCrumbs,
  },
};
</script>