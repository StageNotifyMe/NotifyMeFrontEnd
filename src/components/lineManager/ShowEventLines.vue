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
  },
  methods: {
    getVenues() {
      return lineRest.getAllLinesForEventLineManager(this.eventId);
    },
    emitSelected() {
      this.$emit("selectedLine", this.selected[0]);
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
    lineRest.getAllLinesForEventLineManager(this.eventId).then((result) => {
      for (let line of result.data) {
        this.lines.push(line);
      }
    });
  },
};
</script>