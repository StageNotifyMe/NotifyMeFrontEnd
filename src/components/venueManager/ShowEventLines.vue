<template>
  <div>
    <q-table
      title="Lines"
      :data="lines"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      @update:selected="emitSelected()"
    />
  </div>
</template>
<script>
import lineRest from "../../rest/lineRest";
export default {
  name: "ShowLines",
  props: {
    eventId: {
      type: Number,
      required: true,
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
    getLines() {
      this.lines = [];
      lineRest.getAllLinesForEvent(this.eventId).then((result) => {
        for (let line of result.data) {
          this.lines.push(line);
        }
      });
    },
    emitSelected() {
      this.$emit("selectedLine", this.selected[0]);
    },
    refreshMethod(value) {
      if (value == true) {
        this.getLines();
        this.$emit("refreshed");
      }
    },
  },
  data() {
    return {
      userId: "",
      lines: [],
      columns: [
        {
          name: "facility",
          field: "facilityDescription",
          label: "Facility",
          align: "left",
          sortable: true,
        },
        {
          name: "note",
          field: "note",
          label: "Note",
          align: "left",
          sortable: true,
        },
        {
          name: "requiredStaff",
          field: "requiredStaff",
          label: "Required staff",
          align: "left",
          sortable: true,
        },
      ],
      selected: [],
    };
  },

  created() {
    this.getLines();
  },
};
</script>