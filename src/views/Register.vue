<template>
  <q-page
    class="row justify-center items-center"
  >
    <div class="column">
      <div class="row">
        <h5 class="text-h5 q-my-md">NotifyMe</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input
                square
                filled
                clearable
                v-model="firstname"
                type="text"
                label="first name"
              />
              <q-input
                square
                filled
                clearable
                v-model="lastname"
                type="text"
                label="last name"
              />
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                square
                filled
                clearable
                v-model="username"
                type="text"
                label="username"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn
              unelevated
              color="light-green-7"
              size="lg"
              class="full-width"
              label="Login"
              @click="register()"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
.q-card {
  width: 400 em;
}
</style>

<script>
import authRest from '../rest/authorizationRest'

export default {
  name: 'Login',
  data () {
    return{
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: ''
    }
  },
  methods:{
    register(){
     const registration={
       "username":this.username,
       "firstname":this.firstname,
       "lastname":this.lastname,
       "email":this.email,
       "password":this.password
     }
     authRest.register(registration).then(()=>{
       console.log("Successfully registered");
     }).catch(err=>console.log(err))
    }
    }
}
</script>