import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Love from "./Love"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          123
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
          </>
        } />
        <Route path="/love" element={<Love />} />
      </Routes>


    </div>

  );
}

export default App;
