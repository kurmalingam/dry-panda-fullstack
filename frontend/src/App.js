import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ContactModal from './components/ContactModal/ContactModal';
import AuthPage from './pages/AuthPage';
import InternshipPage from './pages/InternshipPage';
import GlitterText from './components/GlitterText/GlitterText';
import './App.css';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <ContactModal />

        <Routes>
          <Route path="/" element={
            <>
            <GlitterText />
            </>
           }/>
          <Route path="/auth/*" element={<AuthPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/internship" element={<InternshipPage />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
