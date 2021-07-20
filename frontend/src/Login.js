
import Footer from './Footer';

import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "./services/auth.service";

const required = value => {
	if (!value) {
	  return (
		<div className="alert alert-danger" role="alert">
		  This field is required!
		</div>
	  );
	}
  };


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/Profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (

		<>
    <div className="login-wrapper"> 
      <div className="container">      
        <div class="d-flex justify-content-center h-100">
          <div class="card">
              <div class="card-header">
                  <h3>Sign In</h3>
                  <div class="d-flex justify-content-end social_icon">
                      <span><i class="fab fa-facebook-square"></i></span>
                      <span><i class="fab fa-google-plus-square"></i></span>
                      <span><i class="fab fa-twitter-square"></i></span>
                  </div>
              </div>
              <div class="card-body">
                <Form onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="username" name="username" value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}/>
                  </div>
                  <p></p>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                    </div>
                    <input type="password" class="form-control" placeholder="password" name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}/>
                  </div>
                  <p></p>
                  <div class="row align-items-center remember">
                    <input type="checkbox"/>Remember Me
                  </div>
                  <p></p>
                  <div class="d-flex justify-content-end form-group2">
                    <button className="button2" disabled={this.state.loading}>{this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span></button>
                  </div>
                  {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
                </Form>
              </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                Don't have an account?<a href="/Signup">Sign Up</a>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
	<Footer/>
	  </>
    );
  }
}