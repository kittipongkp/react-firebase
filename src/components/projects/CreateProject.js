import React, { Component } from 'react'

class CreateProject extends Component {
    state={
        title: '',
        content: ''
    }
    onSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
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
            <label htmlFor="content">Project Content</label>
            <input className="materialize-textarea" id="content" onChange={this.onChange} />
        </div>
        <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">CREATE</button>
        </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
