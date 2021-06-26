import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import IndexHomeComponents from './IndexHomeComponents';
import IndexSenseiComponents from './IndexSenseiComponents';
import IndexStudentComponents from './IndexStudentComponents';





function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Switch>    

           <Route  exact path='/' component={IndexHomeComponents} />

              <Route  exact path='/senseidash/' component={IndexSenseiComponents} />

              <Route  exact path='/studentdash/' component={IndexStudentComponents} />

        </Switch>
      </BrowserRouter>

         
    </div>
  );
}

export default App;
