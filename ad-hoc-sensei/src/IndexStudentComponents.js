import React from 'react'
import { Route } from 'react-router-dom';

import StudentDashHeader from './components/StudentDashHeader';
import StudentClassTable from './components/StudentClassTable';




const IndexStudentComponents = () => {
    return (
        <div className="IndexStudentComponents">
              {/* <Router > */}
           
              <StudentDashHeader></StudentDashHeader>
                  <Route  exact path='/studentdash/studentclasstable' component={StudentClassTable} ></Route>

             {/* </Router> */}
         </div>  
    )
}

export default IndexStudentComponents
