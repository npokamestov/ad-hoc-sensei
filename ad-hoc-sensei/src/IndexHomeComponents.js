import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navigation from './components/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Courses from './pages/Courses'
import ContactUs from './pages/ContactUs'
import About from './pages/About'



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
