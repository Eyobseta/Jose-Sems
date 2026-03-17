import React from "react";
import "./Semster.css";


export default function Semster() {
  const wid = "300px";


  return (
    <div className="p-container">
      <div className="p-header">
        <a href="">Projects</a>
        <a href="">Grade</a>
      </div>
      <div className="quote">
        <p>replan if u don't progress well.</p>
      </div>
      <div className="p-main">
        <div className="p-card">
          <h2>Course Name</h2>
          <div className="p-card-progress">
            <p>Status</p>
            <p
              className="status-bar"
              style={{
                width: wid,
              }}
            ></p>
            <div className="p-progress-count">
              <span className="min">0%</span>
              <span className="max">100%</span>
            </div>
          </div>
          <button className="p-goto" >view more</button>
        </div>
        <div className="p-card">
          <h2>Course Name</h2>
          <div className="p-card-progress">
            <p>Status</p>
            <p
              className="status-bar"
              style={{
                width: wid,
              }}
            ></p>
            <div className="p-progress-count">
              <span className="min">0%</span>
              <span className="max">100%</span>
            </div>
          </div>
          <button className="p-goto">view more</button>
        </div>
        <div className="p-card">
          <h2>Course Name</h2>
          <div className="p-card-progress">
            <p>Status</p>
            <p
              className="status-bar"
              style={{
                width: wid,
              }}
            ></p>
            <div className="p-progress-count">
              <span className="min">0%</span>
              <span className="max">100%</span>
            </div>
          </div>
          <button className="p-goto">view more</button>
        </div>
        <div className="p-card">
          <h2>Course Name</h2>
          <div className="p-card-progress">
            <p>Status</p>
            <p
              className="status-bar"
              style={{
                width: wid,
              }}
            ></p>
            <div className="p-progress-count">
              <span className="min">0%</span>
              <span className="max">100%</span>
            </div>
          </div>
          <button className="p-goto">view more</button>
        </div>
        <div className="p-card">
          <h2>Course Name</h2>
          <div className="p-card-progress">
            <p>Status</p>
            <p
              className="status-bar"
              style={{
                width: wid,
              }}
            ></p>
            <div className="p-progress-count">
              <span className="min">0%</span>
              <span className="max">100%</span>
            </div>
          </div>
          <button className="p-goto">view more</button>
        </div>

        <div className="p-card">
          <h2>Course Name</h2>
          <div className="p-card-progress">
            <p>Status</p>
            <p
              className="status-bar"
              style={{
                width: wid,
              }}
            ></p>
            <div className="p-progress-count">
              <span className="min">0%</span>
              <span className="max">100%</span>
            </div>
          </div>
          <button className="p-goto">view more</button>
        </div>
      </div>
      <div className="footer">
        <p>Jose Software Solution</p>
      </div>
    </div>
  );
}
