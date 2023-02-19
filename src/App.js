import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Files/Home";
import Navbar from "./Components.js/navbar";
import Footer from "./Components.js/footer";

function App() {
  return (
    <div className="max-w-[1440px] h-12 md:mx-32 mx-12 bg-white mt-32">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
