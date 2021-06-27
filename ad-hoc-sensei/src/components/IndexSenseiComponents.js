import React from 'react'
import {  Route } from 'react-router-dom';

import SenseiDashHeader  from './senseiDashComponets/SenseiDashHeader';
import SenseiClassTable  from './senseiDashComponets/SenseiClassTable';
import CourseForm  from './senseiDashComponets/CourseForm';
import CourseAttending from './senseiDashComponets/CourseAttending';
import CourseFormEdit from './senseiDashComponets/CourseFormEdit';


const IndexSenseiComponents = () => {
    return (     
        <div className="IndexSenseiComponents">
          
             <SenseiDashHeader></SenseiDashHeader>
                <Route  exact path='/senseidash/senseiclasstable' component={SenseiClassTable} ></Route>
                <Route  exact path='/senseidash/courseform' component={CourseForm} ></Route>
                <Route  exact path='/senseidash/courseattending' component={CourseAttending} ></Route>
                <Route  exact path='/senseidash/courseformedit' component={CourseFormEdit} ></Route>
          
       </div>
    )
}

export default IndexSenseiComponents
