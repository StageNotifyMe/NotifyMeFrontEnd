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
    refresh: {
      type: Boolean,
      required: false,
    },
  },
  watch: {
    refresh: function (newValue) {
      this.refreshMethod(newValue);
    },
  },
  methods: {
    refreshMethod(value) {
      if (value == true) {
        this.getcomPrefs();
        this.$emit("refreshed");
      }
    },
    getcomPrefs() {
      comPrefRest.getAllCommunicationPreferences().then((result) => {
        this.comPrefs = result;
      });
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
        {
          name: "urgent",
          field: "urgent",
          label: "Urgent",
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