<template>
  <div>
    <q-table
      title="Events"
      :data="events"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      @update:selected="emitSelected()"
    />
  </div>
</template>
<script>
import eventRest from "../../rest/eventRest";
export default {
  name: "ShowLines",
  props: {
    userId: {
      type: String,
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
    refreshMethod(value) {
      if (value == true) {
        this.getEvents();
        this.$emit("refreshed");
      }
    },
    getEvents() {
      eventRest.getAllEventsForLineManager(this.userId).then((result) => {
        /*for (let event of result.data) {
        this.events.push(event);
      }*/
        this.events = result.data;
      });
    },
    emitSelected() {
      this.$emit("selectedEvent", this.selected[0]);
    },
  },
  data() {
    return {
      events: [],
      columns: [
        {
          name: "artist",
          field: "artist",
          label: "Artist",
          align: "left",
          sortable: true,
        },
        {
          name: "description",
          field: "description",
          label: "Description",
          align: "left",
          sortable: true,
        },
        {
          name: "title",
          field: "title",
          label: "Title",
          align: "left",
          sortable: true,
        },
        {
          name: "dateTime",
          label: "Date and time",
          field: (row) => {
            let date = new Date(row.dateTime);
            return (
              date.getDate() +
              "/" +
              date.getMonth() +
              "/" +
              date.getFullYear() +
              " " +
              date.getHours() +
              ":" +
              date.getMinutes()
            );
          },
        },
        {
          name: "status",
          field: "eventStatus",
          label: "Status",
          align: "left",
          sortable: true,
        },
      ],
      selected: [],
    };
  },

  created() {
    this.getEvents();
  },
};
</script>