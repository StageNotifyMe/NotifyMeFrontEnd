import axios from 'axios'
const qs = require('querystring')

const RESOURCE_PATH = 'http://localhost:9090/auth/realms/Notifyme-Realm/protocol/openid-connect/token'
const CLIENT_SECRET = '77b49c81-c56f-4975-8f52-1dd4e39f0cda'
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