import './ComponentProgress.css';

interface ComponentProgressProps {
  checked: number;
  unchecked: number;
}

export const ComponentProgress = ({ checked, unchecked }: ComponentProgressProps) => {
  const full = 250;
  const filled = (checked / (checked + unchecked)) * full;

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="ma-component-progress" aria-hidden="true">
      <circle
        className="ma-component-progress__background"
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="none"
        strokeWidth="20"
      />
      <circle
        className="ma-component-progress__progress"
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeDasharray={filled}
      />
    </svg>
  );
};
