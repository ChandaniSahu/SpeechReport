export const getFeedback = (score) => {
  if (score >= 7) {
    return "Excellent performance with strong clarity and control.";
  }
  if (score >= 4) {
    return "Satisfactory performance with some noticeable inaccuracies.";
  }
  if(score < 4) {
    return "Needs significant improvement in clarity and accuracy.";
  }

}
