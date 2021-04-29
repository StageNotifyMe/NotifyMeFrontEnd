import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'

export default {
    createOrganisation(name) {
        console.log(cookieFunctions.readCookie("access_token"))
        return axios.post(RESOURCE_PATH_ADMIN + "organisation?name="+name,null,{headers:{
            "Authorization": "Bearer "+ cookieFunctions.readCookie("access_token")
        }})
    },
}