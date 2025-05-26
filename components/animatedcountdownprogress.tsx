"use client";

interface AnimatedCircularProgressProps {
  count: number;
}

export default function AnimatedCircularProgress({count}: AnimatedCircularProgressProps) {
  const max = 15;
//   const min = 0;
  const radius = 45; // Circle size
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - count / max); // Adjust stroke dynamically

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Circular Progress Bar */}
      <svg width="120" height="120" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#ddd"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="blue"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 50 50)" // Start from top
        />
        <text x="50" y="55" fontSize="20" textAnchor="middle" fill="black">
          {count}
        </text>
      </svg>
    </div>
  );
}
