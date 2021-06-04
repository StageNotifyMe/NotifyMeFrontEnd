<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          <span class="q-mt-sm">NotifyMe</span>
          <q-icon name="notifications" @click="notificationDialogue = true"  size="md" class="q-ml-sm"/>
        </q-toolbar-title>

        <div>
          {{ showUserName() }}
          <q-icon
            name="account_circle"
            @click="redirect('/user/settings')"
            class="q-ml-md"
            size="md"
          />
          <q-icon name="logout" @click="logOut()" class="q-ml-md" size="md" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Website navigation</q-item-label>
        <q-item clickable @click="redirect('login')" v-if="!isLoggedIn()">
          <q-item-section avatar>
            <q-icon name="account" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>Go to login screen</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="redirect('register')" v-if="!isLoggedIn()">
          <q-item-section avatar>
            <q-icon name="account" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
            <q-item-label caption>Go to registration screen</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          @click="redirect('/user/welcome')"
          v-if="isLoggedIn() && hasRole('user')"
        >
          <q-item-section avatar>
            <q-icon name="welcome" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Welcome: user</q-item-label>
            <q-item-label caption>User welcome screen</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          @click="redirect('/admin/welcome')"
          v-if="isLoggedIn() && hasRole('admin')"
        >
          <q-item-section avatar>
            <q-icon name="welcome" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Welcome: admin</q-item-label>
            <q-item-label caption>Admin welcome screen</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          @click="redirect('/omanager/welcome')"
          v-if="isLoggedIn() && hasRole('organisation_manager')"
        >
          <q-item-section avatar>
            <q-icon name="welcome" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Welcome: omanager</q-item-label>
            <q-item-label caption
              >Organisation manager welcome screen</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item
          clickable
          @click="redirect('/vmanager/welcome')"
          v-if="isLoggedIn() && hasRole('venue_manager')"
        >
          <q-item-section avatar>
            <q-icon name="welcome" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Welcome: vmanager</q-item-label>
            <q-item-label caption>Venue manager welcome screen</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          @click="redirect('/lmanager/welcome')"
          v-if="isLoggedIn() && hasRole('line_manager')"
        >
          <q-item-section avatar>
            <q-icon name="welcome" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Welcome: lmanager</q-item-label>
            <q-item-label caption>Line manager welcome screen</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-dialog v-if="isLoggedIn()" v-model="notificationDialogue">
        <notificationsOverview class="q-ma-lg"/>
      </q-dialog>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import cookieFun from "./javascript/cookieFunctions";
import notificationsOverview from "./components/notificationsOverview";
import cookieFunctions from "./javascript/cookieFunctions";

export default {
  name: "LayoutDefault",

  components: { notificationsOverview },
  methods: {
    redirect(location) {
      this.$router.push({ path: location });
    },
    showUserName() {
      let userInfo = cookieFun.getCookie("user_info");
      if (userInfo != "") {
        return "Hello there " + JSON.parse(userInfo).name + "!";
      }
      return "Not logged in";
    },

    isLoggedIn() {
      return cookieFun.isLoggedIn();
    },
    hasRole(role) {
      return cookieFun.hasRole(role);
    },

    logOut() {
      cookieFunctions.logOut();
      this.$router.push("/login");
    },
  },

  data() {
    return {
      leftDrawerOpen: false,
      notificationDialogue: false,
    };
  },
};
</script>

<style>
</style>
