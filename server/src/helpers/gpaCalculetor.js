// Function to calculate GPA based on marks
const calculateGPA = (marks) => {
  if (marks >= 80) {
    return 5.0;
  } else if (marks >= 70) {
    return 4.0;
  } else if (marks >= 60) {
    return 3.5;
  } else if (marks >= 50) {
    return 3.0;
  } else if (marks >= 40) {
    return 2.0;
  } else if (marks >= 33) {
    return 1.0;
  } else {
    return 0.0;
  }
};

module.exports = calculateGPA;
