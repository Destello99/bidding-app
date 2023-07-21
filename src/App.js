// import { 
//   BrowserRouter,
//   Routes,
//   Route, 
// } from "react-router-dom";

import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
