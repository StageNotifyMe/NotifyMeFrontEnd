import axios from 'axios'
//const qs = require('querystring')

const RESOURCE_PATH = 'http://localhost:8085/user/'

export default {
    getToken(username, password) {
        return axios.get(RESOURCE_PATH+"getToken?username="+username+"&password="+password)
    },
    register(registration){
        return axios.post(RESOURCE_PATH+"register",registration)
    }
}