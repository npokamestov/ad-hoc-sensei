import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {SenseiDashHeader} from './components'
import {SenseiClassTable} from './components'
import {CourseForm} from './components'

const IndexSenseiComponents = () => {
    return (     
        <div className="IndexSenseiComponents">
          <Route>
             <SenseiDashHeader></SenseiDashHeader>
                <Route  exact path='/senseidash/senseiclasstable' component={SenseiClassTable} />
                <Route  exact path='/senseidash/courseform' component={CourseForm} />
          </Route>
       </div>
    )
}

export default IndexSenseiComponents
