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
import Contact from './pages/contact';
import Work from './pages/work';

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
        <Route path='/contact' exact component={Contact} /> 
        <Route path='/work' exact component={Work} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
