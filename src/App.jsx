import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Services from "./pages/Services";
import JobApplication from "./pages/JobApplication";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={loading ? "site-loading" : "site-loaded"}>
        {/* يرجّع الصفحة لأولها عند تغيير المسار */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="jobs" element={<JobApplication />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;