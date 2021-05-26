import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_USER = 'http://localhost:8085/user/'

export default {
    getAllCommunicationPreferences() {
        let id = JSON.parse(cookieFunctions.getCookie("user_info")).id;
        return axios.get(RESOURCE_PATH_USER + "communicationpreferences?userId=" + id).then((result) => {
            console.log(result);
            return result.data;
        });
    },
    deleteCommunicationPreference(id) {
        return axios.delete(RESOURCE_PATH_USER + "communicationpreference?communicationPreferenceId=" + id, cookieFunctions.getAuthHeader);
    },
    updateCommunicationPreference(comPref) {
        const body = {
            communicationPreferenceId: comPref.id,
            isActive: comPref.active,
            isDefault: comPref.defaultt,
            isUrgent: comPref.urgent
        }
        return axios.put(RESOURCE_PATH_USER + "communicationpreference", body, { headers: { 'Authorization': 'Bearer ' + cookieFunctions.readCookie('access_token') } });
    },
    createCommunicationPreference(comPref) {
        return axios.post(RESOURCE_PATH_USER + 'communicationpreference', comPref, cookieFunctions.getAuthHeaderJSON);
    }

}