import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://localhost:8085/admin/'

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
}