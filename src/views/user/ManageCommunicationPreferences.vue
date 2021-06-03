<template>
  <q-page>
    <h3>Currently using app as: Regular user/member</h3>

    <h1>COMMUNICATION PREFERENCES</h1>
    <div class="row justify-center">
      <ShowComPref @selectedComPref="setSelectedComPref" />
    </div>
    <div class="row justify-center">
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

      <div
        class="column"
        v-if="
          selectedComPref !== null &&
          selectedComPref !== undefined &&
          selectedComPref != ''
        ">
        <q-btn
          v-if="selectedComPref.urgent != true"
          unelevated
          color="primary"
          icon="star"
          label="Make Urgent"
          class="q-ma-md"
          @click="updateSelectedComPref()"
        />
      </div>
    </div>
    <div class="row justify-center">
      <createCommunicationPreference />
    </div>
  </q-page>
</template>

<script>
import ShowComPref from "../../components/user/ShowCommunicationPreferences";
import cookieFunctions from "../../javascript/cookieFunctions";
import communicationPreferencesRest from "../../rest/communicationPreferencesRest";
import createCommunicationPreference from "../../components/user/CreateCommunicationPreference";

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
          this.showError(error);
        });
    },
    updateSelectedComPref() {
      let updatedComPref = this.selectedComPref;
      updatedComPref.active = !this.selectedComPref.active;
      updatedComPref.urgent = !this.selectedComPref.urgent;
      console.log("Updating pref: "+JSON.stringify(updatedComPref))
      communicationPreferencesRest
        .updateCommunicationPreference(updatedComPref)
        .catch((error) => {
          this.showError(error);
        });
    },
    makeDefault() {
      let updatedComPref = this.selectedComPref;
      updatedComPref.defaultt = true;
      communicationPreferencesRest
        .updateCommunicationPreference(updatedComPref)
        .catch((error) => {
          this.showError(error);
        });
    },

    createComPref() {
      const body = {
        userId: JSON.parse(cookieFunctions.getCookie("user_info")).id,
        isActive: true,
        isDefault: false,
        isUrgent: false,
        communicationStrategy: "emailcommunicationstrategy",
      };
      console.log(body);
      communicationPreferencesRest
        .createCommunicationPreference(body)
        .catch((error) => {
          this.showError(error);
        });
    },

    showError(error) {
      this.$q.notify({
        message: error.response.data,
        color: "red",
        icon: "error",
        actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
      });
    },
  },
  components: {
    ShowComPref,
    createCommunicationPreference,
  },
};
</script>