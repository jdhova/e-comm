import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Nav  from './pages/components/Nav';
import {Signin} from './pages/Signin';
// import Signout from './pages/Signout';
import Dashboard from './pages/Dashboard';
import Home from './pages/components/Home';
import { AuthContextProvider } from './context/AuthContext';
import Protect from './pages/Protect';

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
              {/* <Route path="/signout" element={ <Signout />} /> */}
             
              <Route path="/dashboard"
               element={<Protect> 
                        <Dashboard /> 
                        </Protect>} />
              
        </Routes>
      </AuthContextProvider>
    </div>
    </Router>
  );
}

export default App;
