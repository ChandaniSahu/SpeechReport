import React from 'react';
type Props = {
  label: string;
  score: number;
};

const SkillScoreBar = ({ label, score }: Props) => {
  const percentage = (score / 9) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{score}/9</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillScoreBar;
