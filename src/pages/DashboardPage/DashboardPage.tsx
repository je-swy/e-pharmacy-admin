import StatCard from '../../components/StatCard/StatCard'
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers'
import { stats } from '../../constants/stats'
import { useState } from 'react'
import './DashboardPage.scss'

const DashboardPage = () => {
    const [activeId, setActiveId] = useState(1)

    return (
        <div className="dashboard">
            <div className="dashboard-stats">
                {stats.map((stat) => (
                    <StatCard
                        key={stat.id}
                        icon={stat.icon}
                        title={stat.title}
                        value={stat.value}
                        isActive={activeId === stat.id}
                        onClick={() => setActiveId(stat.id)}
                    />
                ))}
            </div>
            <div className="dashboard-bottom">
                <RecentCustomers />
            </div>
        </div>
    )
}

export default DashboardPage