import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Nav  from './pages/components/Nav';
import { Signin } from './pages/Signin';
import Signout from './pages/Signout';
import Home from './pages/components/Home';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <Router> 
    <div className="App">
    <header className="App-header"></header>
    <AuthContextProvider>
      <Nav />
        <Routes> 
              <Route path="/" element={ <Home />} />
              <Route path="/signin" element={ <Signin />} />
              <Route path="/signout" element={ <Signout />} />
        </Routes>
      </AuthContextProvider>
    </div>
    </Router>
  );
}

export default App;
