<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h3">Edit line/team | LineId: {{ lineId }}</div>
    </div>
    <div class="row justify-center q-my-lg">
      <ShowOrganisations
        :organisations="team.organisations"
        :title="'Assigned organisations'"
        style="width: 40em"
        @selectedOrganisation="setSelectedOrg"
      />
    </div>
    <div
      class="row justify-center q-py-md"
      v-if="selectedOrg !== null && selectedOrg !== undefined"
    >
      <div class="column q-mx-md">
        <q-btn
          label="Delete"
          color="primary"
          icon="delete"
          unelevated
          @click="removeOrg()"
        />
      </div>
      <div class="column q-mx-md">
        <q-btn
          label="Send notification"
          color="primary"
          icon="message"
          unelevated
          @click="openNotificationDialog(true)"
        />
      </div>
    </div>
    <div class="row justify-center">
      <ShowOrganisations
        :organisations="availableOrgs"
        :title="'Assignable organisations'"
        style="width: 40em"
        @selectedOrganisation="setSelectedAvOrg"
      />
    </div>
    <div
      class="row justify-center"
      v-if="selectedAvOrg !== null && selectedAvOrg !== undefined"
    >
      <div class="column q-pa-md">
        <q-btn
          label="Assing this organisation"
          color="primary"
          unelevated
          icon="add"
          @click="assignOrg()"
        />
      </div>
    </div>
    <CreateNotification
      :organisation="selectedOrg"
      :open="notifyOrg"
      @orgNotify="openNotificationDialog"
    />
  </q-page>
</template>

<script>
import ShowOrganisations from "../../components/lineManager/ShowOrganisations";
import CreateNotification from "../../components/lineManager/CreateNotification";
import teamRest from "../../rest/teamRest";
export default {
  name: "ManageLinesEdit",
  props: {
    lineId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      teamId: 0,
      team: null,
      selectedOrg: null,
      selectedAvOrg: null,
      availableOrgs: [],
      notifyOrg: false,
    };
  },
  methods: {
    openNotificationDialog(mustOpen) {
      this.notifyOrg = mustOpen;
    },
    removeOrg() {
      teamRest
        .deleteOrganisationFromTeam(this.teamId, this.selectedOrg.id)
        .catch((error) => {
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    assignOrg() {
      teamRest
        .addOrgToTeam(this.teamId, this.selectedAvOrg.id)
        .catch((error) => {
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    getAvOrgs() {
      teamRest
        .getAvailableOrganisations(this.teamId)
        .then((result) => {
          this.availableOrgs = result.data;
        })
        .catch((error) => {
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    getTeamId() {
      return teamRest
        .getTeamIdFromLineId(this.lineId)
        .then((result) => {
          this.teamId = result.data;
          return true;
        })
        .catch((error) => {
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    getTeam() {
      teamRest
        .getTeam(this.teamId)
        .then((result) => {
          this.team = result.data;
        })
        .catch((error) => {
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    setSelectedOrg(org) {
      this.selectedOrg = org;
    },
    setSelectedAvOrg(org) {
      this.selectedAvOrg = org;
    },
  },
  beforeMount() {
    this.getTeamId().then(() => {
      this.getTeam();
      this.getAvOrgs();
    });
  },
  components: {
    ShowOrganisations,
    CreateNotification,
  },
};
</script>