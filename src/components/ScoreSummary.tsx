import React from "react";
import SkillScoreBar from "./SkillScoreBar";

type Props = {
  overallScore: number;
  skills: Record<string, number>;
};

const ScoreSummary = ({ overallScore, skills }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-4">Summary of Scores</h2>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold text-blue-600">
          {overallScore} / 9
        </p>
        <p className="text-gray-500">Overall Score</p>
      </div>

      {Object.entries(skills).map(([key, value]) => (
        <SkillScoreBar
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          score={value}
        />
      ))}
    </div>
  );
};

export default ScoreSummary;
