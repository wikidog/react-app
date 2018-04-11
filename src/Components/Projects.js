import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

  render() {

    let projectItems;

    if (this.props.projects) {
      projectItems = this.props.projects.map( (project) => {
        return (
          <ProjectItem key={project.id} project={project} deleteProject={this._deleteProject.bind(this)} />
        );
      });
    }

    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }

  _deleteProject(project) {
    this.props.deleteProject(project);
  }
}

export default Projects;
