import axios from "axios";
import store from '../store.js'

const baseUrl = "https://loan-history.herokuapp.com/"

const token = store.getters.isLoggedIn

export default {
    // Login
    async login(credentials) {
        return axios.post(baseUrl + 'auth/login', credentials)
            .then(response => response.data)
    },


    // SUPER ADMIN ENDPOINTS

    // 1. Add Admins
    async addAdmin(adminDetails) {

        return axios.post(baseUrl + 'auth/add', adminDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.data)
    },

    // 2. View All Loans
    async viewAllLoans() {
        return axios.get(baseUrl + 'project/all-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },

    // 3. View All Active Loans
    async viewAllActiveLoans() {
        return axios.get(baseUrl + 'project/all-active-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.active_loan)
    },
    // 4. View All Settled Loans
    async viewAllSettledLoans() {
        return axios.get(baseUrl + 'project/all-settled-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.settled_loan)
    },

    // 5. SUPER ADMIN ANALYTICS
    async superadminAnalytics() {
        return axios.get(baseUrl + 'project/super-analytics', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.analytics)
    },


    // SUPER ADMIN ENDPOINTS END



    // AGENT ADMIN ENDPOINTS STARTS HERE

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
    async getMyLoans() {
        return axios.get(baseUrl + 'project/my-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.loans)
    },

    // ADMIN DASHBOARD ANALYTICS
    async adminAnalytics() {
        return axios.get(baseUrl + 'project/admin-analytics', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.analytics)
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