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

        return axios.post(baseUrl + 'user/add', adminDetails, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.data)
    },

    // 2. View All Loans
    async viewAllLoans() {
        return axios.get(baseUrl + 'loan/index', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
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

    // View Admins
    async viewAdmins() {
        return axios.get(baseUrl + 'user/index', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data.data.admin)
    },


    // SUPER ADMIN ENDPOINTS END



    // AGENT ADMIN ENDPOINTS STARTS HERE



    // Add User
    async addUser(loanDetails) {
        return axios.post(baseUrl + 'loanee/add', loanDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Approve User Loan
    async approveLoan(loanDetails) {
        return axios.post(baseUrl + 'loan/option', loanDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Add Loan
    async addLoan(loanDetails) {
        return axios.post(baseUrl + 'loan/add', loanDetails, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Get My Users
    async getUsers() {
        return axios.get(baseUrl + 'loanee/myloanee', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Get My Loans Issued
    async getMyLoans() {
        return axios.get(baseUrl + 'loan/my-loan', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Get Active Loans Issued
    async getActiveLoans() {
        return axios.get(baseUrl + 'loan/active', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },
    // Get Pending Loans Issued
    async getPendingLoans() {
        return axios.get(baseUrl + 'loan/pending', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },
    // Get Settled Loans Issued
    async getSettledLoans() {
        return axios.get(baseUrl + 'loan/settled', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
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
        return axios.get(baseUrl + 'loan/active', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
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
        return axios.get(baseUrl + 'loan/index', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
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
        return axios.post(baseUrl + 'loan/daily-payment', payment_details, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

    // Make Part Payment
    async makePartPayment(payment_details) {
        return axios.post(baseUrl + 'loan/part-payment', payment_details, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.data)
    },

}