import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_VMANAGER = 'http://localhost:8085/vmanager/'

export default {
    createLine(lineJSON) {
        return axios.post(RESOURCE_PATH_VMANAGER + "line", lineJSON, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getAllLinesForEvent(eventId) {
        return axios.get(RESOURCE_PATH_VMANAGER + "lines?eventId=" + eventId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
}