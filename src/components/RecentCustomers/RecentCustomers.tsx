import customers from '../../data/customers.json'
import './RecentCustomers.scss'

const RecentCustomers = () => {
    return (
        <div className="recent-customers-wrapper">
            <table className="recent-customers">
                <caption>Recent Customers</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Spent</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.slice(0, 5).map((customer, index) => (
                        <tr key={index}>
                            <td >
                                <div className="recent-customers__name">
                                    <img src={customer.image} alt={customer.name} />
                                    <span>{customer.name}</span>
                                </div>
                            </td>
                            <td>{customer.email}</td>
                            <td>{customer.spent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecentCustomers;