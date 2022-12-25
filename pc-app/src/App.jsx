import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Stock from './components/Stock';
import Add from './components/Add';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  
  return (
    <Router>
      <>
        <Navbar isLogged={isLogged}/>
        <Routes>
            <Route path="/" element={<Home isLogged={isLogged}/>} />
            <Route path="/login" element={<Login isLogged={isLogged}/>} />
            <Route path="/register" element={<Register isLogged={isLogged}/>} />
            <Route path="/stock" element={<Stock isLogged={isLogged}/>} />
            <Route path="/stock/:id" element={<Stock isLogged={isLogged}/>} />
            <Route path="/add" element={<Add isLogged={isLogged}/>} />
            {/* put */}
            {/* delete */}
        </Routes>
      </>
    </Router>
  )
}

export default App;
