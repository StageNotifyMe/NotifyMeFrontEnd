<template>
  <div>
    <q-table
      title="Preferences"
      :data="comPrefs"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      @update:selected="emitSelected()"
    />
  </div>
</template>
<script>
import comPrefRest from "../../rest/communicationPreferencesRest";
export default {
  name: "ShowComPrefs",
  props: {
    userId: {
      type: String,
      required: false,
    },
  },
  methods: {
    getcomPrefs() {
      return comPrefRest.getAllCommunicationPreferences();
    },
    emitSelected() {
      this.$emit("selectedComPref", this.selected[0]);
    },
  },
  data() {
    return {
      comPrefs: [],
      columns: [
        {
          name: "communicationStrategy",
          field: "communicationStrategy",
          label: "Communication strategy",
          align: "left",
          sortable: true,
        },
        {
          name: "active",
          field: "active",
          label: "Acitve",
          align: "left",
          sortable: true,
        },
        {
          name: "default",
          field: "defaultt",
          label: "Default",
          align: "left",
          sortable: true,
        },
      ],
      selected: [],
    };
  },

  created() {
    comPrefRest.getAllCommunicationPreferences().then((result) => {
      this.comPrefs = result;
    });
  },
};
</script>