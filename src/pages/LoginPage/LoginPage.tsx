import './LoginPage.scss'
import logo from '../../assets/icons/logo_login.svg'
import pill from '../../assets/elements/white_round_pill.svg'
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {


    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="E-Pharmacy" className="login-logo" />
                <h1>E-Pharmacy</h1>
            </header>
            <main className="login-main">
                <h2>Your medication, <img src={pill} alt="Pill image" /> delivered Say goodbye to all <span className="login-accent">your healthcare</span> worries with us</h2>
                <LoginForm />
            </main>

        </div>
    )
}

export default LoginPage