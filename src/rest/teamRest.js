import axios from 'axios'
import cookieFunctions from '../javascript/cookieFunctions.js'

const RESOURCE_PATH_LMANAGER = 'http://localhost:8085/lmanager/'

export default {
    getTeam(teamId) {
        return axios.get(RESOURCE_PATH_LMANAGER + "team?teamId=" + teamId, cookieFunctions.getAuthHeaderJSON());
    },
    deleteTeam(teamId) {
        return axios.delete(RESOURCE_PATH_LMANAGER + "team?teamId=" + teamId);
    },
    addOrgToTeam(teamId, orgId) {
        const body = {
            teamId: teamId,
            organisationId: orgId,
            userId: null,
        }
        return axios.put(RESOURCE_PATH_LMANAGER + "team", body, cookieFunctions.getAuthHeaderJSON());
    },
    addUserToTeam(teamId, userId) {
        const body = {
            teamId: teamId,
            userId: userId,
            organisationId: null,
        }
        return axios.put(RESOURCE_PATH_LMANAGER + "team", body, cookieFunctions.getAuthHeaderJSON());
    },
    createTeam(lineId, orgId) {
        const body = {
            lineId: lineId,
            organisationId: orgId,
        }
        return axios.post(RESOURCE_PATH_LMANAGER + "team", body, cookieFunctions.getAuthHeaderJSON());
    },
    getAvailableOrganisations(teamId) {
        return axios.get(RESOURCE_PATH_LMANAGER + "team/organisations/available?teamId=" + teamId, cookieFunctions.getAuthHeaderJSON());
    },
    getTeamIdFromLineId(lineId) {
        return axios.get(RESOURCE_PATH_LMANAGER + "line/team?lineId=" + lineId, cookieFunctions.getAuthHeaderJSON());
    },
    deleteOrganisationFromTeam(teamId, orgId) {
        return axios.delete(RESOURCE_PATH_LMANAGER + "team/organisation?teamId=" + teamId + "&organisationId=" + orgId, cookieFunctions.getAuthHeaderJSON());
    }
}