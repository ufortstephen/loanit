import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () =>
    import ('@/containers/TheContainer')

// Admin Containers
const AdminContainer = () =>
    import ('@/adminContainer/TheContainer')

// Views
const Dashboard = () =>
    import ('@/views/Dashboard')


// Views - Pages
const Page404 = () =>
    import ('@/views/pages/Page404')
const Page500 = () =>
    import ('@/views/pages/Page500')
const Login = () =>
    import ('@/views/pages/Login')
const Register = () =>
    import ('@/views/pages/Register')

// Users
const Users = () =>
    import ('@/views/users/Users')

// Users
const agentAdminUsers = () =>
    import ('@/adminContainer/adminComponent/users');


const User = () =>
    import ('@/views/users/User')

// Admins
const Admins = () =>
    import ('@/views/admins/admins')
const Admin = () =>
    import ('@/views/admins/admin')




// Loan Calculator
const Calculator = () =>
    import ('@/views/loan_calculator/loan_calculator')


// Due_Payments
const Due_Payments = () =>
    import ('@/views/due_payments/due_payments')

// Active Loans
const Active_Loans = () =>
    import ('@/views/active_loanees/active_loans')

// Settled Loans
const Settled_Loans = () =>
    import ('@/views/settled_loans/settled_loans')

// Agent Pages
const Agent_Dashboard = () =>
    import ('@/views/agentPages/Dashboard')



// Add Loan
const add_loan = () =>
    import ('@/adminContainer/adminComponent/addLoan')

// Admin Loanees
const loanees = () =>
    import ('@/adminContainer/adminComponent/loanees')

// Admin Loanees Details
const loaneeDetails = () =>
    import ('@/adminContainer/adminComponent/loaneeDetails')


// Active Loanees
const active_loanees = () =>
    import ('@/adminContainer/adminComponent/active_loanees')

// All Users
const all_users = () =>
    import ('@/adminContainer/adminComponent/allUsers')

// Due Loanees
const due_loanees = () =>
    import ('@/adminContainer/adminComponent/due_loanees')


// Settled Loans
const settled_loans = () =>
    import ('@/adminContainer/adminComponent/settled_loans')

//  Loans Calculator
const loan_calculator = () =>
    import ('@/adminContainer/adminComponent/loan_calculator')

//Update status
const update_status = () =>
    import ('@/adminContainer/adminComponent/updateStatus')

//Update status
const pending = () =>
    import ('@/adminContainer/adminComponent/pendingLoans')


//Change Password
const change__password = () =>
    import ('@/superadminPages/changePassword')
const add_users = () =>
    import ('@/superadminPages/addUser')

const change_password_agent = () =>
    import ('@/views/agentPages/changePassword')


//Landing Page
const home_page = () =>
    import ('@/pages/homePage.vue')


//About Us Page
const about_us = () =>
    import ('@/pages/aboutUs.vue')


//Services Page
const our_services = () =>
    import ('@/pages/services.vue')


//Contact Page
const contact_us = () =>
    import ('@/pages/contactUs.vue')


Vue.use(Router)



export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes() {
    return [{
            path: '/superAdmin',
            redirect: '/superAdmin/dashboard',
            name: 'Home',
            component: TheContainer,
            children: [{
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Dashboard
                }, {
                    path: 'users',
                    meta: {
                        label: 'Users'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Users',
                            component: Users
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'User Details'
                            },
                            name: 'User',
                            component: User
                        }
                    ]
                },
                {
                    path: 'admins',
                    meta: {
                        label: 'Admins'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Admins',
                            component: Admins
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'Admin Details'
                            },
                            name: 'Admin',
                            component: Admin
                        }
                    ]
                },


                {
                    path: 'loan_calculator',
                    meta: {
                        label: 'Loan Calculator'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Loan Calculator',
                            component: Calculator
                        },

                    ]
                },
                {
                    path: 'active_loans',
                    meta: {
                        label: 'Active Loans'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Active Loans',
                            component: Active_Loans
                        },

                    ]
                },
                {
                    path: 'add_user',
                    meta: {
                        label: 'Add User'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Add Users',
                            component: add_users
                        },

                    ]
                },
                {
                    path: 'change__password',
                    meta: {
                        label: 'Change Password'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Change Password',
                            component: change__password
                        },

                    ]
                },
                {
                    path: 'due_payments',
                    meta: {
                        label: 'Due Payments'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Due Payments',
                            component: Due_Payments
                        },

                    ]
                },
                {
                    path: 'settled_loans',
                    meta: {
                        label: 'Settled Loans'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Settled Loans',
                            component: Settled_Loans
                        },

                    ]
                },

            ]
        },
        {
            path: '/',
            redirect: '/',
            name: 'Homepage',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                    path: '404',
                    name: 'Page404',
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
                {
                    path: 'login',
                    name: 'Login',
                    component: Login
                },
                {
                    path: 'register',
                    name: 'Register',
                    component: Register
                },
                {
                    path: '/',
                    name: 'home_page',
                    component: home_page
                },
                {
                    path: '/about',
                    name: 'about_us',
                    component: about_us
                },
                {
                    path: '/services',
                    name: 'services',
                    component: our_services
                },
                {
                    path: '/contact_us',
                    name: 'contact us',
                    component: contact_us
                },
            ]
        },
        {
            path: '/agentAdmin',
            redirect: '/agentAdmin/dashboard',
            name: 'Agent_Admin',
            component: AdminContainer,
            children: [{
                    path: 'dashboard',
                    name: 'Agent_Dashboard',
                    component: Agent_Dashboard
                },

                {
                    path: 'add_loan',
                    name: 'add_loan',
                    component: add_loan
                },
                {
                    path: 'loanees',
                    meta: {
                        label: 'Loanees'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'loanees',
                            component: loanees
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'Loanee Details'
                            },
                            name: 'Loanees',
                            component: loaneeDetails
                        }
                    ]
                },

                {
                    path: 'active_loanees',
                    name: 'active_loanees',
                    component: active_loanees
                },
                {
                    path: 'all_users',
                    name: 'all_users',
                    component: all_users
                },
                {
                    path: 'users',
                    meta: {
                        label: 'Users'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Users',
                            component: agentAdminUsers
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'User Details'
                            },
                            name: 'Admin',
                            component: agentAdminUsers
                        }
                    ]
                },
                {
                    path: 'due_loanees',
                    name: 'due_loanees',
                    component: due_loanees
                },
                {
                    path: 'settled_loans',
                    name: 'settled_loans',
                    component: settled_loans
                },
                {
                    path: 'loan_calculator',
                    name: 'loan_calculator',
                    component: loan_calculator
                },
                {
                    path: 'update_status',
                    name: 'update_status',
                    component: update_status
                },
                {
                    path: 'pending',
                    name: 'pending',
                    component: pending
                },
                {
                    path: 'change_password_agent',
                    name: 'change_password_agent',
                    component: change_password_agent
                },




            ]
        }
    ]
}