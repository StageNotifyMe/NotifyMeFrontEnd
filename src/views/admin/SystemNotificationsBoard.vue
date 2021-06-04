<template>
  <q-page>
    <BreadCrumbs :locations="['Admin', 'System', 'Notifications']" />
    <q-card class="q-ma-md">
      <q-card-section class="bg-secondary text-white">
        <div class="row justify-center">
          <div class="text-h3">System notifications</div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div class="row justify-center">
          <q-input
            type="text"
            v-model="filter"
            label="Filter on message..."
            style="width: 30em"
            outlined
            @change="filterMethod()"
          >
            <template v-slot:append>
              <q-icon name="filter_alt" />
            </template>
          </q-input>
        </div>
        <div class="row justify-center">
          <div class="q-pa-md">
            <q-table
            style="width: 105em"
              flat
              class="my-sticky-virtscroll-table"
              virtual-scroll
              :pagination.sync="pagination"
              :rows-per-page-options="[0]"
              :virtual-scroll-sticky-size-start="48"
              row-key="index"
              title="Notifications"
              :data="notifications"
              :columns="columns"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import notificationRest from "../../rest/notificationRest";
import BreadCrumbs from "../../components/BreadCrumbs";

export default {
  name: "AdminNotificationsPage",
  data() {
    return {
      filter: "",
      cachedNotifications: [],
      notifications: [],
      columns: [
        {
          name: "id",
          label: "#",
          field: "id",
        },
        {
          name: "timestamp",
          label: "Timestamp",
          field: (row) => {
            let date = new Date(row.timestamp);
            return (
              date.getDate() +
              "/" +
              date.getMonth() +
              "/" +
              date.getFullYear() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes() +
              ":" +
              date.getSeconds()
            );
          },
          align: "left",
          sortable: true,
        },
        {
          name: "sender",
          label: "Sender",
          field: "sender",
          align: "left",
          sortable: true,
        },
        {
          name: "receiver",
          label: "Receiver",
          field: "receiver",
          align: "left",
          sortable: true,
        },
        {
          name: "message",
          label: "Message",
          field: (row) => row.messageTitle + " | " + row.messageText,
          format: (val) => `${val}`,
          align: "left",
          sortable: true,
        },
        {
          name: "communicationStrategy",
          label: "Communication method",
          field: (row) =>
            row.usedCommunicationStrategy.split(".")[5].split("@")[0],
          format: (val) => `${val}`,
          align: "left",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    loadNotifications() {
      notificationRest
        .getAllNotifications()
        .then((result) => {
          this.cachedNotifications = result.data;
          this.notifications = result.data;
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
    filterMethod() {
      function filterFunction(obj, filterText) {
        return (
          obj.messageTitle.includes(filterText) ||
          obj.messageText.includes(filterText)
        );
      }
      const newArray = this.cachedNotifications.filter((obj) =>
        filterFunction(obj, this.filter)
      );
      this.notifications = newArray;
    },
  },
  beforeMount() {
    this.loadNotifications();
  },
  components: {
    BreadCrumbs,
  },
};
</script>