<template>
  <q-page>
    <div class="row justify-center">
      <div class="text-h3 q-my-md">Organisation manager - Home</div>
    </div>

    <div class="row justify-center q-ma-md">
      <NavCard
        :title="'Organisations'"
        :description="' Here you can manage applications for your assigned organisations.'"
        :icon="'groups'"
        :redirectUrl="'/omanager/manage/organisations'"
        :buttonText="'Manage organisations'"
        :buttonIcon="'edit'"
      />

      <NavCard
        :title="'Team applications'"
        :description="' Here you can manage team applications for your assigned organisations.'"
        :icon="'person_add_alt'"
        :redirectUrl="'/omanager/manage/teamApplications'"
        :buttonText="'Team applications for events'"
        :buttonIcon="'edit'"
      />
    </div>
  </q-page>
</template>


<style scoped>
.my-card {
  height: 15em;
}
.my-card-title {
  height: 60%;
}
</style>

<script>
import cookieFun from "../../javascript/cookieFunctions";
import NavCard from "../../components/NavCard.vue";

export default {
  methods: {
    hasRole(role) {
      return cookieFun.hasRole(role);
    },
    redirectToManage(location) {
      this.$router.push("/omanager/manage/" + location);
    },
  },
  components: {
    NavCard,
  },
};
</script>