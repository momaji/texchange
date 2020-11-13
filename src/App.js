import './App.css';
import './homepage.js';
import './bootstrap_minty/bootstrap.min.css';
import TexNavbar from './navbar.js';

//TexNavBar cannot be in a div otherwise sticky position will not work!!!
function App() {
  return (
    <div className="App">
      <TexNavbar/>
      <div className="page-content">
      
      </div>
    </div>
  );
}

export default App;
