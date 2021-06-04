<template>
  <q-page>
    <div class="row justify-center">
      <h2>Welcome screen for venue managers</h2>
    </div>
    
    <div class="row justify-center">
      <q-btn
        label="Event management"
        color="secondary"
        unelevated
        @click="redirect('manage/events')"
      />
    </div>
    <div class="row justify-center">
      <ShowVenues class="q-ma-lg" @selectedVenue="setSelectedVenue"/>
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
        <q-btn unelevated color="primary">
          DUMMY
        </q-btn>
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
    redirectFacilityMagmt(){
      if (this.venue === null || this.venue === undefined){
        this.$q.notify({
          message: "Please select a venue",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
      this.$router.push('/vmanager/manage/facilities/'+this.venue.id)
    },
  },
  components: {
    ShowVenues,
  },
};
</script>