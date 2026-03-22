import { useState } from 'react'
import orders from '../../data/orders.json'
import Table from '../../components/Table/Table'
import './AllOrdersPage.scss'

const AllOrdersPage = () => {
    // filter
    const [filter, setFilter] = useState('')

    const filteredOrders = orders.filter(order =>
        order.name.toLowerCase().includes(filter.toLowerCase())
    )

    const handleFilter = (value: string) => {
        setFilter(value)
        setCurrentPage(1) // for correct work of filter
    }

    // pagination
    const ITEMS_PER_PAGE = 5
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE)
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

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
                title="All Orders"
                columns={[
                    { key: 'name', label: 'User Info' },
                    { key: 'address', label: 'Address' },
                    { key: 'products', label: 'Products' },
                    { key: 'order_date', label: 'Order date' },
                    { key: 'price', label: 'Price' },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (value) => (
                            <span className={`badge badge--${String(value).toLowerCase()}`}>
                                {String(value)}
                            </span>
                        )
                    },
                ]}
                data={paginatedOrders}
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