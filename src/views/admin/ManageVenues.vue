<template>
  <q-page>
    <BreadCrumbs :locations="['Admin', 'Manage', 'Venues']" />
    <div class="row justify-center">
      <div class="text-h3">Venues</div>
    </div>
    <div class="row justify-center">
      <ShowVenues
        class="q-my-md show-table"
        @selectedVenue="setSelectedVenue"
        :refresh="refreshTable"
        @refreshed="sendRefresh"
      />
    </div>
    <div class="row justify-center">
      <q-btn
        label="Edit venue managers"
        icon="person"
        color="primary"
        unelevated
        @click="redirectToEditVenue()"
      />
    </div>
    <div class="row">
      <div class="col">
        <CreateVenue @sendRefresh="sendRefresh" />
      </div>
    </div>
  </q-page>
</template>

<script>
import CreateVenue from "../../components/admin/CreateVenue";
import ShowVenues from "../../components/venueManager/ShowVenues";
import BreadCrumbs from "../../components/BreadCrumbs";

export default {
  data() {
    return {
      selectedVenue: null,
      refreshTable: false,
    };
  },
  methods: {
    setSelectedVenue(venue) {
      this.selectedVenue = venue;
    },
    sendRefresh() {
      this.refreshTable = !this.refreshTable;
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
    BreadCrumbs,
  },
};
</script>