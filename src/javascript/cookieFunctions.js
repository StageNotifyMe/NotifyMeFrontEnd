import authRest from "../rest/authorizationRest"

export default {
    //gets the value of given cookie name (if cookie exists)
    //code from https://www.w3schools.com/js/js_cookies.asp
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

    //returns true if the user is logged in with a valid access-token
    isLoggedIn() {
        if (this.getCookie('access_token') != "") {
            return true;
        }
        return false

    },

    //checks whether a user possesses given role
    hasRole(role) {
        const roles = this.getRoles()
        if (roles.includes(role)) {
            return true
        }
        return false
    },

    //creates cookie containing basic user information used to display in front-end
    createUserInfoCookie(token, expires, accessToken) {
        const decoded = JSON.parse(atob(token.split(".")[1]));
        let userId;
        authRest.getUserInfo(decoded.preferred_username, accessToken)
            .then((result) => {
                userId = result.data.id;
                let userInfoCookie = {
                    name: decoded.name,
                    given_name: decoded.given_name,
                    family_name: decoded.family_name,
                    username: decoded.preferred_username,
                    id: userId
                };
                document.cookie =
                    "user_info=" +
                    JSON.stringify(userInfoCookie) +
                    ";" +
                    expires +
                    ";path=/";
            })
            .catch((error) => console.log(error))
    },

    readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    //connects to back-end and retrieves access-token
    authorize(username, password) {
        return authRest
            .getToken(username, password)
            .then((result) => {
                if (result.status == 200) {
                    let d = new Date();
                    d.setTime(d.getTime() + 1 * 1 * 60 * 60 * 1000);
                    let expires = "expires=" + d.toUTCString();
                    document.cookie =
                        "access_token=" +
                        result.data.access_token +
                        ";" +
                        expires +
                        ";path=/";
                    "username=" + result.data.username + ";" + expires + ";path=/";
                    this.createUserInfoCookie(result.data.access_token, expires, result.data.access_token);
                }
            })
            .then(() => {
                return true;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    //returns array of all roles the logged-in user possesses
    getRoles() {
        return JSON.parse(atob(this.getCookie('access_token').split(".")[1])).resource_access.notifyme.roles
    },
}