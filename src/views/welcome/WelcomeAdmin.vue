<template>
  <q-page>
    <div class="row justify-center">
      <h2>Admin - Home</h2>
    </div>

    <div class="row justify-center q-ma-md">
      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="groups" size="lg"/>
              </div>
              <div class="column col-9">
                <div class="text-h6">Organisations</div>
                <div class="text-subtitle2">Here you can create new organisations and assign managers to existing organisations.</div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              text-color="white"
              @click="redirectToManage('organisations')"
              icon-right="edit"
              label="Manage organisations"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="location_on" size="lg"/>
              </div>
              <div class="column col-9">
                <div class="text-h6">Venues</div>
                <div class="text-subtitle2">Here you can create new venues and assign managers to them.</div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              @click="redirectToManage('venues')"
              icon-right="edit"
              label="Manage venues"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="admin_panel_settings" size="lg"/>
              </div>
              <div class="column col-9">
                <div class="text-h6">Administration</div>
                <div class="text-subtitle2">Here you can look at the notification logs.</div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              @click="redirectTo('/admin/system/notifications')"
              icon-right="feed"
              label="Notifications log"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.my-card{
  height: 15em;
}
.my-card-title{
  height: 60%;
}
</style>

<script>
import cookieFun from "../../javascript/cookieFunctions";

export default {
  methods: {
    hasRole(role) {
      return cookieFun.hasRole(role);
    },
    redirectToManage(location) {
      this.$router.push("/admin/manage/" + location);
    },
    redirectTo(location) {
      this.$router.push(location);
    },
  },
};
</script>