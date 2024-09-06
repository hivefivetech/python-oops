import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// import Footer from './componentsProject/Footer';
// import Navbar from './componentsProject/Navbar';
import MainContent from './pages/HomePage';
import MainAboutUs from './pages/AboutUsPage';
import MainFeatures from './pages/FeaturesPage';
import MainBlog from './pages/BlogPage';
import MainPricing from './pages/PricingPage';
import MainDemo from './pages/DemoPage';
import MainContact from './pages/ContactPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import MainLogin from './pages/LoginPage';

function getToken() {
  const tokenString = localStorage.getItem('tokenAiRemovals');
  const userToken = JSON.parse(tokenString);
  return userToken
}

function App() {
  const [token, setToken] = useState(getToken());
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<MainContent user_details={token} />} />
        <Route path="/login" element={token?<Navigate to='/'/>:<MainLogin set_token={setToken} />} />
        <Route path="/aboutus" element={<MainAboutUs />} />
        <Route path="/features" element={<MainFeatures />} />
        <Route path="/blog" element={<MainBlog />} />
        <Route path="/pricing" element={<MainPricing />} />
        <Route path="/demo" element={<MainDemo  />} />
        <Route path="/contact" element={<MainContact />} />
        <Route exact path="/create_subscription" Component={PaymentPage} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
