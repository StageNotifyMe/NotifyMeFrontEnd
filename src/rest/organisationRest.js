import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'

export default {
    createOrganisation(name) {
        console.log(cookieFunctions.readCookie("access_token"))
        return axios.post(RESOURCE_PATH_ADMIN + "organisation?name="+name,null,this.getAuthHeader())
    },
    getOrganisations(){
        return axios.get(RESOURCE_PATH_ADMIN+"organisations",this.getAuthHeader())
    },
    promoteUserToOrgMgr(orgId,username){
        let promotion = {
            "username":username,
            "organisationId":orgId
        }
        console.log(promotion)
        return axios.post(RESOURCE_PATH_ADMIN+"promoteUserToOrgMgr",promotion,this.getAuthHeader())
    },
    getAuthHeader(){
        return {headers:{
            "Authorization": "Bearer "+ cookieFunctions.readCookie("access_token")
        }}
    }
}