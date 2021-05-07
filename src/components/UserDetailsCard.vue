<template>
  <q-card v-if="user != null">
    <q-card-section>
      <div class="text-h6">Selected user details</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="row justify-left">
        <div class="column">
          <b>Username: </b>
        </div>
        <div class="column q-mx-xs">
          {{ user.username }}
        </div>
      </div>
      <div class="row justify-left">
        <div class="column">
          <b>Name: </b>
        </div>
        <div class="column q-mx-xs">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </div>
      <div class="row justify-left">
        <div class="column">
          <b>E-mail: </b>
        </div>
        <div class="column q-mx-xs">
          {{ user.email }}
        </div>
      </div>
      <div v-if="message != null">
        <q-separator inset />
        <q-card-section>
          {{ message }}
        </q-card-section>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "UserDetailsCard",
  props: {
    user: {
      type: Object,
      require: true,
    },
    message: {
      type: String,
      require: false,
    },
  },
};
</script>