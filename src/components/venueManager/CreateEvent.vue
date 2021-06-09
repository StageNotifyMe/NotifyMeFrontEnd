<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h3">Create new event</div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-my-md">
          <div class="text-h6">Select event venue</div>
          <ShowVenues @selectedVenue="setSelectedVenue" class="q-my-md" />
        </div>
        <div class="q-ma-md">
          <div class="text-h6">Event info</div>
          <q-input v-model="title" label="Title" />
          <q-input v-model="description" label="Description" />
          <q-input v-model="artist" label="Artist" />
          <div class="q-pa-md">
            <div class="q-gutter-md row items-start">
              <q-date
                v-model="dateTime"
                mask="YYYY-MM-DD HH:mm"
                color="primary"
              />
              <q-time
                v-model="dateTime"
                mask="YYYY-MM-DD HH:mm"
                color="primary"
                format24h
              />
            </div>
          </div>
        </div>
        <div class="q-ma-md">
          <q-btn
            unelevated
            color="primary"
            size="md"
            class="full-width"
            label="Create"
            @click="postEvent()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import ShowVenues from "../../components/venueManager/ShowVenues";
import eventRest from "../../rest/eventRest";

export default {
  name: "CreateEvent",
  methods: {
    sendRefresh() {
      this.$emit("sendRefresh");
    },
    postEvent() {
      let eventObject = {
        title: this.title,
        description: this.description,
        artist: this.artist,
        dateTime: this.dateTime,
        venueId: this.selectedVenue.id,
      };
      eventRest
        .createEvent(eventObject)
        .then(() => {
          this.sendRefresh();
        })
        .catch((error) => {
          console.log(error);
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    setSelectedVenue(selectedVenue) {
      this.selectedVenue = selectedVenue;
    },
  },
  data() {
    return {
      title: "",
      description: "",
      artist: "",
      dateTime: null,
      selectedVenue: null,
    };
  },
  components: {
    ShowVenues,
  },
};
</script>