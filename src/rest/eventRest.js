import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_VMANAGER = 'http://localhost:8085/vmanager/'

export default {
    createEvent(eventObject) {
        return axios.post(RESOURCE_PATH_VMANAGER + "event", eventObject, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    }
}