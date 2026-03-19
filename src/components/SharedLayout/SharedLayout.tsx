import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './SharedLayout.scss'

const SharedLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="layout">
            <Header
                title="Dashboard"
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