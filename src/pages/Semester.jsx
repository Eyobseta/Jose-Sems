import { useState, useEffect } from 'react';
import { courses } from '../data/seed';
import Navbar from '../components/Navbar';
import './Semester.css';

export default function Semester() {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => setCourseList(courses), 500);
  }, []);

  return (
    <div className="semester-container">
      <Navbar />
      <div className="quote">
        <p>“Replan if you don't progress well.”</p>
      </div>
      <div className="course-grid">
        {courseList.map((course) => {
          const percentage = Math.floor((course.progress / course.total_progress) * 100);
          return (
            <div className="course-card" key={course.id}>
              <h2>{course.course_name}</h2>
              <div className="progress-section">
                <p>Status</p>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="progress-labels">
                  <span>0%</span>
                  <span>{percentage}%</span>
                </div>
              </div>
              <button className="view-more">View More</button>
            </div>
          );
        })}
      </div>
      <footer className="footer">
        <p>Jose Software Solution</p>
      </footer>
    </div>
  );
}