export const courses = [
  {
    id: 1,
    course_name: "Machine Learning",
    progress: 100,
    abv: "ML",
    total_progress: 500, // out of 500
  },
  {
    id: 2,
    course_name: "Distributed System",
    progress: 200,
    abv: "DS",
    total_progress: 500,
  },
  {
    id: 3,
    course_name: "Software Architecture",
    progress: 300,
    abv: "SAD",
    total_progress: 500,
  },
  {
    id: 4,
    course_name: "Advanced Java",
    progress: 50,
    abv: "JAVA",
    total_progress: 500,
  },
  {
    id: 5,
    course_name: "Project Management",
    progress: 80,
    abv: "PM",
    total_progress: 500,
  },
  {
    id: 6,
    course_name: "Cloud Computing",
    progress: 150,
    abv: "CS",
    total_progress: 500,
  },
];

export const projects = [
  {
    project_id: 1,
    course_name: "Machine Learning",
    project_category: "ML",
    due_date: "2026-02-12",
    assessment_value: "10%",
    max_member: 1,
    presentation_status: "Yes",
    submission_status: "Done",
  },
  {
    project_id: 2,
    course_name: "Machine Learning",
    project_category: "ML",
    due_date: "2026-02-12",
    assessment_value: "10%",
    max_member: 7,
    presentation_status: "No",
    submission_status: "Not Yet",
  },
  // Add more as needed – you can copy from the original seed.js
  // For brevity, only two shown; include all from original file
];
export const gradeDetails = [
  {
    id: 1,
    course_name: "Machine Learning",
    credit: 3,
    goal: 85, // course target grade
    assessments: [
      { name: "Assignments", weight: 20, planned: 80, actual: 85 },
      { name: "Mid Exam", weight: 30, planned: 75, actual: 78 },
      { name: "Final Exam", weight: 40, planned: 80, actual: 82 },
      { name: "Project", weight: 10, planned: 90, actual: 95 },
    ],
  },
  {
    id: 2,
    course_name: "Distributed System",
    credit: 4,
    goal: 80,
    assessments: [
      { name: "Assignments", weight: 20, planned: 75, actual: 70 },
      { name: "Mid Exam", weight: 30, planned: 70, actual: 65 },
      { name: "Final Exam", weight: 40, planned: 75, actual: 68 },
      { name: "Project", weight: 10, planned: 80, actual: 85 },
    ],
  },
  {
    id: 3,
    course_name: "Software Architecture",
    credit: 3,
    goal: 90,
    assessments: [
      { name: "Assignments", weight: 15, planned: 85, actual: 88 },
      { name: "Mid Exam", weight: 35, planned: 80, actual: 82 },
      { name: "Final Exam", weight: 40, planned: 85, actual: 89 },
      { name: "Project", weight: 10, planned: 95, actual: 92 },
    ],
  },
  {
    id: 1,
    course_name: "Advanced Java",
    credit: 3,
    goal: 85, // course target grade
    assessments: [
      { name: "Assignments", weight: 20, planned: 80, actual: 85 },
      { name: "Mid Exam", weight: 30, planned: 75, actual: 78 },
      { name: "Final Exam", weight: 40, planned: 80, actual: 82 },
      { name: "Project", weight: 10, planned: 90, actual: 95 },
    ],
  },
  {
    id: 2,
    course_name: "Project Management",
    credit: 4,
    goal: 80,
    assessments: [
      { name: "Assignments", weight: 20, planned: 75, actual: 70 },
      { name: "Mid Exam", weight: 30, planned: 70, actual: 65 },
      { name: "Final Exam", weight: 40, planned: 75, actual: 68 },
      { name: "Project", weight: 10, planned: 80, actual: 85 },
    ],
  },
  {
    id: 3,
    course_name: "Cloud Computing",
    credit: 3,
    goal: 90,
    assessments: [
      { name: "Assignments", weight: 15, planned: 85, actual: 88 },
      { name: "Mid Exam", weight: 35, planned: 80, actual: 82 },
      { name: "Final Exam", weight: 40, planned: 85, actual: 89 },
      { name: "Project", weight: 10, planned: 95, actual: 92 },
    ],
  },
];