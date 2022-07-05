import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Nav  from './components/Nav';
import { Signin } from './pages/Signin';
import Signout from './pages/Signout';
import Home from './components/Home';

function App() {
  return (
    <Router> 
    <div className="App">
    <header className="App-header"></header>
    <Nav />
    <Routes> 
          <Route path="/" element={ <Home />} />
          <Route path="/signin" element={ <Signin />} />
          <Route path="/signout" element={ <Signout />} />
    </Routes>
    
    </div>
    </Router>
  );
}

export default App;
