import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_VMANAGER = 'http://localhost:8085/vmanager/'
const RESOURCE_PATH_LMANAGER = 'http://localhost:8085/lmanager/'

export default {
    createEvent(eventObject) {
        return axios.post(RESOURCE_PATH_VMANAGER + "event", eventObject, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getEvent(eventId) {
        return axios.get(RESOURCE_PATH_VMANAGER + "event?eventId=" + eventId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getAllEventsForLineManager(userId) {
        return axios.get(RESOURCE_PATH_LMANAGER + "events?userId=" + userId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    promoteToLManager(userId, eventId) {
        return axios.post(RESOURCE_PATH_VMANAGER + "promoteToLineManager?userId=" + userId + "&eventId=" + eventId, null, cookieFunctions.getAuthHeader());
    },
    getLineManagers(eventId) {
        return axios.get(RESOURCE_PATH_VMANAGER + "lineManagers?eventId=" + eventId, cookieFunctions.getAuthHeader());
    },
    cancelEvent(eventId) {
        const body = {
            eventId: eventId,
            eventStatus: "CANCELED",
        }
        return axios.put(RESOURCE_PATH_VMANAGER + "event/status", body, cookieFunctions.getAuthHeaderJSON());
    },
    activateEvent(eventId) {
        const body = {
            eventId: eventId,
            eventStatus: "OK",
        }
        return axios.put(RESOURCE_PATH_VMANAGER + "event/status", body, cookieFunctions.getAuthHeaderJSON());
    }
}