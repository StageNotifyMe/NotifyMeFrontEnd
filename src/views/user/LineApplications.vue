<template>
  <q-page>
        <h3>Currently using app as: Regular user/member</h3>
    <h2>Available Lines</h2>
    <AvailableLines />
  </q-page>
</template>

<script>
import AvailableLines from "../../components/user/AvailableLines"

export default {
components:{
    AvailableLines
},
}
</script>
<style>

</style>