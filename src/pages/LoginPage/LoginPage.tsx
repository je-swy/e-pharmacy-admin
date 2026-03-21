import { Icon } from '@iconify/react'
import { useState } from 'react'
import './LoginPage.scss'
import logo from '../../assets/icons/logo_login.svg'
import pill from '../../assets/elements/white_round_pill.svg'


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="E-Pharmacy" className="login-logo" />
                <h1>E-Pharmacy</h1>
            </header>
            <main className="login-main">
                <h2>Your medication, <img src={pill} alt="Pill image" /> delivered Say goodbye to all <span className="login-accent">your healthcare</span> worries with us</h2>
                <form className="login-form">
                    <input type="email" className='input' placeholder="Email address" required />
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="input"
                            placeholder="Password"
                        />
                        <span
                            className="input-wrapper__icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            <Icon icon={showPassword ? 'mdi:eye-off' : 'mdi:eye'} />
                        </span>
                    </div>
                    <button className="btn btn--primary" type="submit">Log in</button>
                </form>
            </main>

        </div>
    )
}

export default LoginPage