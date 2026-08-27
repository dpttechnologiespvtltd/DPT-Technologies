
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Process from "./components/Process/Process";
import Technologies from "./components/Technologies/Technologies";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <Navbar />

      <main>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Industries Section */}
        <Industries />

        {/* Why Choose DPT Section */}
        <WhyChooseUs />

        {/* Development Process */}
        <Process />

        {/* Technology Stack */}
        <Technologies />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Section */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
