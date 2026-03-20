import './StatCard.scss'

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  isActive: boolean;
  onClick: () => void;
}

const StatCard = ({ icon, title, value, isActive, onClick }: StatCardProps) => {
  return (
    <div
      className={`stat-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="stat-header">
        {icon}
        <span className="stat-title">{title}</span>
      </div>
      <p className="stat-value">{value.toLocaleString('en-US')}</p>
    </div>
  );
};

export default StatCard;