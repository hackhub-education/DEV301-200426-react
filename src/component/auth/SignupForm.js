import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config'
import { connect } from 'react-redux'

class Signup extends Component {
    state = {
      username: '',
      password: ''
    }

    handleFormUpdate = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSignup = () => {
      let that = this
      axios.post(`${baseUrl}/auth/signup`, this.state)
        .then(res => {
          that.props.updateToken(res.data.token)
          that.props.updateProfile(res.data.profile)
        })
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">            
                <h3>Signup to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" name="username" id="username" onChange={this.handleFormUpdate} />
                    <input className="input-auth" type="password" placeholder="Password" name="password" id="password" onChange={this.handleFormUpdate} />
                    <button className="btn-primary" type="button" id="login-btn" onClick={this.handleSignup}>Signup</button>
                    <h6>Have account? <a href="/login">Log In Now</a></h6>
                </form>
            </div>
        );
    }
}

const mapDispatch = ({ user: { updateToken, updateProfile } }) => ({
  updateToken: token => updateToken(token),
  updateProfile: profile => updateProfile(profile)
})

export default connect(null, mapDispatch)(Signup);
