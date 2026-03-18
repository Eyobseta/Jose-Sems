import { useState } from 'react';
import Navbar from '../components/Navbar';
import { courses, projects } from '../data/seed';
import './Projects.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ML');
  const [projectList, setProjectList] = useState(projects);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMarkComplete = (projectId, category) => {
    setProjectList((prev) =>
      prev.map((p) =>
        p.project_id === projectId && p.project_category === category
          ? { ...p, submission_status: 'Done' }
          : p
      )
    );
  };

  const filteredProjects = projectList.filter(
    (p) => p.project_category === selectedCategory
  );

  return (
    <div className="projects-container">
      <Navbar />
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="category-nav">
        {courses.map((course) => (
          <button
            key={course.abv}
            className={`category-btn ${selectedCategory === course.abv ? 'active' : ''}`}
            onClick={() => handleCategoryClick(course.abv)}
          >
            {course.abv}
          </button>
        ))}
      </div>
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div className="project-card" key={`${project.project_category}-${project.project_id}`}>
            <h2>{project.course_name} - Project {project.project_id}</h2>
            <div className="project-details">
              <p><span>Due Date:</span> {project.due_date}</p>
              <p><span>Assessment:</span> {project.assessment_value}</p>
              <p><span>Max Members:</span> {project.max_member}</p>
              <p><span>Presentation:</span> {project.presentation_status}</p>
              <p><span>Status:</span> {project.submission_status}</p>
            </div>
            {project.submission_status !== 'Done' ? (
              <button
                className="mark-complete"
                onClick={() => handleMarkComplete(project.project_id, project.project_category)}
              >
                Mark as Completed
              </button>
            ) : (
              <div className="completed-badge">✓ Completed</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}