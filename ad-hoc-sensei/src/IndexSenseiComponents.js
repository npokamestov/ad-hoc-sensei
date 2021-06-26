import React from 'react'
import {  Route } from 'react-router-dom';

import SenseiDashHeader  from './components/SenseiDashHeader';
import SenseiClassTable  from './components/SenseiClassTable';
import CourseForm  from './components/CourseForm';


const IndexSenseiComponents = () => {
    return (     
        <div className="IndexSenseiComponents">
          
             <SenseiDashHeader></SenseiDashHeader>
                <Route  exact path='/senseidash/senseiclasstable' component={SenseiClassTable} ></Route>
                <Route  exact path='/senseidash/courseform' component={CourseForm} ></Route>
          
       </div>
    )
}

export default IndexSenseiComponents
