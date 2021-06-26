import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {StudentDashHeader} from './components'
import {StudentClassTable} from './components'




const IndexStudentComponents = () => {
    return (
        <div className="IndexStudentComponents">
           <Route>

              <StudentDashHeader></StudentDashHeader>
                  <Route  exact path='/studentdash/studentclasstable' component={StudentClassTable} />

           </Route>
        </div>  
    )
}

export default IndexStudentComponents
