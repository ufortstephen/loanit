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
        return axios.get(baseUrl + 'auth/list-user', {
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
    async getLoans() {
        return axios.get(baseUrl + 'project/my-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },
    async getActiveLoans() {
        return axios.get(baseUrl + 'project/active', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.active)
    },
    async dueLoans() {
        return axios.get(baseUrl + 'project/due', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.due)
    },
    async settledLoans() {
        return axios.get(baseUrl + 'project/settled', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.settled)
    },
    async listAllLoans() {
        return axios.get(baseUrl + 'project/list-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },
}