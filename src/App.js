import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import UseCases from "./pages/UseCases";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* 404 route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
