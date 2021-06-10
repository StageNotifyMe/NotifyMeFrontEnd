<template>
  <div class="column col-3 q-ma-md">
    <q-card dark bordered class="bg-secondary my-card">
      <q-card-section class="my-card-title">
        <div class="row">
          <div class="column col-2">
            <q-icon :name="icon" size="lg" class="q-my-auto" />
          </div>
          <div class="column col-9 q-mt-sm q-ml-md">
            <div class="text-h6">{{ title }}</div>
            <div class="text-subtitle2">
              {{ description }}
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator dark inset class="q-my-sm" />
      <q-card-section class="text-center">
        <q-btn
          color="deep-purple-5"
          text-color="white"
          @click="redirectTo()"
          :icon-right="buttonIcon"
          :label="buttonText"
          unelevated
        ></q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.my-card {
  height: 100%;
}
.my-card-title {
  height: 60%;
}
</style>

<script>
export default {
  name: "navCard",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
    redirectUrl: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    buttonIcon: {
      type: String,
    },
  },
  methods: {
    redirectTo() {
      this.$router.push(this.redirectUrl);
    },
  },
};
</script>