<template>
  <q-page>
    <div class="row justify-center">
      <div class="column">
        <q-select
          v-model="selectedStrategy"
          :options="simplifiedOptions"
          label="Communication method"
          style="width: 20em"
        />
      </div>
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
    </div>
  </q-page>
</template>
<script>
import comPrefRest from "../../rest/communicationPreferencesRest";
import cookieFunctions from "../../javascript/cookieFunctions";

export default {
  name: "CreateComPref",
  data() {
    return {
      selectedStrategy: "",
      simplifiedOptions: ["SMS", "E-mail", "App notifications"],
      options: [
        "smscommunicationstrategy",
        "emailcommunicationstrategy",
        "appnotificationcommunicationstrategy",
      ],
    };
  },
  methods: {
    createComPref() {
      const body = {
        userId: JSON.parse(cookieFunctions.getCookie("user_info")).id,
        isActive: true,
        isDefault: false,
        isUrgent: false,
        communicationStrategy: this.options[
          this.simplifiedOptions.findIndex((i) => i == this.selectedStrategy)
        ],
      };
      comPrefRest.createCommunicationPreference(body).catch((error) => {
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