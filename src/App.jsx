import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Toast from "./components/Toast";

import Hero from "./sections/Hero";
import CostEstimator from "./sections/CostEstimator";
import Products from "./sections/Products";
import MaterialGuide from "./sections/MaterialGuide";
import Services from "./sections/Services";
import About from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUs";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  const handleSelectProductForQuote = (productName) => {
    setSelectedProductForQuote(productName);
    showToast(`Added "${productName}" to enquiry form!`);
  };

  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      disable: "mobile" ? false : false,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".reveal, .reveal-scale");
      elements.forEach((el) => observer.observe(el));
      AOS.refresh();
    };

    observeElements();
    const timeout = setTimeout(observeElements, 500);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col pb-16 lg:pb-0 w-full max-w-full overflow-x-hidden relative">
      {/* Toast Notification Container */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage("")}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <Hero />
        <CostEstimator onShowToast={showToast} />
        <Products onSelectProductForQuote={handleSelectProductForQuote} />
        <MaterialGuide />
        <Services />
        <About />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact
          prefilledProduct={selectedProductForQuote}
          onShowToast={showToast}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Action Dock (WhatsApp, Mobile Call, Back to Top) */}
      <FloatingActions onCopyPhone={() => showToast("Phone number copied!")} />
    </div>
  );
}

export default App;