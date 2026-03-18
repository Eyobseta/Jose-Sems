import { useState } from 'react';
import Navbar from '../components/Navbar';
import { grades } from '../data/seed';
import './GradeSummary.css';

export default function GradeSummary() {
  const [targetGPA, setTargetGPA] = useState(3.5);
  const [currentGPA, setCurrentGPA] = useState(null);

  const calculateGPA = () => {
    const totalPoints = grades.reduce((acc, g) => {
      const gradePoints = (g.grade / 25) * g.credit; // 4.0 scale: grade/25
      return acc + gradePoints;
    }, 0);
    const totalCredits = grades.reduce((acc, g) => acc + g.credit, 0);
    const gpa = totalPoints / totalCredits;
    setCurrentGPA(gpa.toFixed(2));
  };

  return (
    <div className="grades-container">
      <Navbar />
      <h1>Grade Summary</h1>
      <div className="planning-tool">
        <h2>Planning Tool</h2>
        <div className="target-input">
          <label>Target GPA (4.0 scale):</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="4"
            value={targetGPA}
            onChange={(e) => setTargetGPA(parseFloat(e.target.value))}
          />
        </div>
        <button onClick={calculateGPA} className="calc-btn">Calculate Current GPA</button>
        {currentGPA && (
          <div className="gpa-result">
            <p>Your current GPA: <strong>{currentGPA}</strong></p>
            <p className={`goal ${currentGPA >= targetGPA ? 'met' : 'not-met'}`}>
              {currentGPA >= targetGPA ? '🎉 Target achieved!' : '📉 Keep working!'}
            </p>
          </div>
        )}
      </div>
      <div className="grades-table-container">
        <h2>Course Grades</h2>
        <table className="grades-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade (%)</th>
              <th>Credits</th>
              <th>Grade Points</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((g, idx) => (
              <tr key={idx}>
                <td>{g.course_name}</td>
                <td>{g.grade}</td>
                <td>{g.credit}</td>
                <td>{(g.grade / 25).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}