import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'
const RESOURCE_PATH_VMANAGER = 'http://localhost:8085/vmanager/'

export default {
    creatVenue(name, description, streetAndNumber, postalCode, village, country) {
        const body = {
            name: name, description: description, streetAndNumber: streetAndNumber, postalCode: postalCode, village: village, country: country
        }
        return axios.post(RESOURCE_PATH_ADMIN + "venue",
            body, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getAllVenues(userId) {
        return axios.get(RESOURCE_PATH_VMANAGER + "venues?userId=" + userId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    getVenue(venueId) {
        return axios.get(RESOURCE_PATH_VMANAGER + "venue?venueId=" + venueId, {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    promoteToVmanager(userId, venueId) {
        return axios.post(RESOURCE_PATH_ADMIN + "promoteUserToVmanager?userId=" + userId + "&venueId=" + venueId, null, cookieFunctions.getAuthHeaderJSON())
    },
    getVenueManagers(venueId) {
        return axios.get(RESOURCE_PATH_ADMIN + "venueManagers?venueId=" + venueId, cookieFunctions.getAuthHeader())
    },
}