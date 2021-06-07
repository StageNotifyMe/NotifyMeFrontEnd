import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_VMANAGER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/vmanager/'
const RESOURCE_PATH_LMANAGER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/lmanager/'
const RESOURCE_PATH_USER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/user/'


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
        return axios.get(RESOURCE_PATH_LMANAGER + "lines?eventId=" + eventId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getAllLinesForEventLineManager(eventId) {
        return axios.get(RESOURCE_PATH_LMANAGER + "lines?eventId=" + eventId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getAvailableLines(){
        return axios.get(RESOURCE_PATH_USER + "lines", {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getTeamApplications(){
        return axios.get(RESOURCE_PATH_USER + "teamApplications", {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    sendTeamApplication(teamId){
        return axios.post(RESOURCE_PATH_USER + "teamApplication?teamId="+teamId, null, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    }
}