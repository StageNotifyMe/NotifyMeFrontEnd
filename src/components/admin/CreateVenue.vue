<template>
  <q-card class="q-ma-lg">
    <q-card-section>
      <div class="text-h3">Create new venue</div>
    </q-card-section>
    <q-card-section>
      <div class="q-ma-md">
        <div class="text-h6">Venue info</div>
        <q-input v-model="name" label="Name" />
        <q-input v-model="description" label="Description" />
      </div>
      <div class="q-ma-md">
        <div class="text-h6">Address</div>
        <q-input v-model="streetAndNumber" label="Street and number" />
        <q-input v-model="postalCode" label="Postal code" />
        <q-input v-model="village" label="Village" />
        <q-input v-model="country" label="Country" />
      </div>
      <div class="q-ma-md">
        <q-btn
          unelevated
          color="primary"
          size="md"
          class="full-width"
          label="Create"
          @click="postVenue()"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import venueRest from "../../rest/venueRest";

export default {
  name: "CreateVenue",
  data() {
    return {
      name: "",
      description: "",
      streetAndNumber: "",
      postalCode: "",
      country: "",
      village: "",
    };
  },
  methods: {
    sendRefresh() {
      this.$emit("sendRefresh");
    },
    postVenue() {
      venueRest
        .creatVenue(
          this.name,
          this.description,
          this.streetAndNumber,
          this.postalCode,
          this.village,
          this.country
        )
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
  },
};
</script>