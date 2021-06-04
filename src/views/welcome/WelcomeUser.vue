<template>
  <q-page>
    <div class="row justify-center">
      <h2>User - Home</h2>
    </div>
<<<<<<< HEAD
    <div class="row justify-center">
      <p>user has user role: {{ hasRole("user") }}</p>
    </div>
    <div class="row justify-center">
      <p>user has admin role: {{ hasRole("admin") }}</p>
    </div>
    <div class="row justify-center">
      <p>user has venue_manager role: {{ hasRole("venue_manager") }}</p>
    </div>
    <div class="row justify-center">
      <p>user has line_manager role: {{ hasRole("line_manager") }}</p>
    </div>
    <div class="row justify-center">
      <p>
        user has organisation_manager role:
        {{ hasRole("organisation_manager") }}
      </p>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirectToManage('organisations')"
        icon-right="groups"
        label="Manage organisations"
      ></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirectToManage('communicationPreferences')"
        icon-right="notifications"
        label="Notification settings"
      ></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirect('availableLines')"
        icon-right="groups"
        label="Teams"
      ></q-btn>
    </div>
    <div class="row justify-center q-my-md">
      <q-btn
        color="secondary"
        @click="redirectTo('/user/settings')"
        icon-right="account_circle"
        label="Account settings"
      ></q-btn>
=======

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
>>>>>>> 5d8eb4496bf8c46377624146e81f3ee4356c5c14
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