import cookieFunctions from '../javascript/cookieFunctions.js'
import axios from 'axios'
//const qs = require('querystring')

const RESOURCE_PATH = 'http://localhost:8085/user/'
const RESOURCE_PATH_LMANAGER = 'http://localhost:8085/lmanager/'


export default {
    getNotifications() {
        return axios.get(RESOURCE_PATH + "notifications", this.getAuthHeader())
    },
    getAuthHeader() {
        return {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token")
            }
        }
    },
    lmanagerNotifyOmanager(message) {
        return axios.post(RESOURCE_PATH_LMANAGER + "notify/organisation", message, cookieFunctions.getAuthHeaderJSON());
    }
}