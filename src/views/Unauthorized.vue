<template>
  <q-page>
    <h2 class="row justify-center">You do not have access to this page</h2>
    <p class="row justify-center">
      Please login with an account with the proper credentials or contact an
      administrator
    </p>
    <div class="row justify-center">
      <q-btn color="primary" @click="redirect('/login')">LOGIN</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
      redirect(location){
          this.$router.push({ path: location});
      }
  },
};
</script>