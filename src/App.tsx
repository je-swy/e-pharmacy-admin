import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<SharedLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="orders" element={<div>Orders page</div>} />
                        <Route path="products" element={<div>Products page</div>} />
                        <Route path="suppliers" element={<div>Suppliers page</div>} />
                        <Route path="customers" element={<div>Customers page</div>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App