<template>
  <q-page>
    <h1>COMMUNICATION PREFERENCES</h1>
    <div class="row justify-center">
      <ShowComPref @selectedComPref="setSelectedComPref" />
    </div>
    <div class="row justify-center">
      <div class="column">
        <q-btn
          unelevated
          color="primary"
          icon="add"
          label="Add"
          class="q-ma-md"
          @click="createComPref()"
        />
      </div>
      <div
        class="column"
        v-if="
          selectedComPref !== null &&
          selectedComPref !== undefined &&
          selectedComPref != ''
        "
      >
        <q-btn
          unelevated
          color="primary"
          icon="delete"
          label="Delete"
          class="q-ma-md"
          @click="deleteSelectedComPref()"
        />
      </div>
      <div
        class="column"
        v-if="
          selectedComPref !== null &&
          selectedComPref !== undefined &&
          selectedComPref != ''
        "
      >
        <q-btn
          v-if="selectedComPref.active"
          unelevated
          color="primary"
          icon="toggle_off"
          label="Toggle active"
          class="q-ma-md"
          @click="updateSelectedComPref()"
        />
        <q-btn
          v-else
          unelevated
          color="primary"
          icon="toggle_on"
          label="Toggle active"
          class="q-ma-md"
          @click="updateSelectedComPref()"
        />
      </div>
      <div
        class="column"
        v-if="
          selectedComPref !== null &&
          selectedComPref !== undefined &&
          selectedComPref != ''
        "
      >
        <q-btn
          v-if="selectedComPref.defaultt != true"
          unelevated
          color="primary"
          icon="star"
          label="Make default"
          class="q-ma-md"
          @click="makeDefault()"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import ShowComPref from "../../components/user/ShowCommunicationPreferences";
import cookieFunctions from "../../javascript/cookieFunctions";
import communicationPreferencesRest from "../../rest/communicationPreferencesRest";
export default {
  name: "ManageCommunicationPreferences",
  data() {
    return {
      selectedComPref: null,
    };
  },
  methods: {
    setSelectedComPref(selected) {
      this.selectedComPref = selected;
    },

    deleteSelectedComPref() {
      communicationPreferencesRest
        .deleteCommunicationPreference(this.selectedComPref.id)
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
    updateSelectedComPref() {
      let updatedComPref = this.selectedComPref;
      updatedComPref.active = !this.selectedComPref.active;
      communicationPreferencesRest
        .updateCommunicationPreference(updatedComPref)
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
    makeDefault() {
      console.log(this.selectedComPref.defaultt);
    },

    createComPref() {
      const body = {
        userId: JSON.parse(cookieFunctions.getCookie("user_info")).id,
        isActive: true,
        isDefault: false,
        communicationStrategy: "emailcommunicationstrategy",
      };
      console.log(body);
      communicationPreferencesRest
        .createCommunicationPreference(body)
        .catch((error) => {
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
  },
  components: {
    ShowComPref,
  },
};
</script>