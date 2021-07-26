import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <Navbar />
        </header>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
