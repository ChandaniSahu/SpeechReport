import React from "react";
import { reportData } from "./reportData";
import ScoreSummary from "./components/ScoreSummary";
import FeedbackSection from "./components/FeedbackSection";

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <ScoreSummary
          overallScore={reportData.overallScore}
          skills={reportData.skills}
        />

        <FeedbackSection
          overallScore={reportData.overallScore}
        />
      </div>
    </div>
  );
};

export default ReportPage;
