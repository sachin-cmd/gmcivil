import React from 'react';
import './NumPro.css'; // Make sure to create a corresponding CSS file

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h2>Number of Projects</h2>
      <p className="project-count">{props.numberOfProjects}</p>
    </div>
  );
};

export default ProjectCard;
