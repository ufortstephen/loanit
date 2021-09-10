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

const Colors = () =>
    import ('@/views/theme/Colors')
const Typography = () =>
    import ('@/views/theme/Typography')

const Charts = () =>
    import ('@/views/charts/Charts')
const Widgets = () =>
    import ('@/views/widgets/Widgets')

// Views - Components
const Cards = () =>
    import ('@/views/base/Cards')
const Forms = () =>
    import ('@/views/base/Forms')
const Switches = () =>
    import ('@/views/base/Switches')
const Tables = () =>
    import ('@/views/base/Tables')
const Tabs = () =>
    import ('@/views/base/Tabs')
const Breadcrumbs = () =>
    import ('@/views/base/Breadcrumbs')
const Carousels = () =>
    import ('@/views/base/Carousels')
const Collapses = () =>
    import ('@/views/base/Collapses')
const Jumbotrons = () =>
    import ('@/views/base/Jumbotrons')
const ListGroups = () =>
    import ('@/views/base/ListGroups')
const Navs = () =>
    import ('@/views/base/Navs')
const Navbars = () =>
    import ('@/views/base/Navbars')
const Paginations = () =>
    import ('@/views/base/Paginations')
const Popovers = () =>
    import ('@/views/base/Popovers')
const ProgressBars = () =>
    import ('@/views/base/ProgressBars')
const Tooltips = () =>
    import ('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () =>
    import ('@/views/buttons/StandardButtons')
const ButtonGroups = () =>
    import ('@/views/buttons/ButtonGroups')
const Dropdowns = () =>
    import ('@/views/buttons/Dropdowns')
const BrandButtons = () =>
    import ('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () =>
    import ('@/views/icons/CoreUIIcons')
const Brands = () =>
    import ('@/views/icons/Brands')
const Flags = () =>
    import ('@/views/icons/Flags')

// Views - Notifications
const Alerts = () =>
    import ('@/views/notifications/Alerts')
const Badges = () =>
    import ('@/views/notifications/Badges')
const Modals = () =>
    import ('@/views/notifications/Modals')

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
const User = () =>
    import ('@/views/users/User')

// Admins
const Admins = () =>
    import ('@/views/admins/admins')
const Admin = () =>
    import ('@/views/admins/admin')


// Transactions
const Transactions = () =>
    import ('@/views/transaction/transactions')
const Transaction = () =>
    import ('@/views/transaction/transactions')

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

// Agent Transactions
const agent_transactions = () =>
    import ('@/views/agentPages/agent_transactions')

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


//Change Password
const change__password = () =>
    import ('@/superadminPages/changePassword')

const change_password_agent = () =>
    import ('@/views/agentPages/changePassword')



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
                                label: `User Details`
                            },
                            name: 'User',
                            component: User
                        }
                    ]
                },
                {
                    path: 'theme',
                    redirect: '/theme/colors',
                    name: 'Theme',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'colors',
                            name: 'Colors',
                            component: Colors
                        },
                        {
                            path: 'typography',
                            name: 'Typography',
                            component: Typography
                        }
                    ]
                },
                {
                    path: 'charts',
                    name: 'Charts',
                    component: Charts
                },
                {
                    path: 'widgets',
                    name: 'Widgets',
                    component: Widgets
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
                    path: 'transaction',
                    meta: {
                        label: 'Transactions'
                    },
                    component: {
                        render(c) {
                            return c('router-view')
                        }
                    },
                    children: [{
                            path: '',
                            name: 'Transactions',
                            component: Transactions
                        },
                        {
                            path: ':id',
                            meta: {
                                label: 'Transaction Details'
                            },
                            name: 'Transaction',
                            component: Transaction
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
                    path: 'base',
                    redirect: '/base/cards',
                    name: 'Base',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'cards',
                            name: 'Cards',
                            component: Cards
                        },
                        {
                            path: 'forms',
                            name: 'Forms',
                            component: Forms
                        },
                        {
                            path: 'switches',
                            name: 'Switches',
                            component: Switches
                        },
                        {
                            path: 'tables',
                            name: 'Tables',
                            component: Tables
                        },
                        {
                            path: 'tabs',
                            name: 'Tabs',
                            component: Tabs
                        },
                        {
                            path: 'breadcrumbs',
                            name: 'Breadcrumbs',
                            component: Breadcrumbs
                        },
                        {
                            path: 'carousels',
                            name: 'Carousels',
                            component: Carousels
                        },
                        {
                            path: 'collapses',
                            name: 'Collapses',
                            component: Collapses
                        },
                        {
                            path: 'jumbotrons',
                            name: 'Jumbotrons',
                            component: Jumbotrons
                        },
                        {
                            path: 'list-groups',
                            name: 'List Groups',
                            component: ListGroups
                        },
                        {
                            path: 'navs',
                            name: 'Navs',
                            component: Navs
                        },
                        {
                            path: 'navbars',
                            name: 'Navbars',
                            component: Navbars
                        },
                        {
                            path: 'paginations',
                            name: 'Paginations',
                            component: Paginations
                        },
                        {
                            path: 'popovers',
                            name: 'Popovers',
                            component: Popovers
                        },
                        {
                            path: 'progress-bars',
                            name: 'Progress Bars',
                            component: ProgressBars
                        },
                        {
                            path: 'tooltips',
                            name: 'Tooltips',
                            component: Tooltips
                        }
                    ]
                },
                {
                    path: 'buttons',
                    redirect: '/buttons/standard-buttons',
                    name: 'Buttons',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'standard-buttons',
                            name: 'Standard Buttons',
                            component: StandardButtons
                        },
                        {
                            path: 'button-groups',
                            name: 'Button Groups',
                            component: ButtonGroups
                        },
                        {
                            path: 'dropdowns',
                            name: 'Dropdowns',
                            component: Dropdowns
                        },
                        {
                            path: 'brand-buttons',
                            name: 'Brand Buttons',
                            component: BrandButtons
                        }
                    ]
                },
                {
                    path: 'icons',
                    redirect: '/icons/coreui-icons',
                    name: 'CoreUI Icons',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'coreui-icons',
                            name: 'Icons library',
                            component: CoreUIIcons
                        },
                        {
                            path: 'brands',
                            name: 'Brands',
                            component: Brands
                        },
                        {
                            path: 'flags',
                            name: 'Flags',
                            component: Flags
                        }
                    ]
                },
                {
                    path: 'notifications',
                    redirect: '/notifications/alerts',
                    name: 'Notifications',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'alerts',
                            name: 'Alerts',
                            component: Alerts
                        },
                        {
                            path: 'badges',
                            name: 'Badges',
                            component: Badges
                        },
                        {
                            path: 'modals',
                            name: 'Modals',
                            component: Modals
                        }
                    ]
                }
            ]
        },
        {
            path: '/',
            redirect: '/login',
            name: 'Login',
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
                }
            ]
        },
        {
            path: '/agentAdmin',
            redirect: '/agentAdmin/dashboard',
            name: 'Home',
            component: AdminContainer,
            children: [{
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: Agent_Dashboard
                },
                {
                    path: 'agent_transactions',
                    name: 'agent_transactions',
                    component: agent_transactions
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
                            name: 'Loanee',
                            component: loaneeDetails
                        }
                    ]
                },
                // {
                //     path: 'admins',
                //     meta: {
                //         label: 'Admins'
                //     },
                //     component: {
                //         render(c) {
                //             return c('router-view')
                //         }
                //     },
                //     children: [{
                //             path: '',
                //             name: 'Admins',
                //             component: Admins
                //         },
                //         {
                //             path: ':id',
                //             meta: {
                //                 label: 'Admin Details'
                //             },
                //             name: 'Admin',
                //             component: Admin
                //         }
                //     ]
                // },
                // {
                //     path: 'loanees',
                //     name: 'loanees',
                //     component: loanees
                // },
                {
                    path: 'active_loanees',
                    name: 'active_loanees',
                    component: active_loanees
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
                    path: 'change_password_agent',
                    name: 'change_password_agent',
                    component: change_password_agent
                },
                {
                    path: 'theme',
                    redirect: '/theme/colors',
                    name: 'Theme',
                    component: {
                        render(c) { return c('router-view') }
                    },
                    children: [{
                            path: 'colors',
                            name: 'Colors',
                            component: Colors
                        },
                        {
                            path: 'typography',
                            name: 'Typography',
                            component: Typography
                        }
                    ]
                },


            ]
        }
    ]
}