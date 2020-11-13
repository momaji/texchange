import './App.css';
import './homepage.js';
import './bootstrap_minty/bootstrap.min.css';
import HomePage from './homepage.js';
import TexNavbar from './navbar.js';
import data from './data.js'
//TexNavBar cannot be in a div otherwise sticky position will not work!!!
function App() {
  return (
    <div className="App">
      <TexNavbar/>
      <div className="page-content">
      <HomePage appData={data}/>
      </div>
    </div>
  );
}

export default App;
