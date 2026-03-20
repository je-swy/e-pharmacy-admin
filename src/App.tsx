import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/SharedLayout/SharedLayout'
import DashboardPage from './pages/DashboardPage/DashboardPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<DashboardPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App