import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import { Navbar } from "./component/Navbar";
import Aboutus from "./page/Aboutus";
import TempNavbar from "./component/TempNavbar";
import TempFooter from "./component/TempFooter";

function App() {
  return (
    <>
      <TempNavbar></TempNavbar>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Aboutus/>} />        
        <Route path="/login" element={<Aboutus/>} />        
        <Route path="/signup" element={<Aboutus/>} />        
        <Route path="/Contact" element={<Aboutus/>} />        
      </Routes>
      {/* <Footer/> */}
      <TempFooter></TempFooter>

     
    </>

  );
}

export default App;
