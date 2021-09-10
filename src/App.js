
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginForm from './components/wrappers/login-form'
import Home from './components/wrappers/home-component'
import './components/styles/login-form.css'
import './components/styles/home-wrapper.css'


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
