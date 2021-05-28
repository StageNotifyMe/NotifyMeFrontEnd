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
  },
  methods: {
    getEvents() {
      return eventRest.getAllEventsForLineManager(this.userId);
    },
    emitSelected() {
        console.log(this.selected[0])
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
          field: "dateTime",
          label: "Date and time",
          align: "left",
          sortable: true,
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
    eventRest.getAllEventsForLineManager(this.userId).then((result) => {
      /*for (let event of result.data) {
        this.events.push(event);
      }*/
      this.events = result.data;
      console.log(this.events);
    });
  },
};
</script>