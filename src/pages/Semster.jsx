import React from "react";
import "./Semster.css";
import { Link } from "react-router-dom";
import data from "../data/seed";

export default function Semster() {
  return (
    <div className="p-container">
      <div className="p-header">
        <Link to={"/projects"} className="nav-link">
          Projets
        </Link>
        <Link to={"/grade"} className="nav-link">
          Grade
        </Link>
      </div>
      <div className="quote">
        <p>replan if u don't progress well.</p>
      </div>
      <div className="p-main">
        {data.map((dataItem) => 
          <div className="p-card">
            <h2>{dataItem.course_name}</h2>
            <div className="p-card-progress">
              <p>Status</p>
              <div className="status-container"> 
                <p
                className="status-bar"
                style={{
                  width:`${
                    Math.floor(Number((dataItem.progress*100)/500))
                  }%`
                }}
              ></p>
              </div>
              <div className="p-progress-count">
                <span className="min">0%</span>
                <span className="max">{(dataItem.progress*10)/30}%</span>
              </div>
            </div>
            <button className="p-goto">view more</button>
          </div>
        )}
      </div>
      <div className="footer">
        <p>Jose Software Solution</p>
      </div>
    </div>
  );
}
