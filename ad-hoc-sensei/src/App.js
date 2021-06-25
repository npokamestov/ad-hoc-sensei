import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components'
import {Home} from './pages'
import {Login} from './pages'
import {Register} from './pages'





function App() {
  return (
    <div className="App">

          <Navigation />
          {/* <Home /> */}
          {/* <Login /> */}
          <Register />
    </div>
  );
}

export default App;
