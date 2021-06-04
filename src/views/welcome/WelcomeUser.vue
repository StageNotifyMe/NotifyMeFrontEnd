<template>
  <q-page>
    <div class="row justify-center">
      <h2>User - Home</h2>
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
                  Here you can apply to join organisations and review your
                  current applications.
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
                <q-icon name="notifications" size="lg" />
              </div>
              <div class="column col-9">
                <div class="text-h6">Notifications</div>
                <div class="text-subtitle2">
                  Here you can manage your notification settings.
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              text-color="white"
              @click="redirectToManage('communicationPreferences')"
              icon-right="edit"
              label="Manage notifications"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="format_list_bulleted" size="lg" />
              </div>
              <div class="column col-9">
                <div class="text-h6">Available lines</div>
                <div class="text-subtitle2">
                  Here you can look at available and upcoming events and work
                  opportunities.
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              text-color="white"
              @click="redirect('availableLines')"
              icon-right="visibility"
              label="View available lines"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
      <div class="column col-3 q-ma-md">
        <q-card dark bordered class="bg-secondary my-card">
          <q-card-section class="my-card-title">
            <div class="row">
              <div class="column col-2">
                <q-icon name="account_circle" size="lg" />
              </div>
              <div class="column col-9">
                <div class="text-h6">Account settings</div>
                <div class="text-subtitle2">
                  Here you can update and review your account information.
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <q-btn
              color="deep-purple-5"
              text-color="white"
              @click="redirectTo('/user/settings')"
              icon-right="edit"
              label="Update account"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
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
};
</script>