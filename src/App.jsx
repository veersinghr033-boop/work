import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      {/* Toast Notification Container */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage("")}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
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