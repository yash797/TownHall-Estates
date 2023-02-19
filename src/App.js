import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Components/Shared/navbar";
import Footer from "./Components/Shared/footer";

function App() {
  return (
      <div className="cont max-w-[1440px] h-12 md:mx-32 mx-12 mt-36 ">
        {/* <div className="bg-scroll" style="background-image: url(../../Assets/bg-body.png)"></div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
