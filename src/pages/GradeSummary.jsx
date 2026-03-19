import { useState } from "react";
import Navbar from "../components/Navbar";
import { gradeDetails } from "../data/seed";
import "./GradeSummary.css";

export default function GradeSummary() {
  const [courses, setCourses] = useState(gradeDetails);
  const [targetGPA, setTargetGPA] = useState(3.5);
  const [editingGPA, setEditingGPA] = useState(false);
  const [tempGPA, setTempGPA] = useState(targetGPA);

  // Update actual grade for a specific assessment
  const handleGradeChange = (courseId, assessmentIndex, newValue) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId
          ? {
              ...course,
              assessments: course.assessments.map((a, idx) =>
                idx === assessmentIndex
                  ? { ...a, actual: parseFloat(newValue) || 0 }
                  : a,
              ),
            }
          : course,
      ),
    );
  };

  // Calculate total grade for a course (weighted sum)
  const calculateCourseTotal = (assessments) => {
    const total = assessments.reduce(
      (sum, a) => sum + (a.actual * a.weight) / 100,
      0,
    );
    return Math.round(total * 10) / 10; // round to 1 decimal
  };

  // Calculate semester GPA
  const calculateSemesterGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach((course) => {
      const courseTotal = calculateCourseTotal(course.assessments);
      // Convert percentage to GPA (scale 4.0: grade/25)
      const gradePoints = (courseTotal / 25) * course.credit;
      totalPoints += gradePoints;
      totalCredits += course.credit;
    });
    return (totalPoints / totalCredits).toFixed(2);
  };

  // Find best and worst courses
  const courseTotals = courses.map((c) => ({
    name: c.course_name,
    total: calculateCourseTotal(c.assessments),
  }));
  const bestCourse = courseTotals.reduce(
    (best, curr) => (curr.total > best.total ? curr : best),
    courseTotals[0],
  );
  const worstCourse = courseTotals.reduce(
    (worst, curr) => (curr.total < worst.total ? curr : worst),
    courseTotals[0],
  );

  const semesterGPA = calculateSemesterGPA();

  // Handle GPA edit
  const saveGPA = () => {
    setTargetGPA(parseFloat(tempGPA) || 3.5);
    setEditingGPA(false);
  };

  return (
    <div className="grades-container">
      <Navbar />
      <header className="grades-header">
        <h1>Grade Summary</h1>
        <div className="gpa-goal">
          {editingGPA ? (
            <div className="gpa-edit">
              <input
                type="number"
                step="0.1"
                min="0"
                max="4"
                value={tempGPA}
                onChange={(e) => setTempGPA(e.target.value)}
              />
              <button onClick={saveGPA} className="save-gpa">
                Save
              </button>
              <button
                onClick={() => setEditingGPA(false)}
                className="cancel-gpa"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="gpa-display">
              <span>
                Target GPA: <strong>{targetGPA}</strong>
              </span>
              <button className="edit-gpa" onClick={() => setEditingGPA(true)}>
                ✏️
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="grades-main">
        <div className="grades-table-section">
          <table className="grades-table">
            <thead>
              <tr>
                <th>Course</th>
                <th colSpan="4">Assessments (Planned / Actual)</th>
                <th>Total</th>
                <th>Goal Met?</th>
              </tr>
              <tr className="sub-header">
                <th></th>
                {courses[0]?.assessments.map((a, idx) => (
                  <th key={idx}>
                    {a.name} ({a.weight}%)
                  </th>
                ))}
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => {
                const courseTotal = calculateCourseTotal(course.assessments);
                const meetsGoal = courseTotal >= course.goal;
                return (
                  <tr key={course.id}>
                    <td className="course-name">{course.course_name}</td>
                    {course.assessments.map((assessment, idx) => (
                      <td key={idx} className="assessment-cell">
                        <div className="planned-small">
                          {assessment.planned}%
                        </div>
                        <div className="actual-input">
                          <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={assessment.actual}
                            onChange={(e) =>
                              handleGradeChange(course.id, idx, e.target.value)
                            }
                            className={
                              assessment.actual >= assessment.planned
                                ? "input-good"
                                : "input-bad"
                            }
                          />
                          {assessment.actual >= assessment.planned ? (
                            <span className="indicator good">✅</span>
                          ) : (
                            <span className="indicator bad">🚩</span>
                          )}
                        </div>
                      </td>
                    ))}
                    <td
                      className={`course-total ${meetsGoal ? "goal-met" : "goal-missed"}`}
                    >
                      {courseTotal}%
                    </td>
                    <td className="goal-indicator">
                      {meetsGoal ? "🎯" : "❌"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan={courses[0]?.assessments.length + 2}
                  className="semester-gpa"
                >
                  Semester GPA: <strong>{semesterGPA}</strong>
                  {parseFloat(semesterGPA) >= targetGPA ? " ✅" : " ❌"}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <aside className="grades-sidebar">
          <h3>Best & Worst</h3>
          <div className="best-course">
            <h4>🥇 Best</h4>
            <p>{bestCourse.name}</p>
            <span className="best-grade">{bestCourse.total}%</span>
          </div>
          <div className="worst-course">
            <h4>📉 Worst</h4>
            <p>{worstCourse.name}</p>
            <span className="worst-grade">{worstCourse.total}%</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
