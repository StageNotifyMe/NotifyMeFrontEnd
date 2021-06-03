<template>
  <q-page>
            <h3>Currently using app as: Venue Manager</h3>

    <div class="row justify-center">
      <div class="text-h2 q-ma-md">
        Edit event page | venueId: {{ eventId }}
      </div>
    </div>
    <div class="row justify-center items-center">
      <div class="column q-ma-md">
        <UserDetailsCard :user="selectedUser" />
      </div>
      <div class="column q-ma-md">
        <UserSelection @selectedUser="setSelectedUser" />
      </div>
      <div class="column q-ma-md">
        <q-btn
          unelevated
          label="Make venue manager"
          color="primary"
          @click="promoteToLineManager()"
        />
      </div>
    </div>
    <div class="row justify-center">
      <ShowUsers
        :users="lineManagers"
        :title="'Line managers'"
        class="q-my-md"
      />
    </div>
  </q-page>
</template>
<script>
import ShowUsers from "../../components/admin/ShowUsers";
import UserDetailsCard from "../../components/UserDetailsCard";
import UserSelection from "../../components/venueManager/UserSelection";
import eventRest from "../../rest/eventRest";
export default {
  name: "ManageEventsEdit",
  props: {
    eventId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      username: "",
      userId: "",
      selectedUser: null,
      lineManagers: [],
    };
  },

  methods: {
    promoteToLineManager() {
      if (
        this.eventId === null ||
        this.eventId === undefined ||
        this.selectedUser === null ||
        this.selectedUser === undefined
      ) {
        this.$q.notify({
          message: "Please select a user",
          color: "red",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      } else {
        eventRest
          .promoteToLManager(this.selectedUser.id, parseInt(this.eventId))
          .catch((error) => {
            this.$q.notify({
              message: error.response.data,
              color: "red",
              icon: "error",
              actions: [
                { label: "Dismiss", color: "white", handler: () => {} },
              ],
            });
          });
      }
    },

    setSelectedUser(user) {
      this.selectedUser = user;
    },

    loadLineManagers() {
      eventRest
        .getLineManagers(this.eventId)
        .then((result) => {
          this.lineManagers = result.data;
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
  },

  created() {
    this.loadLineManagers();
  },

  components: {
    ShowUsers,
    UserDetailsCard,
    UserSelection,
  },
};
</script>