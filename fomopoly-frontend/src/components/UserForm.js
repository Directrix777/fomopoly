import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions'

class UserForm extends Component {
    constructor() {
        super();
    
        this.state = {name: '', token: 'Car'};
      }
    
      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}) //each input needs a name prop
      }
    
      handleSubmit = (event) => {
        event.preventDefault()
        this.props.createUser(this.state)
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Name
                <input onChange={this.handleChange} id="name" name="name" type="text" value={this.state.username}/>
              </label>
            </div>
            <div>
              <label>
                Token
                <select onChange={this.handleChange} id="token" name="token" value={this.state.token}>
                    <option value='Car'>Car</option>
                    <option value='Cat'>Cat</option>
                    <option value='Dog'>Dog</option>
                    <option value='Duck'>Duck</option>
                    <option value='Hat'>Hat</option>
                    <option value='Iron'>Iron</option>
                    <option value='Penguin'>Penguin</option>
                    <option value='Ship'>Ship</option>
                    <option value='Shoe'>Shoe</option>
                    <option value='Thimble'>Thimble</option>
                    <option value='T-rex'>T-rex</option>
                    <option value='Wheelbarrow'>Wheelbarrow</option>
                </select>
              </label>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        );
      }
    }

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (formData) => dispatch(createUser(formData))
  }
}

export default connect(null, mapDispatchToProps)(UserForm);