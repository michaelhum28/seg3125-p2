import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Services from './Services';
import Reviews from './Reviews';
import './App.css';
import Planworkout from './Planworkout';
import Plannutrition from './Plannutrition';

//things to add for personas: note workouts, nutrition meals
//also change the plans page because it sucks

const About = () => <h1>About Page</h1>;

function App() {
  const [scrollToContact, setScrollToContact] = useState(false);

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [scrollToContact]);

  return (
    <Router>
      <Navbar setScrollToContact={setScrollToContact} />
      <Routes>
        <Route path="/" element={<LandingPage scrollToContact={scrollToContact} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/planworkout" element={<Planworkout />} />
        <Route path="/plannutrition" element={<Plannutrition />} />
      </Routes>
    </Router>
  );
}

export default App;
