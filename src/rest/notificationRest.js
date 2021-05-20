import cookieFunctions from '../javascript/cookieFunctions.js'
import axios from 'axios'
//const qs = require('querystring')

const RESOURCE_PATH = 'http://localhost:8085/user/'

export default {
    getNotifications(){
        return axios.get(RESOURCE_PATH+"notifications",this.getAuthHeader())
    },
    getAuthHeader(){
        return {headers:{
            "Authorization": "Bearer "+ cookieFunctions.readCookie("access_token")
        }}
    }
}