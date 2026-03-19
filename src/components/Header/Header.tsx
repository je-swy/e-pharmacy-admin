import { Icon } from '@iconify/react'
import './Header.scss'

interface HeaderProps {
  email: string;
  title: string;
  isMenuOpen: boolean;
  onMenuOpen: () => void;
}

const Header = ({ email, title, isMenuOpen, onMenuOpen }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="header-burger" onClick={onMenuOpen}>
          <Icon icon={isMenuOpen ? 'mdi:close' : 'mdi:menu'} />
        </button>

        <img src="./src/assets/icons/logo.svg" alt="E-Pharmacy" className="header-logo" />

        <div className="header-info">
          <h1 className="header-title">Medicine store</h1>
          <div className="header-subtitle">
            <span>{title}</span>
            <span className="header-divider"> | </span>
            <span>{email}</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <button className="header-logout">
          <Icon icon="mdi:logout" />
        </button>
      </div>
    </header>
  )
}

export default Header;