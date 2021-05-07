<template>
  <q-select
    filled
    icon="person_search"
    v-model="username"
    label="Select a user"
    hint="Username"
    lazy-rules
    use-input
    fill-input
    hide-selected
    :debounce="100"
    :options="options"
    @filter="filterFn"
    @input="emitSelectedUser()"
    :rules="[(val) => (val && val.length > 0) || 'Please type something']"
  ></q-select>
</template>
<script>
import userRest from "../../rest/userRest";
export default {
  name: "UserSelection",
  data() {
    return {
      username: "",
      users: [],
      usernameCache: [],
      options: [],
    };
  },
  methods: {
    findUser(user) {
      return this.username == user.username;
    },
    getSelectedUser() {
      return this.users.find(this.findUser);
    },
    emitSelectedUser() {
      this.$emit("selectedUser", this.getSelectedUser());
    },
    getUsers() {
      this.users = [];
      this.options = [];
      this.usernameCache = [];
      userRest
        .getUsers()
        .then((response) => {
          for (let user of response.data) {
            this.users.push(user);
            this.options.push(user.username);
          }
          this.usernameCache = this.options;
        })
        .catch((err) => {
          this.$q.notify({
            message: err,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    filterFn(val, update) {
      update(() => {
        const needle = val.toLowerCase();
        this.options = this.usernameCache.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
  },
  beforeMount() {
    this.getUsers();
  },
};
</script>