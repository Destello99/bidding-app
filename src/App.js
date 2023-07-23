import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HeroSection from "./component/HeroSection";
import Aboutus from "./page/Aboutus";
import TempNavbar from "./component/TempNavbar";
import TempFooter from "./component/TempFooter";
import Login from "./page/Login";
function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);

  return (
    <>
      <TempNavbar></TempNavbar>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/login" element={<Login setIsLoginPage={setIsLoginPage} />} />
        <Route path="/signup" element={<Aboutus />} />
        <Route path="/Contact" element={<Aboutus />} />
      </Routes>
      {!isLoginPage && <TempFooter></TempFooter>}
    </>
  );
}

export default App;