<template>
  <q-page>
    <div class="row justify-center">
      <ShowVenues class="q-my-md" @selectedVenue="setSelectedVenue" />
    </div>
    <div class="row justify-center">
      <q-btn
        label="Edit venue"
        color="primary"
        unelevated
        @click="redirectToEditVenue()"
      />
    </div>
    <div class="row">
      <div class="col">
        <CreateVenue />
      </div>
    </div>
  </q-page>
</template>

<script>
import CreateVenue from "../../components/admin/CreateVenue";
import ShowVenues from "../../components/venueManager/ShowVenues";
export default {
  data() {
    return {
      selectedVenue: null,
    };
  },
  methods: {
    setSelectedVenue(venue) {
      this.selectedVenue = venue;
    },
    redirectToEditVenue() {
      if (this.selectedVenue === null || this.selectedVenue === undefined) {
        this.$q.notify({
          message: "Please select a venue to edit",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      } else {
        this.$router.push("/admin/manage/venues/" + this.selectedVenue.id);
      }
    },
  },
  components: {
    CreateVenue,
    ShowVenues,
  },
};
</script>