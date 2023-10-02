import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Characters from './Characters';
import About from './About';
import Login from './Login';
import Details from './Details';
import Signup from './Signup';
import Navbar from './Navbar';

function App() {  
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>  );
}

export default App;
