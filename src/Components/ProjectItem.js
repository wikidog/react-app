import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    //console.log(this.props);
    return (
      <li className="Project">
        <strong>{this.props.project.title} - {this.props.project.category}</strong> <a href="void" onClick={this._deleteProject.bind(this)}>X</a>
      </li>
    );
  }

  _deleteProject(event) {
    event.preventDefault();

    this.props.deleteProject(this.props.project);

  }
}

export default ProjectItem;
