import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import data,{ projects } from '../data/seed.js'

export default function Projects() {
  return (
    <div className="container">
      <div className="header">
        <p>Jose</p>
        <FaBars className="humberger" />
      </div>
      <div className="nav">
        {
          data.map(dataItem => 
            <Link className="navItem">{dataItem.abv}</Link>
          )
        }
      </div>
      {
        projects.map(dataItem =>
          dataItem.project_catagory === "ML"?
           <div className="course-status-view">
            <h2 className="title">{dataItem.course_name} Projects {dataItem.project_id}</h2>
            <div className="project-desc-container">
              <p>Member Status : Maximum {dataItem.max_member}</p>
              <p>Assesment Value : {dataItem.assesment_value}</p>
              <p>Presentaion : {dataItem.presentation_status}</p>
              <p>Submission Date : {dataItem.due_date}</p>
              <p>Completed ? {dataItem.submission_status}</p>
            </div>
            <button className="mark-complete">Mark As Completed</button>
      </div>:null
        
        )
      }
    </div>
  );
}
