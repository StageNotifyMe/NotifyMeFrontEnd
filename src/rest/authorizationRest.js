import axios from 'axios'
const qs = require('querystring')

const RESOURCE_PATH = 'http://localhost:9090/auth/realms/Notifyme-Realm/protocol/openid-connect/token'
const CLIENT_SECRET = '12be158b-eaad-4b70-97fe-5324bb001655'
const CLIENT_ID = 'notifyme'

export default {
    getToken(username, password) {
        return axios.post(RESOURCE_PATH, qs.stringify({
            grant_type: 'password',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            username: username,
            password: password
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*'
            },
        });
    }
}