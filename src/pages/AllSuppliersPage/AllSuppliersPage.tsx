import { useFilter } from '../../hooks/useFilter'
import { useState } from 'react'

import suppliersData from '../../data/suppliers.json'

import Table from '../../components/Table/Table'
import Modal from '../../components/Modal/Modal'

import './AllSuppliersPage.scss'
import { Icon } from '@iconify/react'


interface Supplier {
    name: string;
    address: string;
    suppliers: string;
    date: string;
    amount: string;
    status: string;
}


const AllSuppliersPage = () => {
    const [supplierList, setSupplierList] = useState(suppliersData)
    const [editSupplier, setEditSupplier] = useState<Supplier | null>(null)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { filter, handleFilter, paginatedData, currentPage, setCurrentPage, totalPages } = useFilter(supplierList, 'name')


    return (
        <div className="supplier main-content-wrapper">
            <div className='supplier-header-wrapper'>
                <div className="supplier-filter input-group">
                    <input
                        type="text"
                        className="input"
                        placeholder="Supplier Name"
                        value={filter}
                        onChange={e => handleFilter(e.target.value)}
                    />
                    <button className="btn btn--primary">Filter</button>
                </div>
                <div className="supplier-btn ">
                    <button className="btn btn--outlined" onClick={() => setIsModalOpen(true)}>
                        Add a new supplier
                    </button>
                </div>
            </div >
            <Table
                title="All Suppliers"
                columns={[
                    { key: 'name', label: 'Name' },
                    { key: 'address', label: 'Address' },
                    { key: 'suppliers', label: 'Suppliers' },
                    { key: 'date', label: 'Date' },
                    { key: 'amount', label: 'Amount' },
                    {
                        key: 'status',
                        label: 'Status',
                        render: (value) => (
                            <span className={`badge badge--${String(value).toLowerCase()}`}>
                                {String(value)}
                            </span>
                        )
                    },

                    {
                        key: 'name',
                        label: 'Action',
                        render: (_, row) => (
                            <div className="table__actions">
                                <button className="table__action-btn table__action-btn--edit"
                                    onClick={() => {
                                        setEditSupplier(row)
                                        setIsEditModalOpen(true)
                                    }}>
                                    <Icon icon="mdi:pencil" />
                                </button>
                                <button
                                    className="table__action-btn table__action-btn--delete"
                                    onClick={() => setSupplierList(prev => prev.filter(p => p.name !== row.name))}
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
                title="Add new supplier"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}>

                <input className="input" placeholder="Supplier Info" />
                <input className="input" placeholder="Address" />
                <input className="input" placeholder="Company" />
                <input className="input" placeholder="Delivery date" type='date' />
                <input className="input" placeholder="Amout" />
                <input className="input" placeholder="Status" />
                <div className="modal-buttons">
                    <button className="btn btn--primary">Add</button>
                    <button className="btn btn--secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                </div>
            </Modal>

            <Modal
                title="Edit supplier"
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            >
                <input className="input" placeholder="Product Info" defaultValue={editSupplier?.name} />
                <input className="input" placeholder="Address" defaultValue={editSupplier?.address} />
                <input className="input" placeholder="Company" defaultValue={editSupplier?.suppliers} />
                <input className="input" placeholder="Date" defaultValue={editSupplier?.date} type='date' />
                <input className="input" placeholder="Amount" defaultValue={editSupplier?.amount} />
                <input className="input" placeholder="Status" defaultValue={editSupplier?.status} />
                <div className="modal-buttons">
                    <button className="btn btn--primary">Save</button>
                    <button className="btn btn--secondary" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                </div>
            </Modal>
        </div >
    )
}

export default AllSuppliersPage