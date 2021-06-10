<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h3 q-my-md">Venue manager - Home</div>
    </div>

    <div class="row justify-center q-ma-md">
      <NavCard
        :title="'Events'"
        :description="'Here you can create and manage events for your venues.'"
        :icon="'event'"
        :redirectUrl="'/vmanager/manage/events'"
        :buttonText="'Manage events'"
        :buttonIcon="'edit'"
      />
    </div>

    <div class="row justify-center">
      <ShowVenues
        class="q-ma-lg show-table"
        @selectedVenue="setSelectedVenue"
      />
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
    </div>
  </q-page>
</template>

<script>
import cookieFun from "../../javascript/cookieFunctions";
import ShowVenues from "../../components/venueManager/ShowVenues";
import NavCard from "../../components/NavCard.vue";

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
    NavCard,
  },
};
</script>