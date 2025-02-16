import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Login data:", this.state);
  }

  responseGoogle = (response) => {
    console.log(response);
    // Handle Google login response here
  };

  responseFacebook = (response) => {
    console.log(response);
    // Handle Facebook login response here
  };

  render() {
    return (
      <div className="App flex">
        <div className="appAside w-1/2 bg-[#6b5b95] flex items-center justify-center">
          {/* Optional: Add any background image or content here */}
        </div>
        <div className="appForm w-1/2 bg-[#12130f] p-10">
          <div className="pageSwitcher flex justify-end mb-10">
            <Link to="/login" className="pageSwitcherItem-active text-center p-2 bg-[#6b5b95] text-white rounded-l-lg">
              Login
            </Link>
            <Link to="/register" className="pageSwitcherItem text-center p-2 bg-[#40434e] text-[#9da6b1] rounded-r-lg">
              Register
            </Link>
          </div>
          <h2 className="formTitle text-[#707c8b] font-light mb-10 text-center">Login to Your Account</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="formField mb-10">
              <label className="formFieldLabel uppercase text-white">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="formFieldInput w-full bg-transparent border-b border-[#445366] text-white placeholder-[#616e7f] mb-2"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="formField mb-10">
              <label className="formFieldLabel uppercase text-white">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="formFieldInput w-full bg-transparent border-b border-[#445366] text-white placeholder-[#616e7f] mb-2"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="formFieldButton w-full bg-[#6b5b95] text-white rounded-full py-3 font-medium"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between mt-5">
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google Client ID
              buttonText="Sign in with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="bg-red-500 text-white rounded-full py-2 px-4"
            />
            <FacebookLogin
              appId="YOUR_FACEBOOK_APP_ID" // Replace with your Facebook App ID
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
              cssClass="bg-blue-600 text-white rounded-full py-2 px-4"
              icon="fa-facebook"
            />
          </div>
          <p className="mt-4 text-center text-white">
            Don't have an account? <Link to="/register" className="formFieldLink">Register here</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;



  