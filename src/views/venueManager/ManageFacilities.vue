<template>
  <q-page>
    <div class="row">
      <div class="col">
        <h3>Manage facilities | VenueId: {{ venueId }}</h3>
        <ManageFacilities
          :venueId="venueId"
          @selectedFacility="setSelectedFacility"
          class="q-mx-lg"
        />
        <CreateFacility :venueId="venueId" />
      </div>
    </div>
  </q-page>
</template>

<script>
import ManageFacilities from "../../components/venueManager/facilities/ShowFacilities";
import CreateFacility from "../../components/venueManager/facilities/CreateFacility";
import venueRest from "../../rest/venueRest";
export default {
  data() {
    return {
      venueId: 0,
      venue: null,
    };
  },
  methods: {
    setSelectedFacility(facility) {
      console.log(facility);
    },
  },
  created() {
    this.venueId = parseInt(this.$route.params.venueId);
    venueRest.getVenue(this.venueId).then((result) => {
      this.venue = result.data;
    });
  },
  components: {
    ManageFacilities,
    CreateFacility,
  },
};
</script>