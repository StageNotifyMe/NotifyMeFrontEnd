<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h3 q-my-md">Admin - Home</div>
    </div>

    <div class="row justify-center q-ma-md">
      <NavCard
        :title="'Organisations'"
        :description="'Here you can create new organisations and assign managers to existing organisations.'"
        :icon="'groups'"
        :redirectUrl="'/admin/manage/organisations'"
        :buttonText="'manage organisations'"
        :buttonIcon="'edit'"
      />

      <NavCard
        :title="'Venues'"
        :description="'Here you can create new venues and assign managers to them.'"
        :icon="'location_on'"
        :redirectUrl="'/admin/manage/venues'"
        :buttonText="'manage venues'"
        :buttonIcon="'edit'"
      />

      <NavCard
        :title="'Administration'"
        :description="'Here you can look at the notification logs.'"
        :icon="'admin_panel_settings'"
        :redirectUrl="'/admin/system/notifications'"
        :buttonText="'notifications log'"
        :buttonIcon="'feed'"
      />
    </div>
  </q-page>
</template>

<script>
import cookieFun from "../../javascript/cookieFunctions";
import NavCard from "../../components/NavCard.vue";

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
  components: {
    NavCard,
  },
};
</script>