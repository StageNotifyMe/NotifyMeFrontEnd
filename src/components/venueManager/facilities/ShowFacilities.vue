<template>
  <div>
    <q-table
      title="Facilities"
      :data="facilities"
      :columns="columns"
      row-key="id"
      selection="single"
      :selected.sync="selected"
      @update:selected="emitSelected()"
    />
  </div>
</template>
<script>
import facRest from "../../../rest/facilityRest";
export default {
  name: "ShowVenues",
  props:{
      venueId:{
          type: Number,
          required: true,
      }
  },
  methods: {
    getVenues() {
      return facRest.getAllFacilities(this.venue.id);
    },
    emitSelected() {
      this.$emit("selectedFacility", this.selected[0]);
    },
  },
  data() {
    return {
      userId: "",
      facilities: [],
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

  created() {
    facRest.getAllFacilities(this.venueId).then((result) => {
      for (let fac of result.data) {
        this.facilities.push(fac);
      }
    });
  },
};
</script>