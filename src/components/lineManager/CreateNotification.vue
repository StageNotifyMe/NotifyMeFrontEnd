<template>
  <q-dialog v-model="open" persistent>
    <q-card class="my-card">
      <q-card-section>
        <div class="row justify-center">
          <div class="text-h4">
            Send notification to {{ organisation.name }}
          </div>
        </div>
        <div class="row justify-center">
          <q-input v-model="title" label="Title" />
        </div>
        <div class="row justify-center">
          <q-input v-model="text" label="Text" type="textarea" />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row justify-center">
          <div class="column q-mx-md">
            <q-btn
              label="Cancel"
              color="red"
              icon="cancel"
              unelevated
              @click="resetAndClose()"
            />
          </div>
          <div class="column q-mx-md">
            <q-btn
              label="Send"
              color="primary"
              icon="send"
              unelevated
              @click="sendAndClose()"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import cookieFunctions from "../../javascript/cookieFunctions";
import notificationRest from "../../rest/notificationRest";
export default {
  name: "createNotification",
  props: {
    organisation: {
      type: Object,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      title: "",
      text: "",
    };
  },
  methods: {
    emitClose() {
      this.$emit("orgNotify", false);
    },
    resetAndClose() {
      this.title = "";
      this.text = "";
      this.emitClose();
    },
    sendAndClose() {
      const message = {
        senderId: JSON.parse(cookieFunctions.getCookie("user_info")).id,
        receivingOrgId: this.organisation.id,
        title: this.title,
        text: this.text,
      };
      notificationRest
        .lmanagerNotifyOmanager(message)
        .then(() => {
          this.resetAndClose();
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
  },
  components: {},
};
</script>