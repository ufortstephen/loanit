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
        // {
        //     _name: 'CSidebarNavItem',
        //     name: 'Transactions',
        //     to: '/agentAdmin/agent_transactions',
        //     icon: 'cil-spreadsheet',

        // },
        {
            _name: 'CSidebarNavItem',
            name: 'Add Loan',
            to: '/agentAdmin/add_loan',
            icon: 'cil-spreadsheet',

        },

        {
            _name: 'CSidebarNavTitle',
            _children: ['Loanees']
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Loanees',
            to: '/agentAdmin/loanees',
            icon: 'cil-user'
        },

        {
            _name: 'CSidebarNavItem',
            name: 'Active Loans',
            to: '/agentAdmin/active_loanees',
            icon: 'cil-pencil'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Due Payments',
            to: '/agentAdmin/due_loanees',
            icon: 'cil-ban'
        },
        {
            _name: 'CSidebarNavItem',
            name: 'Settled Loans',
            to: '/agentAdmin/settled_loans',
            icon: 'cil-pencil'
        },
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