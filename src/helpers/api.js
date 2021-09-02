import axios from "axios";

const baseUrl = "https://loan-history.herokuapp.com/"

export default {
    async login(credentials) {
        return axios.post(baseUrl + 'auth/login', credentials)
            .then(response => response.data)
    },
    async addAdmin(adminDetails) {
        const tokenStr = this.$store.getters.isLoggedIn;
        return axios.post(baseUrl + 'auth/add', { headers: { "Authorization": `Bearer ${tokenStr}` } }, adminDetails)
            .then(response => response.data)
    }
}