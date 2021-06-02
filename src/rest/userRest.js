import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'
const RESOURCE_PATH_USER = 'http://localhost:8085/user/'

export default {
    getUsers() {
        return axios.get(RESOURCE_PATH_ADMIN + "users", this.getAuthHeader())
    },
    getAuthHeader() {
        return {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token")
            }
        }
    },
    getAccountInfo() {
        var username = JSON.parse(cookieFunctions.getCookie("user_info")).username
        return axios.get(RESOURCE_PATH_USER + "account?username=" + username, cookieFunctions.getAuthHeaderJSON());
    },
    putAccountInfo(body) {
        return axios.put(RESOURCE_PATH_USER + "account", body, cookieFunctions.getAuthHeaderJSON());
    }
}