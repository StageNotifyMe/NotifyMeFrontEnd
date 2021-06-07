import cookieFunctions from '../javascript/cookieFunctions.js'
import axios from 'axios'
//const qs = require('querystring')

const RESOURCE_PATH = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/user/'
const RESOURCE_PATH_LMANAGER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/lmanager/'
const RESOURCE_PATH_ADMIN = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/admin/'


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
    },
    getAllNotifications() {
        return axios.get(RESOURCE_PATH_ADMIN + "notifications", cookieFunctions.getAuthHeaderJSON());
    }
}