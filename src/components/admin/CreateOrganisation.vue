<template>
  <div class="createOrgForm">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="New organization name"
          hint="Organization name."
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        ></q-input>

        <div>
          <q-btn label="Submit" type="submit" color="primary"></q-btn>
        </div>
      </q-form>
    </div>
    <template>
      <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="seamless" seamless position="right">
          <q-card style="width: 350px">
            <q-card-section class="row items-center no-wrap">
              <div class="row">
                <q-icon
                  name="warning"
                  class="text-red column q-pr-md"
                  style="font-size: 3rem"
                />
                <div class="column">
                  <div class="text-weight-bold">Error</div>
                  <div class="text-grey">{{ errorText }}</div>
                </div>
              </div>
              <q-space />
              <q-btn flat round icon="close" v-close-popup />
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </template>
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
export default {
  name: "CreateOrganisation",
  data() {
    return {
      name: "",
      seamless: false,
      errorText: "",
    };
  },
  methods: {
    sendRefresh() {
      this.$emit("sendRefresh");
    },
    onSubmit() {
      organisationRest
        .createOrganisation(this.name)
        .then(() => {
          this.sendRefresh();
        })
        .catch((err) => {
          console.log(err);
          this.errorText = err.response.data;
          this.seamless = true;
        });
    },
  },
};
</script>