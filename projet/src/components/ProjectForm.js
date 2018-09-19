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
    this.props.postNewProject({
      name: this.state.name,
      idea: this.state.idea,
      features: this.state.features,
      keywords: this.state.keywords,
    });
    this.setState({ 
      name: '',
      idea: '',
      features: '',
      keywords: '',
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='auth-page'>
        <form onSubmit={this.handleNewProject} className='form'>
          <h1 className='title'>New idea</h1>
          {this.props.errors.message && (
            <div>{this.props.errors.message}</div>
          )}
          <input
            autoComplete='off'
            className='form__input'
            type='text'
            placeholder='Name'
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label htmlFor='email' className='form__label'>Name</label>
          <input
            autoComplete='off'
            className='form__input'
            type='text'
            placeholder='Idea'
            value={this.state.idea}
            onChange={e => this.setState({ idea: e.target.value })}
          />
          <label htmlFor='email' className='form__label'>Idea</label>
          <input
            autoComplete='off'
            className='form__input'
            type='text'
            placeholder='Features'
            value={this.state.features}
            onChange={e => this.setState({ features: e.target.value })}
          />
          <label htmlFor='email' className='form__label'>Features</label>
          <input
            autoComplete='off'
            className='form__input'
            type='text'
            placeholder='Keywords'
            value={this.state.keywords}
            onChange={e => this.setState({ keywords: e.target.value })}
          />
          <label htmlFor='email' className='form__label'>Keywords</label>
          <button type='submit' className='btn--small'>
            Add Idea
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
  };
}

export default connect(mapStateToProps, { postNewProject })(ProjectForm);
