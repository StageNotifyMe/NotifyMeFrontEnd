<template>
  <div>
    <q-card class="q-ma-lg">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h3">Create new facility</div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-ma-md">
          <div class="text-h6">Facility info</div>
          <q-input v-model="description" label="Description" />
          <q-input
            v-model="location"
            label="Location (on the venue premises)"
          />
          <q-input
            v-model="minimalStaff"
            label="Minimal required staff"
            type="number"
          />
          <q-input
            v-model="maximalStaff"
            label="Maximal required staff"
            type="number"
          />
        </div>
        <div class="q-ma-md">
          <q-btn
            unelevated
            color="primary"
            size="md"
            class="full-width"
            label="Create"
            @click="postFacility()"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import facRest from "../../../rest/facilityRest";
export default {
  name: "CreateFacility",
  props: {
    venueId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    postFacility() {
      let errorMessage = this.validate();
      console.log(errorMessage);
      if (errorMessage == "") {
        let facilityObject = {
          description: this.description,
          location: this.location,
          minimalStaff: parseInt(this.minimalStaff),
          maximalStaff: parseInt(this.maximalStaff),
          venueId: this.venueId,
        };
        facRest.createFacility(facilityObject);
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
      let errorMessage = "";
      if (this.description == "" || this.location == "") {
        errorMessage = "Don't leave any fields blank!";
      } else if (
        this.minimalStaff > 0 &&
        this.minimalStaff < this.maximalStaff
      ) {
        if (this.maximalStaff > 0 && this.maximalStaff > this.minimalStaff) {
          errorMessage = "";
        } else {
          errorMessage =
            "Maximal staff must be greater than 0 and greater than minimal staff.";
        }
      } else {
        errorMessage =
          "Minimal staff must be greater than 0 and lesser than maximal staff.";
      }
      return errorMessage;
    },
  },
  data() {
    return {
      description: "",
      location: "",
      minimalStaff: 0,
      maximalStaff: 0,
    };
  },
  components: {},
};
</script>