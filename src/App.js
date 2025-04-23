import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import UseCasesPage from "./pages/UseCasesPage";
import UseCasePage from "./pages/usecases/UseCasePage";
import Services from "./pages/Services";
import { AllCases } from "./UseCases";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {AllCases.map((item) => (
            <Route
              key={item.route}
              path={item.route}
              element={<UseCasePage />}
            />
          ))}

          {/* 404 route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
