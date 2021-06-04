<template>
  <q-page>
<BreadCrumbs :locations="['Organisation Manager','Manage','Organisations']"/>
<div class="row justify-center">
<div class="text-h3">Organisations</div>
</div>
    <Organisations class="q-ma-lg" />
  </q-page>
</template>

<script>
import Organisations from "../../components/organisationManager/Organisations"
import BreadCrumbs from "../../components/BreadCrumbs"
export default {
components:{
    Organisations,
    BreadCrumbs,
},
}
</script>
<style>

</style>