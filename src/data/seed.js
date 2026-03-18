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

export const grades = [
  { course_name: "Machine Learning", grade: 85, credit: 3 },
  { course_name: "Distributed System", grade: 78, credit: 4 },
  { course_name: "Software Architecture", grade: 92, credit: 3 },
  { course_name: "Advanced Java", grade: 68, credit: 3 },
  { course_name: "Project Management", grade: 88, credit: 2 },
  { course_name: "Cloud Computing", grade: 91, credit: 3 },
];