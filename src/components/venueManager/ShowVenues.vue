<template>
  <div>
    <q-table
      title="Venues"
      :data="venues"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      @update:selected="emitSelected()"
    />
  </div>
</template>
<script>
import venRest from "../../rest/venueRest";
import cookieFun from "../../javascript/cookieFunctions";
export default {
  name: "ShowVenues",
  props: {
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
        this.getVenues();
        this.$emit("refreshed");
      }
    },
    getVenues() {
      this.venues = [];
      venRest.getAllVenues(this.userInfo.id).then((result) => {
        for (let venue of result.data) {
          this.venues.push(venue);
        }
      });
    },
    emitSelected() {
      this.$emit("selectedVenue", this.selected[0]);
    },
  },
  data() {
    return {
      userId: "",
      venues: [],
      columns: [
        {
          name: "name",
          field: "name",
          label: "Name",
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
          name: "street and number",
          field: "streetAndNumber",
          label: "Street and number",
          align: "left",
          sortable: true,
        },
        {
          name: "village",
          field: "village",
          label: "Village",
          align: "left",
          sortable: true,
        },
      ],
      selected: [],
    };
  },

  beforeMount() {
    this.userInfo = JSON.parse(cookieFun.getCookie("user_info"));
    venRest.getAllVenues(this.userInfo.id).then((result) => {
      for (let venue of result.data) {
        this.venues.push(venue);
      }
    });
  },
};
</script>