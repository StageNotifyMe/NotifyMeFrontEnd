import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'

export default {
    getUsers(){
        return axios.get(RESOURCE_PATH_ADMIN+"users",this.getAuthHeader())
    },
    getAuthHeader(){
        return {headers:{
            "Authorization": "Bearer "+ cookieFunctions.readCookie("access_token")
        }}
    }
}