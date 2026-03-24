import customers from '../../data/customers.json'
import Table from '../../components/Table/Table'
import './CustomersDataPage.scss'
import { useFilter } from '../../hooks/useFilter'

const AllOrdersPage = () => {
    // filter
    const { filter, handleFilter, paginatedData, currentPage, setCurrentPage, totalPages } = useFilter(customers, 'name')

    return (
        <div className="orders main-content-wrapper">
            <div className="orders-filter input-group">
                <input
                    type="text"
                    className="input"
                    placeholder="User Name"
                    value={filter}
                    onChange={e => handleFilter(e.target.value)}
                />
                <button className="btn btn--primary">Filter</button>
            </div>
            <Table
                title="Customers Data"
                columns={[
                    {
                        key: 'name', label: 'User Info', render: (_, row) => (
                            <div className="table__name">
                                <img src={row.image} alt={row.name} />
                                <span>{row.name}</span>
                            </div>
                        )
                    },
                    { key: 'email', label: 'Email'},
                    { key: 'address', label: 'Address' },
                    { key: 'phone', label: 'Phone' },
                    { key: 'register_date', label: 'Register_date' },
                ]}
                data={paginatedData}
            />
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        className={`pagination__btn ${currentPage === page ? 'active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllOrdersPage