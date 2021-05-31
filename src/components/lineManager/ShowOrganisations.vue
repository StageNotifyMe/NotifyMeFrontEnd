<template>
  <div>
    <q-table
      :title="title"
      :data="organisations"
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
  name: "ShowOrganisations",
  props: {
    title: {
      type: String,
      required: false,
    },
    organisations: {
      type: Array,
      required: true,
    },
  },
  methods: {
    emitSelected() {
      this.$emit("selectedOrganisation", this.selected[0]);
    },
  },
  data() {
    return {
      lines: [],
      columns: [
        {
          name: "id",
          field: "id",
          label: "ID",
          align: "left",
          sortable: true,
        },
        {
          name: "name",
          field: "name",
          label: "Name",
          align: "left",
          sortable: true,
        },
      ],
      selected: [],
    };
  },

  created() {
  },
};
</script>