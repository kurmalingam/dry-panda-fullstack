import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ContactModal from './components/ContactModal/ContactModal';
import AuthPage from './pages/AuthPage';
import InternshipPage from './pages/InternshipPage';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <BrowserRouter>
      {/* Navbar receives login state and handler */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ContactModal />
      
     
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>} />
        <Route path='/auth/*' element={<AuthPage setIsLoggedIn={setIsLoggedIn} />} />
         <Route path='/internship' element={<InternshipPage />} />
        {/* Add more routes here */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
