import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config'

class LoginForm extends Component {
    state = {
      username: '',
      password: ''
    }

    handleFormUpdate = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleLogin = () => {
      axios.post(`${baseUrl}/auth/login`, this.state)
        .then(res => {
          console.log(res)
        })
    }

    render() {
        return (
            <div className="col-2of5 bg-white profile user-auth">            
                <h3>Log in to Web Tweet</h3>
                <form id="login-form">
                    <input className="input-auth" type="text" placeholder="Username" name="username" id="username" onChange={this.handleFormUpdate} />
                    <input className="input-auth" type="password" placeholder="Password" name="password" id="password" onChange={this.handleFormUpdate} />
                    <button className="btn-primary" type="button" id="login-btn" onClick={this.handleLogin}>Log in</button>
                    <h6>New to Web Tweet? <a href="/signup">Sign up Now</a></h6>
                </form>
            </div>
        );
    }
}

export default LoginForm;
