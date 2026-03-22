import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './SharedLayout.scss'

const pageTitles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/orders': 'All orders',
    '/products': 'All products',
    '/suppliers': 'All suppliers',
    '/customers': 'Customers data',
}

const SharedLayout = () => {
    const location = useLocation()
    const title = pageTitles[location.pathname] || 'Dashboard'

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="layout">
            <Header
                title={title}
                email="vendor@gmail.com"
                isMenuOpen={isMenuOpen}
                onMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div className="layout-bottom">
                <Sidebar
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
                <main className="layout-main">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default SharedLayout