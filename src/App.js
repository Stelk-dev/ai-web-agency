import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import UseCases from "./pages/UseCases";
import UseCasePage from "./pages/usecases/UseCasePage";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/use-case/suprem-milk"
            element={<UseCasePage name={"Suprem Milk"} />}
          />
          <Route
            path="/use-case/n-and-group"
            element={<UseCasePage name={"N and Group"} />}
          />
          <Route
            path="/use-case/the-legacy"
            element={<UseCasePage name={"The Legacy"} />}
          />
          <Route
            path="/use-case/retail-tune"
            element={<UseCasePage name={"Retail Tune"} />}
          />

          {/* 404 route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
