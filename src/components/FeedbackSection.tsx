import React from "react";
import { getFeedback } from "../feedbackLogic";

const FeedbackSection = ({ overallScore }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-xl font-semibold mb-2">Descriptive Feedback</h2>
      <p className="text-gray-700">
        {getFeedback(overallScore)}
      </p>
    </div>
  );
};

export default FeedbackSection;
