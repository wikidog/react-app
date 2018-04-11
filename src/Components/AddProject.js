import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

  constructor() {
    super();

    this.state = {
      newProject: {}
    };
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
                return (
                  <option key={category} value={category}>{category}</option>
                );
              });

    return (
      <div className="AddProject">
        <h3>Add Project</h3>
        <form onSubmit={this._handleSubmit.bind(this)}>    { /* aefad */}
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    if (this.refs.title.value === '') {
      alert('Title is requored');
      return;
    }

    this.setState({
      newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    }, function() {
      //console.log(this.state);
      this.props.addProject(this.state.newProject);
    });
  }
}

export default AddProject;
