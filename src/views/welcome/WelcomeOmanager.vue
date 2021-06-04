<template>
  <q-page>
    <div class="row justify-center">
      <h2>Organisation manager - Home</h2>
    </div>

    <div class="row justify-center q-ma-md">
      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="groups" size="lg" />
              </div>
              <div class="column col-9">
                <div class="text-h6">Organisations</div>
                <div class="text-subtitle2">
                  Here you can manage applications for your assigned organisations.
                </div>
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
                <q-icon name="person_add_alt" size="lg" />
              </div>
              <div class="column col-9">
                <div class="text-h6">Team applications</div>
                <div class="text-subtitle2">
                  Here you can manage team applications for your assigned organisations.
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              text-color="white"
              @click="redirectToManage('teamApplications')"
              icon-right="edit"
              label="Team applications for events"
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
      this.$router.push("/omanager/manage/" + location);
    },
  },
};
</script>