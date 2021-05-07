<template>
  <div v-if="users != null">
    <q-table
      :title="title"
      :data="users"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      @update:selected="emitSelected()"
    />
  </div>
</template>
<script>
export default {
  name: "ShowUsers",
  props: {
    users: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitSelected() {
      this.$emit("selectedUser", this.selected[0]);
    },
  },
  data() {
    return {
      userId: "",
      columns: [
        {
          name: "description",
          field: "description",
          label: "Description",
          align: "left",
          sortable: true,
        },
        {
          name: "location",
          field: "location",
          label: "Location",
          align: "left",
          sortable: true,
        },
        {
          name: "minimalStaff",
          field: "minimalStaff",
          label: "Minimal staff",
          align: "left",
          sortable: true,
        },
        {
          name: "maximalStaff",
          field: "maximalStaff",
          label: "Maximal staff",
          align: "left",
          sortable: true,
        },
      ],
      selected: [],
    };
  },

  created() {},
};
</script>