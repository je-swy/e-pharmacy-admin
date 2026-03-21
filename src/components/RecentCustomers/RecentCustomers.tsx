import customers from '../../data/customers.json'
import Table from '../Table/Table'

const RecentCustomers = () => {
    return (
        <Table
            title="Recent Customers"
            columns={[
                {
                    key: 'name',
                    label: 'Name',
                    render: (_, row) => (
                        <div className="table__name">
                            <img src={row.image} alt={row.name} />
                            <span>{row.name}</span>
                        </div>
                    )
                },
                { key: 'email', label: 'Email' },
                { key: 'spent', label: 'Spent' },
            ]}
            data={customers.slice(0, 5)}
        />
    )
}

export default RecentCustomers