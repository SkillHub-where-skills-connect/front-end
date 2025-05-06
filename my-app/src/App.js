import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/loginpage/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/loginpage/ForgotPassword';
import Community from '../src/Components/Community/Community';
import About from '../src/Components/AboutUs/AboutUs';
import ContactUs from'./Components/Contactus/ContactUs';
import Events from './Components/Events/Events';
import SkillsServices from'./Components/SkillsServices/SkillsServices';
import SupportFAQs from './Components/SupportFAQs/SupportFAQs';
import License from './Components/Licenses/License';

function App() {
  return (
  
    <Router>
         
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<ContactUs/>} />
       <Route path="/events" element={<Events/>} />
       <Route path="/skills-services" element={<SkillsServices/>} />
       <Route path="/support-faqs" element={<SupportFAQs/>} />
       <Route path="/license" element={<License />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
      </Routes>
    </Router>
  );
}

export default App;