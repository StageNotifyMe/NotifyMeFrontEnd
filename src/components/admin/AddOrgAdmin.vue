<template>
  <div class="createOrgForm">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-select
          filled
          icon="person_search"
          v-model="username"
          label="Promote user to organization manager."
          hint="Username"
          lazy-rules
          use-input
          fill-input
          hide-selected
          :debounce="100"
          :options="this.options"
          @filter="filterFn"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        ></q-select>

        <div>
          <q-btn label="Submit" type="submit" color="primary"></q-btn>
        </div>
      </q-form>
    </div>
  </div>
</template>
<style scoped>
.createOrgForm {
  min-height: 20%;
  max-height: 20%;
}
</style>
<script>
import organisationRest from "../../rest/organisationRest";
import userRest from "../../rest/userRest";
export default {
  name: "CreateOrganisation",
  props: {
    id:{
      type: Number,
      required: true
    }
  },
  data() {
    return {
      username:"",
      options: new Array(),
      usernameCache: new Array()
    };
  },
  methods: {
    onSubmit() {
      console.log(this.username)
      console.log(this.id)
      organisationRest.promoteUserToOrgMgr(this.id,this.username).then((response) => {
        console.log(response);
      }).catch((err)=>{
        console.log(err)
        this.errorText = err.response.data;
          this.seamless = true;
      });
    },
    getUsers(){
        userRest.getUsers().then(response=>{
            console.log(response);
            let usernames=new Array();
            response.data.forEach(element => {
                usernames.push(element.username);
                this.usernameCache.push(element.username)
            });
            this.options=usernames;
            console.log(this.options);

        }).catch(err=>{
            console.log(err);
        })
    },
    filterFn (val, update) {
      update(() => {
        const needle = val.toLowerCase()
        this.options = this.usernameCache.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  },
  beforeMount(){
      this.getUsers();
  }
};
</script>