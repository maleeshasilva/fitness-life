import im3 from "./components/image/im12.jpg";
import im2 from "./components/image/im11.jpg";
import im1 from "./components/image/im10.png";
import v1 from "./components/image/v1.mp4";
import Footer from './Footer';

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "./services/auth.service";

export default class Profile extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          redirect: null,
          userReady: false,
          currentUser: { username: "" }
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
    
        if (!currentUser) this.setState({ redirect: "/login" });
        this.setState({ currentUser: currentUser, userReady: true })
      }

      render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
      
        const { currentUser } = this.state;

    return (
        <div className="details-card">
            <div class="container">
                <h1 className="white">My Profile</h1>
                <p className="white">Welcome to your profile {currentUser.username}</p>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto center">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">My Workouts <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Payments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Settings</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <section class="details-card">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card-content">
                                <div class="card-img">
                                    <img src={im1} alt=""/>
                                    
                                </div>
                                <div class="card-desc">
                                    <h3>Arm Workots</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                        voluptas totam</p>
                                        
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-content">
                                <div class="card-img">
                                    <img src={im2} alt=""/>
                                    
                                </div>
                                <div class="card-desc">
                                    <h3>ABS Workouts</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                        voluptas totam</p>
                                        
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-content">
                                <div class="card-img">
                                    <img src={im3} alt=""/>
                                    
                                </div>
                                <div class="card-desc">
                                    <h3>Leg Workouts</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                        voluptas totam</p>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
    }
}
