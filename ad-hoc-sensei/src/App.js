import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components'
import {Home} from './pages'
import {Login} from './pages'
import {Register} from './pages'





function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <Navigation />
        <Switch>

        
         
          

          <Route exact path='/home/' component={Home} />
    
          <Route exact path='/home/login' component={Login} />

          <Route  exact path='/home/register' component={Register} />
          

        </Switch>
      </BrowserRouter>

         
    </div>
  );
}

export default App;
