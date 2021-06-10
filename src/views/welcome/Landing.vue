<template>
  <q-page>
    <div class="row justify-center q-ma-md">
      <div class="text-h3">Welcome!</div>
    </div>
    <div class="row justify-center q-ma-md">
        <div class="text-h4">
            From here you can navigate to all role-specific landing pages.
        </div>
    </div>

    <div class="row justify-center nav-card-container">
      <div class="column col-2 q-ma-md nav-card" v-if="hasRole('user')">
        <q-card dark bordered class="bg-secondary text-center nav-card">
          <q-card-section class="nav-card-title nav-card-title">
            <div class="row justify-center">
              <q-icon name="person_outline" size="xl" />
            </div>
            <div class="row justify-center">
              <div class="text-h5">User</div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="nav-card-arrow">
            <div class="row justify-center">
              <q-btn
                color="deep-purple-5"
                text-color="white"
                rounded
                @click="redirectTo('/user')"
                icon="arrow_forward"
                unelevated
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-2 q-ma-md" v-if="hasRole('admin')">
        <q-card dark bordered class="bg-secondary text-center nav-card">
          <q-card-section class="nav-card-title">
            <div class="row justify-center">
              <q-icon name="local_police" size="xl" />
            </div>
            <div class="row justify-center">
              <div class="text-h5">Admin</div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <div class="row justify-center">
              <q-btn
                color="deep-purple-5"
                text-color="white"
                rounded
                @click="redirectTo('/admin')"
                icon="arrow_forward"
                unelevated
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-2 q-ma-md" v-if="hasRole('organisation_manager')">
        <q-card dark bordered class="bg-secondary text-center nav-card">
          <q-card-section class="nav-card-title">
            <div class="row justify-center">
              <q-icon name="group" size="xl" />
            </div>
            <div class="row justify-center">
              <div class="text-h6">Organisation manager</div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <div class="row justify-center">
              <q-btn
                color="deep-purple-5"
                text-color="white"
                rounded
                @click="redirectTo('/omanager')"
                icon="arrow_forward"
                unelevated
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-2 q-ma-md nav-card" v-if="hasRole('venue_manager')">
        <q-card dark bordered class="bg-secondary text-center nav-card">
          <q-card-section class="nav-card-title nav-card-title">
            <div class="row justify-center">
              <q-icon name="apartment" size="xl" />
            </div>
            <div class="row justify-center nav-card-title-icon">
              <div class="text-h5">Venue manager</div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section class="nav-card-arrow">
            <div class="row justify-center">
              <q-btn
                color="deep-purple-5"
                text-color="white"
                rounded
                @click="redirectTo('/vmanager')"
                icon="arrow_forward"
                unelevated
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="column col-2 q-ma-md" v-if="hasRole('line_manager')">
        <q-card dark bordered class="bg-secondary text-center nav-card">
          <q-card-section class="nav-card-title">
            <div class="row justify-center">
              <q-icon name="view_list" size="xl" />
            </div>
            <div class="row justify-center">
              <div class="text-h5">Line manager</div>
            </div>
          </q-card-section>
          <q-separator dark inset />
          <q-card-section>
            <div class="row justify-center">
              <q-btn
                color="deep-purple-5"
                text-color="white"
                rounded
                @click="redirectTo('/lmanager')"
                icon="arrow_forward"
                unelevated
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.nav-card{
  height: 100%;
}
.nav-card-title{
  height: 60%;
}
.nav-card-arrow{
  height: 20%;
}
.nav-card-container{
  height: 14rem;
}
</style>

<script>
import cookieFun from "../../javascript/cookieFunctions";

export default {
  name: "Landing",
  methods: {
    hasRole(role) {
      return cookieFun.hasRole(role);
    },
    redirectTo(location) {
      this.$router.push({ path: location });
    },
  },
};
</script>