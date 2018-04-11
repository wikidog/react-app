import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      projects: []
    }
  };

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business WebSite',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        },
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this._addProject.bind(this)} />
        My Projects:
        <Projects projects={this.state.projects} deleteProject={this._deleteProject.bind(this)}  />
      </div>
    );
  }

  _addProject(project) {
    this.setState({
      projects: this.state.projects.concat([project])
    });
  }

  _deleteProject(project) {
    const projects = [...this.state.projects];
    const projectIndex = projects.indexOf(project);
    projects.splice(projectIndex, 1);

    this.setState({projects: projects});

  }
}

export default App;
