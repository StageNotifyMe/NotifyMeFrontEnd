<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h3 q-my-md">User - Home</div>
    </div>
    <div class="row justify-center q-ma-md">
      <NavCard
        :title="'Organisations'"
        :description="'Here you can apply to join organisations and review your current applications.'"
        :icon="'groups'"
        :redirectUrl="'/user/manage/organisations'"
        :buttonText="'manage notifications'"
        :buttonIcon="'edit'"
      />
      <NavCard
        :title="'Notifications'"
        :description="'Here you can manage your notification settings.'"
        :icon="'notifications'"
        :redirectUrl="'/user/manage/communicationPreferences'"
        :buttonText="'manage organisations'"
        :buttonIcon="'edit'"
      />
      <NavCard
        :title="'Available lines'"
        :description="'Here you can look at available and upcoming events and work opportunities.'"
        :icon="'format_list_bulleted'"
        :redirectUrl="'/user/manage/availableLines'"
        :buttonText="'view available lines'"
        :buttonIcon="'visibility'"
      />
      <NavCard
        :title="'Account settings'"
        :description="'Here you can update and review your account information.'"
        :icon="'account_circle'"
        :redirectUrl="'/user/settings'"
        :buttonText="'update account'"
        :buttonIcon="'edit'"
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
      this.$router.push("/user/manage/" + location);
    },
    redirect(location) {
      this.$router.push("/user/" + location);
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