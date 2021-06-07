import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_ADMIN = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/admin/'
const RESOURCE_PATH_VMANAGER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/vmanager/'
const RESOURCE_PATH_USER = 'http://groupbavomain-app-env.eba-hf2p3xzd.eu-west-1.elasticbeanstalk.com/user/'

export default {
    getUsers() {
        return axios.get(RESOURCE_PATH_ADMIN + "users", this.getAuthHeader())
    },
    getAuthHeader(){
        return {headers:{
            "Authorization": "Bearer "+ cookieFunctions.readCookie("access_token")
        }}
    },
    getUsersAsVmanager(){
        return axios.get(RESOURCE_PATH_VMANAGER + "users", {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })},
    getAccountInfo() {
        var username = JSON.parse(cookieFunctions.getCookie("user_info")).username
        return axios.get(RESOURCE_PATH_USER + "account?username=" + username, cookieFunctions.getAuthHeaderJSON());
    },
    getTeamsForUser(){
        return axios.get(RESOURCE_PATH_USER + "teams", {
            headers: {
                "Authorization": "Bearer " + cookieFunctions.readCookie("access_token"),
                "Content-Type": "application/json"
            }
        })
    },
    putAccountInfo(body) {
        return axios.put(RESOURCE_PATH_USER + "account", body, cookieFunctions.getAuthHeaderJSON());
    },
    deleteUserFromTeam(teamId){
        return axios.delete(RESOURCE_PATH_USER + "team?teamId="+teamId, cookieFunctions.getAuthHeaderJSON());
    }
}