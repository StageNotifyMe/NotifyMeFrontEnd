<template>
  <q-page>
    <BreadCrumbs :locations="['Admin','Manage','Venues']"/>
    <div class="row justify-center">
      <div class="text-h3">Venues</div>
    </div>
    <div class="row justify-center">
      <ShowVenues class="q-my-md show-table" @selectedVenue="setSelectedVenue" />
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
import BreadCrumbs from "../../components/BreadCrumbs"

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
    BreadCrumbs
  },
};
</script>