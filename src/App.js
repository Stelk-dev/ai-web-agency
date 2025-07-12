import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import UseCasesPage from "./pages/UseCasesPage";
import UseCasePage from "./pages/usecases/UseCasePage";
import Services from "./pages/Services";
import { useAllCases } from "./UseCases";

function App() {
  const allCases = useAllCases();
  useEffect(() => {
    // Detect and save browser language to localStorage
    const browserLanguage =
      navigator.language || navigator.languages[0] || "en";
    console.log(browserLanguage);
    localStorage.setItem("lng", browserLanguage.split("-")[0] || "it");
  }, []);

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

          {allCases.map((item) => (
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
