import axios from 'axios'
//const qs = require('querystring')

const RESOURCE_PATH = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/user/'

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