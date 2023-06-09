import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Naviration from "./components/Naviration";
import About from "./pages/About";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Naviration />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element ={<Resume/>} />
          <Route path="/Contact" element ={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
