<template>
<div style="background: white;width: 100%">
    <h2>Notifications</h2>
    <q-list bordered v-if="this.notifications != null">
      <q-card
        v-for="notification in this.notifications"
        v-bind:key="notification.id"
      >
      <q-card-section style="width:100%; background: white">
          <div class="text-h7">{{notification.message.title}}</div>
          <div class="text-caption text-grey">
            {{notification.message.text}}
          </div>
        </q-card-section>
      </q-card>
    </q-list>
</div>
</template>
<script>
import notificationRest from "../rest/notificationRest";
export default {
  name: "ApplicationList",
  data() {
    return {
      notifications: null,
    };
  },
  methods: {
    getNotifications() {
      notificationRest
        .getNotifications()
        .then((response) => {
          console.log(response);
          this.notifications = response.data;
        })
        .catch((err) =>
          this.$q.notify({
            message: err,
            color: "red",
            icon: "warning",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          })
        );
    },
  },
  beforeMount() {
    this.getNotifications();
  },
};
</script>