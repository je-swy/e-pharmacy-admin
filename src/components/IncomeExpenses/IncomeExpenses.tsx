import transactions from '../../data/Income-Expenses.json'
import './IncomeExpenses.scss'
import Table from '../Table/Table'

const IncomeExpenses = () => {
    return (
        <Table
            title="Income/Expenses"
            subtitle="Today"
            hideHeader={true}
            columns={[
                {
                    key: 'type',
                    label: 'Type',
                    render: (value) => (
                        <span className={`badge badge--${String(value).toLowerCase()}`}>
                            {String(value)}
                        </span>
                    )
                },
                { key: 'name', label: 'Name' },
                {
                    key: 'amount', label: 'Amount',
                    render: (value, row) => (
                        <span className={`amount amount--${row.type.toLowerCase()}`}>
                            {String(value)}
                        </span>
                    )
                },
            ]}
            data={transactions.slice(0, 6)}
        />
    )
}

export default IncomeExpenses