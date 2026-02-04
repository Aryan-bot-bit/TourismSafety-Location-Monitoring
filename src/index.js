// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import HomePage from "./landing_page/home/HomePage";
// import Signup from "./landing_page/signup/Signup";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductsPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import Navbar from "./landing_page/Navbar";
// import Footer from "./landing_page/Footer";
// import NotFound from "./landing_page/NotFound";
// import Login from "./landing_page/signup/Login";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//   <Navbar/>
//     <Routes>
//       <Route path="/" element={<HomePage />}/>
        
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/product" element={<ProductPage />} />
//       <Route path="/pricing" element={<PricingPage />} />
//       <Route path="/support" element={<SupportPage />} />
//             <Route path="*" element={<NotFound />} />

//     </Routes>
//     <Footer/>
//   </BrowserRouter>
// );




// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
// import HomePage from "./landing_page/home/HomePage";
// import Signup from "./landing_page/signup/Signup";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductsPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import Navbar from "./landing_page/Navbar";
// import Footer from "./landing_page/Footer";
// import NotFound from "./landing_page/NotFound";
// import Login from "./landing_page/signup/Login";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <BrowserRouter>
//       <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);



import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/signup/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/'); // Redirect to home page after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
