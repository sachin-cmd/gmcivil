import React from 'react';
import { Link } from 'react-router-dom';
import './NumPro.css'; // Make sure to create a corresponding CSS file

const ProjectCard = (props) => {
  return (
    <Link to="/about" style={{ textDecoration: 'none',color:'black' }}>
    <div className="project-card">
      <h2>Number of Projects</h2>
      <p className="project-count">{props.numberOfProjects}</p>
    </div>
    </Link>
  );
};

export default ProjectCard;
