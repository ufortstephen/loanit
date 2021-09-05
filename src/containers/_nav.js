export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavTitle',
            _children: ['Admin']
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/superAdmin/dashboard',
            icon: 'cil-chart-pie',

        },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Transactions',
        //     to: '/superAdmin/transaction',
        //     icon: 'cil-spreadsheet',

        // },

        {
            _name: 'CSidebarNavItem',
            name: 'Administrators',
            to: '/superAdmin/admins',
            icon: 'cil-drop'
        },
        {
            _name: 'CSidebarNavTitle',
            _children: ['Loanees']
        },
        {
            _name: 'CSidebarNavItem',
            name: 'All Loanees',
            to: '/superAdmin/users',
            icon: 'cil-user'
        },

        {
            _name: 'CSidebarNavItem',
            name: 'Active Loanees',
            to: '/superAdmin/active_loans',
            icon: 'cil-pencil'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Due Payments',
            to: '/superAdmin/due_payments',
            icon: 'cil-ban'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Settled Loans',
            to: '/superAdmin/settled_loans',
            icon: 'cil-pencil'
        },
        {
            _name: 'CSidebarNavTitle',
            _children: ['Utilities']
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Loan Calculator',
            to: '/superAdmin/loan_calculator',
            icon: 'cil-calculator'
        },

        {
            _name: 'CSidebarNavTitle',
            _children: ['Components']
        },
        // {
        //     _name: 'CSidebarNavDropdown',
        //     name: 'Base',
        //     route: '/base',
        //     icon: 'cil-puzzle',
        //     items: [{
        //             name: 'Breadcrumbs',
        //             to: '/base/breadcrumbs'
        //         },
        //         {
        //             name: 'Cards',
        //             to: '/base/cards'
        //         },
        //         {
        //             name: 'Carousels',
        //             to: '/base/carousels'
        //         },
        //         {
        //             name: 'Collapses',
        //             to: '/base/collapses'
        //         },
        //         {
        //             name: 'Forms',
        //             to: '/base/forms'
        //         },
        //         {
        //             name: 'Jumbotrons',
        //             to: '/base/jumbotrons'
        //         },
        //         {
        //             name: 'List Groups',
        //             to: '/base/list-groups'
        //         },
        //         {
        //             name: 'Navs',
        //             to: '/base/navs'
        //         },
        //         {
        //             name: 'Navbars',
        //             to: '/base/navbars'
        //         },
        //         {
        //             name: 'Paginations',
        //             to: '/base/paginations'
        //         },
        //         {
        //             name: 'Popovers',
        //             to: '/base/popovers'
        //         },
        //         {
        //             name: 'Progress Bars',
        //             to: '/base/progress-bars'
        //         },
        //         {
        //             name: 'Switches',
        //             to: '/base/switches'
        //         },
        //         {
        //             name: 'Tables',
        //             to: '/base/tables'
        //         },
        //         {
        //             name: 'Tabs',
        //             to: '/base/tabs'
        //         },
        //         {
        //             name: 'Tooltips',
        //             to: '/base/tooltips'
        //         }
        //     ]
        // },
        // {
        //     _name: 'CSidebarNavDropdown',
        //     name: 'Buttons',
        //     route: '/buttons',
        //     icon: 'cil-cursor',
        //     items: [{
        //             name: 'Buttons',
        //             to: '/buttons/standard-buttons'
        //         },
        //         {
        //             name: 'Button Dropdowns',
        //             to: '/buttons/dropdowns'
        //         },
        //         {
        //             name: 'Button Groups',
        //             to: '/buttons/button-groups'
        //         },
        //         {
        //             name: 'Brand Buttons',
        //             to: '/buttons/brand-buttons'
        //         }
        //     ]
        // },
        {
            _name: 'CSidebarNavItem',
            name: 'Analytics',
            to: '/superAdmin/charts',
            icon: 'cil-chart-pie'
        },



    ]
}]