<template>
  <q-page>
<BreadCrumbs :locations="['Admin','Manage','Venues', 'Edit']"/>
    <div class="row justify-center">
      <div class="text-h2 q-ma-md">
        Edit venue page | venueId: {{ venueId }}
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
          @click="promoteToVenueManager()"
        />
      </div>
    </div>
    <div class="row justify-center">
      <ShowUsers :users="venueManagers" :title="'Venue managers'" class="q-my-md show-table" />
    </div>
  </q-page>
</template>

<script>
import UserDetailsCard from "../../components/UserDetailsCard";
import UserSelection from "../../components/admin/UserSelection";
import ShowUsers from "../../components/admin/ShowUsers";
import venRest from "../../rest/venueRest";
import BreadCrumbs from "../../components/BreadCrumbs"

export default {
  name: "ManageVenuesEdit",
  props: {
    venueId: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      username: "",
      userId: "",
      selectedUser: null,
      venueManagers: null,
    };
  },

  methods: {
    promoteToVenueManager() {
      if (
        this.venueId === null ||
        this.venueId === undefined ||
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
        venRest
          .promoteToVmanager(this.selectedUser.id, parseInt(this.venueId))
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
      console.log(user);
      this.selectedUser = user;
    },
  },

  beforeMount() {
    venRest
      .getVenueManagers(this.venueId)
      .then((result) => {
        this.venueManagers = result.data;
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
  components: {
    UserSelection,
    UserDetailsCard,
    ShowUsers,
    BreadCrumbs,
  },
};
</script>