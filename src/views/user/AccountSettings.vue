<template>
  <q-page>
    <q-card class="q-ma-md">
      <q-card-section class="q-pt-s">
        <div class="row justify-center">
          <div class="text-h3">Account info</div>
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-ma-md">
        <div class="row justify-center">
          <div class="column col-6">
            <div class="row justify-center">
              <div class="column col-8">
                <q-input
                  outlined
                  readonly
                  v-model="userInfo.userId"
                  label="ID"
                />
              </div>
            </div>
            <div class="row justify-center">
              <div class="column col-8">
                <q-input
                  outlined
                  readonly
                  v-model="userInfo.username"
                  label="Username"
                />
              </div>
            </div>
            <div class="row justify-center">
              <div class="column col-8">
                <div class="text">
                  <q-input
                    outlined
                    v-model="firstName"
                    type="text"
                    label="First name"
                  />
                </div>
              </div>
            </div>
            <div class="row justify-center">
              <div class="column col-8">
                <div class="text">
                  <q-input
                    outlined
                    v-model="lastName"
                    type="text"
                    label="Last name"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- SECOND COLUMN -->

          <div class="column col-6">
            <div class="row justify-center">
              <div class="column col-8">
                <div class="text">
                  <q-input outlined v-model="email" type="email" label="Email">
                    <template v-slot:append>
                      <q-icon
                        name="report_problem"
                        color="orange"
                        v-if="userInfo.email == ''"
                      />
                      <q-icon
                        name="check"
                        color="green"
                        v-else-if="userInfo.email"
                      />
                      <q-icon name="cancel" color="red" v-else />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div class="row justify-center">
              <div class="column col-8">
                <div class="text">
                  <q-input
                    outlined
                    v-model="phoneNumber"
                    type="tel"
                    label="Phone number"
                  >
                    <template v-slot:append>
                      <q-icon
                        name="report_problem"
                        color="orange"
                        v-if="userInfo.phoneNumber == ''"
                      />
                      <q-icon
                        name="check"
                        color="green"
                        v-else-if="userInfo.emailVerified"
                      />
                      <q-icon name="cancel" color="red" v-else />
                    </template>
                  </q-input>
                </div>
              </div>
            </div>
            <div class="row justify-center">
              <div class="column col-8">
                <div class="text">
                  <q-select
                    outlined
                    v-model="preferedLanguage"
                    :options="availableLanguages"
                    label="Prefered language"
                    class="fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-center">
          <q-btn
            unelevated
            color="primary"
            label="Save changes"
            @click="saveChanges()"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
import userRest from "../../rest/userRest";
export default {
  name: "AccountSettings",
  data() {
    return {
      userInfo: null,

      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      preferedLanguage: "",
      availableLanguages: [],
    };
  },
  methods: {
    getAccountInfo() {
      userRest
        .getAccountInfo()
        .then((result) => {
          this.userInfo = result.data;
          this.firstName = result.data.firstName;
          this.lastName = result.data.lastName;
          this.email = result.data.email;
          this.phoneNumber = result.data.phoneNumber;
          this.preferedLanguage = result.data.preferedLanguage;
          this.availableLanguages = result.data.availableLanguages;
        })
        .catch((error) => {
          console.log(error);
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },

    saveChanges() {
      const body = {
        userId: this.userInfo.userId,
        username: this.userInfo.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        preferedLanguage: this.preferedLanguage,
      };
      userRest
        .putAccountInfo(body)
        .then(() => {
          this.notifyOfVerification();
          this.getAccountInfo();
          this.notifySuccess();
        })
        .catch((error) => {
          console.log(error);
          this.$q.notify({
            message: error.response.data,
            color: "red",
            icon: "error",
            actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
          });
        });
    },
    notifyOfVerification() {
      if (this.userInfo.email != this.email) {
        this.$q.notify({
          message:
            "Your email was changed, some functions are temporarily blocked until you verified your new email.",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
      if (this.userInfo.phoneNumber != this.phoneNumber) {
        this.$q.notify({
          message:
            "Your phone number was changed, verify it to continue using it.",
          color: "orange",
          icon: "warning",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
      }
    },
    notifySuccess(){
        this.$q.notify({
          message:
            "Account information updatedSuccessfully",
          color: "green",
          icon: "info",
          actions: [{ label: "Dismiss", color: "white", handler: () => {} }],
        });
    },
  },
  beforeMount() {
    this.getAccountInfo();
  },
  components: {},
};
</script>