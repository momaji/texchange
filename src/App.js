import logo from './logo.svg';
import './App.css';
import './homepage.js';
import './YourProfile.js';
import './bootstrap_minty/bootstrap.min.css';
import { Container, Row, Col, Dropdown, Form, Image, Button } from 'react-bootstrap';
import HomePage from './homepage.js';
import YourProfile from './YourProfile.js';
import data from './data.js'
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-primary">
          <Button as={NavLink} exact to="/"><h1>TexChange</h1></Button>
          <Button as={NavLink} to="/yourprofile" className="float-right">Profile</Button>
        </div>
        <Route exact path="/" render={(props) => <HomePage {...props} appData={data} />} />
        <Route exact path="/yourprofile" component={YourProfile}/>
      </div>
    </Router>
  );
}

export default App;
