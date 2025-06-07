
interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

const ProgressBar = ({ current, total, className = "" }: ProgressBarProps) => {
  const percentage = Math.min((current / total) * 100, 100);
  
  return (
    <div className={`w-full bg-gray-200 rounded-full h-3 ${className}`}>
      <div
        className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
