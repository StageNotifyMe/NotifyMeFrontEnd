import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_USER = 'http://localhost:8085/user/'

export default {
    getAllCommunicationPreferences() {
        let id = JSON.parse(cookieFunctions.getCookie("user_info")).id;
        return axios.get(RESOURCE_PATH_USER + "communicationpreferences?userId=" + id).then((result) => {
            return result.data;
        });
    },
    deleteCommunicationPreference(id) {
        console.log(id);
        return console.error("DIT WERKT NIET, VETTE PECH");
        //return axios.delete(RESOURCE_PATH_USER + "communicationpreference?communicationPreferenceId=" + id, cookieFunctions.getAuthHeader);
    },
    updateCommunicationPreference(comPref) {
        const body = {
            communicationPreferenceId: comPref.id,
            isActive: comPref.active,
            isDefault: comPref.defaultt
        }

        const options = {
            method: 'put',
            url: RESOURCE_PATH_USER+'communicationpreference',
            data: body,
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+cookieFunctions.readCookie('access_token'),
                'Access-Control-Allow-Origin':'*'
            }
        }
        console.log(options);
        return axios(options);
        //return axios.put(RESOURCE_PATH_USER + "communicationpreference", body, cookieFunctions.getAuthHeaderJSON);
    },
    createCommunicationPreference(comPref){
        return axios.post(RESOURCE_PATH_USER+'communicationpreference',comPref,cookieFunctions.getAuthHeaderJSON);
    }

}