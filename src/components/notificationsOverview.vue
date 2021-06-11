<template>
  <div class="overview-background">
    <div class="row justify-center bg-deep-purple-5 text-white">
      <div class="text-h3 q-my-md">Notifications</div>
    </div>
    <q-list bordered v-if="this.notifications != null">
      <q-card
        v-for="notification in this.notifications"
        v-bind:key="notification.id"
      >
        <q-card-section style="width: 100%; background: white">
          <div class="row">
            <div class="column col-10">
              <div class="row justify-left">
                <div class="text-subtitle2">
                  <b>{{ notification.message.title }}</b>
                </div>
              </div>
              <div class="row justify-left">
                <div class="text-body2">
                  {{ notification.message.text }}
                </div>
              </div>
            </div>
            <div class="column col-1">
              <q-btn
                rounded
                unelevated
                color="secondary"
                icon="delete"
                @click="hideNotification(notification)"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-list>
  </div>
</template>
<style scoped>
.overview-background {
  background: white;
  width: 100%;
  height: 60%;
}
</style>

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
    hideNotification(notification) {
      notificationRest.hideNotification(notification.id)
      .then(()=>{
        this.getNotifications();
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
    getNotifications() {
      notificationRest
        .getNotifications()
        .then((response) => {
          this.notifications = response.data;
          this.notifications.sort((a, b) => b.id - a.id);
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