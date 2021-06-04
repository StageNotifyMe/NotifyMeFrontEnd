<template>
  <q-breadcrumbs class="text-purple-4 q-ml-sm q-mt-sm">
    <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="purple-4"
        />
      </template>
    <q-breadcrumbs-el
      v-for="n in locations.length"
      v-bind:key="n"
      :label="locations[n - 1]"
      style="font-weight: 550;"
    />
  </q-breadcrumbs>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    locations: {
      type: Array,
    },
    data() {},
  },
};
</script>