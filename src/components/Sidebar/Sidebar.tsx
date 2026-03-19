import { useState } from 'react'
import { Icon } from '@iconify/react'
import { navItems } from '../../constants/navItems'
import './Sidebar.scss'

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const [activeId, setActiveId] = useState(navItems[0]?.id)

    return (
        <>
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={onClose}
                />
            )}

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="sidebar-list">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            className={`sidebar-item ${activeId === item.id ? 'active' : ''}`}
                            onClick={() => {
                                setActiveId(item.id)
                                onClose()
                            }}
                        >
                            {item.icon}
                        </li>
                    ))}
                </ul>

                <button className="sidebar-logout">
                    <Icon icon="mdi:logout" />
                </button>
            </nav>
        </>
    )
}

export default Sidebar;