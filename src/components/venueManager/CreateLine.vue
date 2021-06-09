<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h3">Create new line</div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-ma-md">
          <div class="row justify-center">
            <ShowFacilities
              class="q-my-md"
              :venueId="event.venue.id"
              @selectedFacility="setSelectedFacility"
            />
          </div>
          <div class="text-h6">Line info</div>
          <q-input v-model="note" label="Note" />
          <q-input
            v-model="requiredStaff"
            label="Amount of staff members required"
          />
        </div>
        <div class="q-ma-md">
          <q-btn
            unelevated
            color="primary"
            size="md"
            class="full-width"
            label="Create"
            @click="postLine()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import lineRest from "../../rest/lineRest";
import ShowFacilities from "../venueManager/facilities/ShowFacilities";
import eventRest from "../../rest/eventRest";
export default {
  name: "CreateLine",
  props: {
    eventId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    sendRefresh() {
      this.$emit("sendRefresh");
    },
    postLine() {
      let errorMessage = this.validate();
      if (errorMessage == "") {
        let lineObject = {
          note: this.note,
          requiredStaff: parseInt(this.requiredStaff),
          eventId: this.event.id,
          facilityId: this.selectedFacility.id,
        };
        lineRest
          .createLine(lineObject)
          .then(() => {
            this.sendRefresh();
          })
          .catch((error) => {
            console.log(error);
            this.$q.notify({
              message: error.response.data,
              color: "red",
              icon: "error",
              actions: [
                { label: "Dismiss", color: "white", handler: () => {} },
              ],
            });
          });
      } else {
        this.$q.notify({
          message: errorMessage,
          color: "red",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
    },
    validate() {
      return "";
    },
    setSelectedFacility(facility) {
      this.selectedFacility = facility;
    },
  },
  data() {
    return {
      note: "",
      requiredStaff: 0,
      selectedFacility: null,
      event: null,
    };
  },
  created() {
    eventRest.getEvent(this.eventId).then((result) => {
      this.event = result.data;
    });
  },
  components: {
    ShowFacilities,
  },
};
</script>