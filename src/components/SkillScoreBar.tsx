import React from 'react';

const SkillScoreBar = ({ label, score }) => {

const getBarColor = (score) => {
  if (score >= 7) return "bg-green-500";
  if (score >= 4) return "bg-orange-400";
  if (score < 4) return "bg-red-500";
};



  const percentage = (score / 9) * 100;
  const barColor = getBarColor(score);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{score}/9</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${barColor} h-2 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};


export default SkillScoreBar;
