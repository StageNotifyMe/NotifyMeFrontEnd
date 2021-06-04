<template>
  <q-page>
    <BreadCrumbs :locations="['Venue Manager','Manage','Facilites', 'Edit']"/>
    <div class="row justify-center">
      <h2>Manage facilities | Venue ID: {{ venueId }}</h2>
    </div>
    <div class="row">
      <div class="col">
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
import BreadCrumbs from "../../components/BreadCrumbs"

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
    BreadCrumbs,
  },
};
</script>