import axios from 'axios'
//const qs = require('querystring')

const RESOURCE_PATH = 'http://localhost:8085/user/'

export default {
    getToken(username, password) {
        return axios.get(RESOURCE_PATH + "token?username=" + username + "&password=" + password)
    },
    register(registration) {
        return axios.post(RESOURCE_PATH + "register", registration)
    },
    getUserInfo(username, accessToken) {
        return axios.get(RESOURCE_PATH + "userInfo?username=" + username, {
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type": "application/json"
            }
        })
    }
}