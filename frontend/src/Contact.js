import React from 'react';
import Footer from './Footer';

const Contact = () => {
    return (
        <>
        <div className="contact-wrapper">                        
               <div class="container"> 
               <div className ="line3"></div>  
                <div class="card5-body"> 
                <div class="row">                  
                    <div class="col-md-8">
                        <div class="well well-sm">
                            <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name">
                                            Name</label>
                                        <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">
                                            Email Address</label>
                                        <div class="input-group">
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                            </span>
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                    </div>
                                    <div class="form-group">
                                        <label for="subject">
                                            Subject</label>
                                        <select id="subject" name="subject" class="form-control" required="required">
                                            <option value="na" selected="">Choose One:</option>
                                            <option value="service">General Customer Service</option>
                                            <option value="suggestions">Suggestions</option>
                                            <option value="product">Product Support</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="name">
                                            Message</label>
                                        <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                            placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="button1" id="btnContactUs">
                                        Send Message</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <form>
                        <legend><span class="glyphicon glyphicon-globe"></span> Our Gym</legend>
                        <address>
                            <strong>Fitness Life Gym</strong> <br/>
                            Kirinda Road<br/>
                            Kamburupitiya, Matara<br/>
                            <abbr title="Phone">
                                P: </abbr>
                            (077) 4525 774
                        </address>
                        <address>
                            <strong>Full Name</strong><br/>
                            <a href="mailto:#">fitnesslife@gmail.com</a>
                        </address>
                        </form>
                    </div>
                </div>    </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;
