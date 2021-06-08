<template>
  <q-page>
    <div class="row justify-center">
      <h2>Venue manager - Home</h2>
    </div>

    <div class="row justify-center q-ma-md">
      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="event" size="lg" />
              </div>
              <div class="column col-9">
                <div class="text-h6">Events</div>
                <div class="text-subtitle2">
                  Here you can create and manage events for your venues.
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              text-color="white"
              @click="redirect('manage/events')"
              icon-right="edit"
              label="Manage events"
              unelevated
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row justify-center">
      <ShowVenues class="q-ma-lg show-table" @selectedVenue="setSelectedVenue" />
    </div>
    <div class="row justify-center">
      <div class="column q-mx-md">
        <q-btn
          label="Manage facilities"
          color="primary"
          unelevated
          @click="redirectFacilityMagmt()"
        />
      </div>
      <div class="column q-mx-md">
        <q-btn unelevated color="primary"> DUMMY </q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import cookieFun from "../../javascript/cookieFunctions";
import ShowVenues from "../../components/venueManager/ShowVenues";
export default {
  data() {
    return {
      venue: null,
    };
  },
  methods: {
    hasRole(role) {
      return cookieFun.hasRole(role);
    },
    redirect(location) {
      this.$router.push("/vmanager/" + location);
    },
    setSelectedVenue(venue) {
      this.venue = venue;
    },
    redirectFacilityMagmt() {
      if (this.venue === null || this.venue === undefined) {
        this.$q.notify({
          message: "Please select a venue",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
      this.$router.push("/vmanager/manage/facilities/" + this.venue.id);
    },
  },
  components: {
    ShowVenues,
  },
};
</script>