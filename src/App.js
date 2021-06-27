//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import IndexHomeComponents from './components/IndexHomeComponents';
import IndexSenseiComponents from './components/IndexSenseiComponents';
import IndexStudentComponents from './components/IndexStudentComponents';






function App() {
  return (
    <div className="App">

      <BrowserRouter>
         <Switch>    
          
              {/* <Route  exact path='/' component={IndexHomeComponents} /> */}

              <Route  exact path='/senseidash/*' component={IndexSenseiComponents} />

              <Route  exact path='/studentdash/*' component={IndexStudentComponents} />

              <Route  exact path='/' component={IndexHomeComponents} />

              

        </Switch>
      </BrowserRouter>

         
    </div>
  );
}

export default App;
