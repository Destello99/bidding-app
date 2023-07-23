import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import HeroSection from "./component/HeroSection";
import Aboutus from "./page/Aboutus";
import Footer from "./component/Footer";
import Login from "./page/Login";
import Navbar from "./component/Navbar"
function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/login" element={<Login setIsLoginPage={setIsLoginPage} />} />
        <Route path="/signup" element={<Aboutus />} />
        <Route path="/Contact" element={<Aboutus />} />
      </Routes>
      {!isLoginPage && <Footer></Footer>}
    </>
  );
}

export default App;