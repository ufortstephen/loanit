import axios from "axios";
import store from '@/store.js'

let token = store.getters.isLoggedIn

const baseUrl = "https://loan-history.herokuapp.com/"


export default {
    // Login
    async login(credentials) {
        return axios.post(baseUrl + 'auth/login', credentials)
            .then(response => response.data)
    },

    // Add Admins
    async addAdmin(adminDetails) {

        return axios.post(baseUrl + 'auth/add', adminDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.data)
    },

    // View Admins
    async viewAdmins() {
        return axios.get(baseUrl + 'auth/list-user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.admin)
    },

    // Add Loan
    async addLoan(loanDetails) {
        return axios.post(baseUrl + 'project/loan', loanDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Get My Loans Issued
    async getLoans() {
        return axios.get(baseUrl + 'project/my-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },

    // Get All Active Loans
    async getActiveLoans() {
        return axios.get(baseUrl + 'project/active', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.active)
    },

    // Due Loans
    async dueLoans() {
        return axios.get(baseUrl + 'project/due', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.due)
    },

    // Get Settled Loans
    async settledLoans() {
        return axios.get(baseUrl + 'project/settled', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.settled)
    },

    // List All Loans
    async listAllLoans() {
        return axios.get(baseUrl + 'project/list-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },

    // List Due Loans
    async listDueLoans() {
        return axios.get(baseUrl + 'project/due', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },

    // Changetatus of Loanee
    async changeStatus(userId) {
        return axios.post(baseUrl + 'project/change-status', userId, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // ChangePassword (SuperAdmin and Admin)
    async changePassword(passwords) {
        return axios.post(baseUrl + 'auth/change-password', passwords, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Make Daily Payment
    async makeDailyPayment(payment_details) {
        return axios.post(baseUrl + 'project/daily-payment', payment_details, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Make Part Payment
    async makePartPayment(payment_details) {
        return axios.post(baseUrl + 'project/part-payment', payment_details, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

}