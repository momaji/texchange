import logo from './logo.svg';
import './App.css';
import './homepage.js';
import './bootstrap_minty/bootstrap.min.css';
import HomePage from './homepage.js';
import data from './data.js'

function App() {
  return (
    <div className="App">
      <h1>TexChange</h1>
      <p>react app starts here....</p>
      <HomePage appData={data}/>
    </div>
  );
}

export default App;
