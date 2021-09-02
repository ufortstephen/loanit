import axios from "axios";
import store from '@/store.js'

let token = store.getters.isLoggedIn

const baseUrl = "https://loan-history.herokuapp.com/"


export default {
    async login(credentials) {
        return axios.post(baseUrl + 'auth/login', credentials)
            .then(response => response.data)
    },
    async addAdmin(adminDetails) {

        return axios.post(baseUrl + 'auth/add', adminDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.data)
    },
    async viewAdmins() {
        return axios.get(baseUrl + 'auth/list', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.users)
    },
    async addLoan(loanDetails) {
        return axios.post(baseUrl + 'project/loan', loanDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },
    async addLoan(loanDetails) {
        return axios.post(baseUrl + 'project/loan', loanDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    }
}