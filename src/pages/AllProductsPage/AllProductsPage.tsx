import { useFilter } from '../../hooks/useFilter'
import { useState } from 'react'

import products from '../../data/products.json'

import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'

import './AllProductsPage.scss'
import { Icon } from '@iconify/react'

interface Product {
  id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
}

const AllProductsPage = () => {
  const [productsList, setProductsList] = useState(products)
  const [editProduct, setEditProduct] = useState<Product | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { filter, handleFilter, paginatedData, currentPage, setCurrentPage, totalPages } = useFilter(productsList, 'name')
  return (
    <div className="products main-content-wrapper">
      <div className='products-header-wrapper'>
        <div className="products-filter input-group">
          <input
            type="text"
            className="input"
            placeholder="Product Name"
            value={filter}
            onChange={e => handleFilter(e.target.value)}
          />
          <button className="btn btn--primary">Filter</button>
        </div>
        <div className="products-btn ">
          <button className="btn btn--primary" onClick={() => setIsModalOpen(true)}>
            +
          </button>
          <span>Add a new product</span>
        </div>
      </div >
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
                <button className="table__action-btn table__action-btn--edit"
                  onClick={() => {
                    setEditProduct(row)
                    setIsEditModalOpen(true)
                  }}>
                  <Icon icon="mdi:pencil" />
                </button>
                <button
                  className="table__action-btn table__action-btn--delete"
                  onClick={() => setProductsList(prev => prev.filter(p => p.id !== row.id))}
                >
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
      <Modal
        title="Add new product"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}>

        <input className="input" placeholder="Product Info" />
        <input className="input" placeholder="Category" />
        <input className="input" placeholder="Stock" />
        <input className="input" placeholder="Suppliers" />
        <input className="input" placeholder="Price" />
        <div className="modal-buttons">
          <button className="btn btn--primary">Add</button>
          <button className="btn btn--secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
        </div>
      </Modal>

      <Modal
        title="Edit product"
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <input className="input" placeholder="Product Info" defaultValue={editProduct?.name} />
        <input className="input" placeholder="Category" defaultValue={editProduct?.category} />
        <input className="input" placeholder="Stock" defaultValue={editProduct?.stock} />
        <input className="input" placeholder="Suppliers" defaultValue={editProduct?.suppliers} />
        <input className="input" placeholder="Price" defaultValue={editProduct?.price} />
        <div className="modal-buttons">
          <button className="btn btn--primary">Save</button>
          <button className="btn btn--secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
        </div>
      </Modal>
    </div >
  )
}

export default AllProductsPage