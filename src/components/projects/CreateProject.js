import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';


class CreateProject extends Component {
    state={
        title: '',
        content: ''
    }
    onSubmit = (e)=>{
        e.preventDefault();
       // console.log(this.state)
       this.props.createProject(this.state)
    }

    onChange= (e)=>{
       this.setState({
           [e.target.id]: e.target.value
       })
    }

  render() {
    return (
      <div className="white container">
        <form onSubmit={this.onSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
            <label htmlFor="title">Titel</label>
            <input  type="text" id="title" onChange={this.onChange} />
        </div>
        <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.onChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">CREATE</button>
        </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
