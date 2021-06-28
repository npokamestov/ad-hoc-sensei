import React from 'react'
import { Route } from 'react-router-dom';

import StudentDashHeader from './studentDashComponents/StudentDashHeader';
import StudentClassTable from './studentDashComponents/StudentClassTable';
import StudentProfile from './studentDashComponents/StudentProfile';
import CourseAttending from './studentDashComponents/CourseAttending';
import RegisterForCourse from './studentDashComponents/RegisterForCourse';
import AllCourses from './studentDashComponents/AllCourses';




const IndexStudentComponents = () => {
    return (
        <div className="IndexStudentComponents">
              
           
              <StudentDashHeader></StudentDashHeader>
                  <Route  exact path='/studentdash/studentclasstable' component={StudentClassTable} ></Route>
                  <Route  exact path='/studentdash/coursesAttending' component={CourseAttending} ></Route>
                  <Route  exact path='/studentdash/profile' component={StudentProfile} ></Route>
                  <Route  exact path='/studentdash/registercourses/*' component={RegisterForCourse} ></Route>
                  <Route  exact path='/studentdash/listofcourses' component={AllCourses} ></Route>
             
         </div>  
    )
}

export default IndexStudentComponents
