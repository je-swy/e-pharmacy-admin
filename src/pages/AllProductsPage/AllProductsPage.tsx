import { useFilter } from '../../hooks/useFilter'
import products from '../../data/products.json'
import Table from '../../components/Table/Table'
import './AllProductsPage.scss'
import { Icon } from '@iconify/react'

const AllProductsPage = () => {
    // filter
    const { filter, handleFilter, paginatedData, currentPage, setCurrentPage, totalPages } = useFilter(products, 'name')

    return (
        <div className="orders main-content-wrapper">
            <div className="orders-filter input-group">
                <input
                    type="text"
                    className="input"
                    placeholder="Product Name"
                    value={filter}
                    onChange={e => handleFilter(e.target.value)}
                />
                <button className="btn btn--primary">Filter</button>
            </div>
            <Table
                title="All products"
                columns={[
                    {
                        key: 'name', label: 'Product Info', render: (_, row) => (
                            <div className="table__name">
                                <img src={row.photo} alt={row.name} />
                                <span>{row.name}</span>
                            </div>
                        )
                    },
                    { key: 'category', label: 'Category' },
                    { key: 'stock', label: 'Stock' },
                    { key: 'suppliers', label: 'Suppliers' },
                    { key: 'price', label: 'Price' },
                    {
                        key: 'id',
                        label: 'Action',
                        render: (_, row) => (
                            <div className="table__actions">
                                <button className="table__action-btn table__action-btn--edit">
                                    <Icon icon="mdi:pencil" />
                                </button>
                                <button className="table__action-btn table__action-btn--delete">
                                    <Icon icon="mdi:trash-can-outline" />
                                </button>
                            </div>
                        )
                    },
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

export default AllProductsPage