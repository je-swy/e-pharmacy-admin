import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LoginPage from './pages/LoginPage/LoginPage';
import AllOrdersPage from './pages/AllOrdersPage/AllOrdersPage';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import CustomersDataPage from './pages/CustomersDataPage/CustomersDataPage';
import AllSuppliersPage from './pages/AllSuppliersPage/AllSuppliersPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<SharedLayout />}>
                        <Route index element={<DashboardPage />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="orders" element={<AllOrdersPage />} />
                        <Route path="products" element={<AllProductsPage/>} />
                        <Route path="suppliers" element={<AllSuppliersPage/>} />
                        <Route path="customers" element={<CustomersDataPage/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App