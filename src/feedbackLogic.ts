export const getFeedback = (score: number): string => {
  if (score >= 8) {
    return "Excellent performance with strong control.";
  }
  if (score >= 6 && score <= 7) {
    return "Good performance with minor inaccuracies.";
  }
  return "Needs improvement.";
};
