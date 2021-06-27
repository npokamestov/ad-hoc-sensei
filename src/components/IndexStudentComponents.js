import React from 'react'
import { Route } from 'react-router-dom';

import StudentDashHeader from './studentDashComponents/StudentDashHeader';
import StudentClassTable from './studentDashComponents/StudentClassTable';
import StudentProfile from './studentDashComponents/StudentProfile';
import CourseAttending from './studentDashComponents/CourseAttending';




const IndexStudentComponents = () => {
    return (
        <div className="IndexStudentComponents">
              
           
              <StudentDashHeader></StudentDashHeader>
                  <Route  exact path='/studentdash/studentclasstable' component={StudentClassTable} ></Route>
                  <Route  exact path='/studentdash/coursesAttending' component={CourseAttending} ></Route>
                  <Route  exact path='/studentdash/profile' component={StudentProfile} ></Route>
             
         </div>  
    )
}

export default IndexStudentComponents
