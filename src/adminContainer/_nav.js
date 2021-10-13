export default [{
    _name: 'CSidebarNav',
    _children: [{
            _name: 'CSidebarNavTitle',
            _children: ['Admin']
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Dashboard',
            to: '/agentAdmin/dashboard',
            icon: 'cil-chart-pie',

        },


        {
            _name: 'CSidebarNavDropdown',
            name: 'Loanees',
            route: '/superAdmin/users',
            icon: 'cil-user',
            items: [{
                    _name: 'CSidebarNavItem',
                    name: 'All Loanees',
                    to: '/agentAdmin/loanees',
                    icon: ''
                },
                {
                    _name: 'CSidebarNavItem',
                    name: 'Active Loans',
                    to: '/agentAdmin/active_loanees',
                    icon: ''
                },
                {
                    _name: 'CSidebarNavItem',
                    name: 'Due Payments',
                    to: '/agentAdmin/due_loanees',
                    icon: ''
                },
                {
                    _name: 'CSidebarNavItem',
                    name: 'Pending Loans',
                    to: '/agentAdmin/pending',
                    icon: ''
                },
                {
                    _name: 'CSidebarNavItem',
                    name: 'Settled Loans',
                    to: '/agentAdmin/settled_loans',
                    icon: ''
                },
            ]
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Users',
            to: '/agentAdmin/active_loanees',
            icon: 'cil-pencil'

        },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Add User',
        //     to: '/agentAdmin/add_loan',
        //     icon: 'cil-pencil'

        // },







        {
            _name: 'CSidebarNavTitle',
            _children: ['Utilities']
        },
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Loan Calculator',
        //     to: '/agentAdmin/update_status',
        //     icon: 'cil-calculator'
        // },



    ]
}]