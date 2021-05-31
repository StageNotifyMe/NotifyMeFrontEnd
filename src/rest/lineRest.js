import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_VMANAGER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/vmanager/'

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