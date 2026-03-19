import StatCard from './components/StatCard/StatCard'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <StatCard
        title="All products"
        value={8430}
        isActive={true}
        icon={<span>📦</span>}
      />
    </div>
  )
}

export default App