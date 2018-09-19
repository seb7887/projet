import React from 'react';
import { connect } from 'react-redux';
import { postNewProject } from '../store/actions/projects';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      idea: '',
      features: '',
      keywords: '',
    };
  }

  handleNewProject = (event) => {
    event.preventDefault();
    this.props.postNewProject(this.state);
    this.setState({ project: {} });
    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleNewProject}>
        <input
          type='text'
          placeholder='Name'
          value={this.state.name}
          onChange={e => this.setState({ name: e.taget.value })}
        />
        <input
          type='text'
          placeholder='Idea'
          value={this.state.idea}
          onChange={e => this.setState({ idea: e.taget.value })}
        />
        <input
          type='text'
          placeholder='Features'
          value={this.state.features}
          onChange={e => this.setState({ features: e.taget.value })}
        />
        <input
          type='text'
          placeholder='Keywords'
          value={this.state.keywords}
          onChange={e => this.setState({ keywords: e.taget.value })}
        />
        <button type='submit'>
          Add Idea
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.erros,
  };
}

export default connect(mapStateToProps, { postNewProject })(ProjectForm);
