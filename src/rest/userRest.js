import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'
const RESOURCE_PATH_VMANAGER = 'http://localhost:8085/vmanager/'

export default {
    getUsers(){
        return axios.get(RESOURCE_PATH_ADMIN+"users",this.getAuthHeader())
    },
    getAuthHeader(){
        return {headers:{
            "Authorization": "Bearer "+ cookieFunctions.readCookie("access_token")
        }}
    },
    getUsersAsVmanager(){
        return axios.get(RESOURCE_PATH_VMANAGER + "users", {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    }
}