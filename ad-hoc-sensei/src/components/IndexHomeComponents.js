import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navigation from './landingPageComponent/Navigation'
import Home from './landingPageComponent/Home'
import Login from './landingPageComponent/Login'
import Register from './landingPageComponent/Register'
import Courses from './landingPageComponent/Courses'
import ContactUs from './landingPageComponent/ContactUs'
import About from './landingPageComponent/About'




const IndexHomeComponents = () => {
    return (
      <div className="IndexHomeComponents">
          <Router >
         
             <Navigation></Navigation>     
                <Route exact path='/home/' component={Home} ></Route>
                <Route exact path='/home/login' component={Login} ></Route>
                <Route exact path='/home/register' component={Register} ></Route>
                <Route exact path='/home/courses' component={Courses} ></Route>
                <Route exact path='/home/contact' component={ContactUs} ></Route>
                <Route exact path='/home/about' component={About} ></Route>
                       
        </Router>

      </div>
    )
}

export default IndexHomeComponents
