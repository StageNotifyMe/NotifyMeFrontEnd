<template>
  <q-page>
        <h3>Currently using app as: Regular user/member</h3>
    <h2>Organisations</h2>
    <ApplyToOrganisation />
    <ApplicationList/>
  </q-page>
</template>

<script>
import ApplyToOrganisation from "../../components/user/ApplyToOrganisation"
import ApplicationList from "../../components/user/ApplicationList"

export default {
components:{
    ApplyToOrganisation,
    ApplicationList
},
}
</script>
<style>

</style>