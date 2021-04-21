<template>
    <q-page class="flex flex-center">
    <img alt="Quasar logo" src="../assets/logo.png">
    <q-btn color="secondary" label="TEST LOGIN" @click="redirectToAuth()"/>
  </q-page>
</template>

<script>
import authRest from '../rest/authorizationRest'

export default {
  name: 'Home',

  methods:{
    redirectToAuth(){
      authRest.getToken('janssensj','jan123')
      .then(result=>{
        console.log(result.data.access_token)
      })
    }
  }
}
</script>