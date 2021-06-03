import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'
const RESOURCE_PATH_USER = 'http://localhost:8085/user/'
const RESOURCE_PATH_ORGMGR = 'http://localhost:8085/omanager/'


export default {
    createOrganisation(name) {
        console.log(cookieFunctions.readCookie("access_token"))
        return axios.post(RESOURCE_PATH_ADMIN + "organisation?name="+name,null,this.getAuthHeader())
    },
    getOrganisations(){
        return axios.get(RESOURCE_PATH_ADMIN+"organisations",this.getAuthHeader())
    },
    getOrganisation(id){
        return axios.get(RESOURCE_PATH_ADMIN+"organisation?id="+id,this.getAuthHeader())
    },
    getOrganisationOrgManager(id){
        return axios.get(RESOURCE_PATH_ORGMGR+"organisation?organisationId="+id,this.getAuthHeader())
    },
    getOrganisationsLimitedInfo(){
        return axios.get(RESOURCE_PATH_USER+"organisations",this.getAuthHeader())
    },
    getOrganisationsOrgManager(){
        return axios.get(RESOURCE_PATH_ORGMGR+"organisations",this.getAuthHeader())
    },
    applyToOrganisation(id){
        return axios.post(RESOURCE_PATH_USER+"orgApplication?organisationId="+id,null,this.getAuthHeader())
    },
    respondToUserApplication(response){
        return axios.post(RESOURCE_PATH_ORGMGR+"userApplication",response,this.getAuthHeader())
    },
    respondToTeamApplication(application,accept){
        return axios.post(RESOURCE_PATH_ORGMGR+"teamApplication?accept="+accept,application,this.getAuthHeader())
    },
    getOrganisationApplications(){
        return axios.get(RESOURCE_PATH_USER+"orgApplications",this.getAuthHeader())
    },
    getUserApplications(orgId){
        return axios.get(RESOURCE_PATH_ORGMGR+"userApplications?organisationId="+orgId,this.getAuthHeader())
    },
    getTeamApplications(){
        return axios.get(RESOURCE_PATH_ORGMGR+"teamApplications",this.getAuthHeader())
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