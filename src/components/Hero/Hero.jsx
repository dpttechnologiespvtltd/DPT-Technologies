import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Sparkles,
} from "lucide-react";

import techIllustration from "../../assets/technology-illustration.svg";
import heroCoding from "../../assets/hero-coding.jpg";

import "./Hero.css";

function Hero() {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const services = document.getElementById("services");

    if (services) {
      services.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="hero">

      {/* Real hero background image */}
      <img
        className="hero-background-image"
        src={heroCoding}
        alt="Developer coding on a laptop"
        aria-hidden="true"
      />
      <div className="hero-image-overlay" />

      {/* Background effects */}

      <div className="hero-gradient hero-gradient-one" />
      <div className="hero-gradient hero-gradient-two" />
      <div className="hero-grid" />

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <motion.div
            className="hero-badge"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <Sparkles size={15} />

            <span>
              INNOVATION • AUTOMATION • GROWTH
            </span>
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            Empowering Businesses
            <br />

            <span className="hero-highlight">
              Through Technology
            </span>
          </motion.h1>


          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.7,
            }}
          >
            We build intelligent digital solutions
            that help businesses automate operations,
            improve productivity, and accelerate
            growth.
          </motion.p>


          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.7,
            }}
          >

            <button
              className="hero-primary-button"
              onClick={scrollToServices}
            >
              <span>Explore Solutions</span>

              <span className="hero-button-icon">
                <ArrowUpRight size={18} />
              </span>
            </button>


            <button
              className="hero-secondary-button"
              onClick={scrollToContact}
            >
              Schedule a Free Consultation
            </button>

          </motion.div>


          <motion.div
            className="hero-trust"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >
            <span>AI-FIRST</span>
            <span>SCALABLE</span>
            <span>SECURE</span>
            <span>FUTURE-READY</span>
          </motion.div>

        </motion.div>


        {/* RIGHT VISUAL */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >

          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />


          {/* Floating cards */}

          <motion.div
            className="hero-floating-card card-ai"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Bot size={20} />

            <div>
              <strong>AI Solutions</strong>
              <span>Intelligent Automation</span>
            </div>
          </motion.div>


          <motion.div
            className="hero-floating-card card-code"
            animate={{
              y: [0, 9, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Code2 size={20} />

            <div>
              <strong>Custom Software</strong>
              <span>Scalable Products</span>
            </div>
          </motion.div>


          <motion.div
            className="hero-floating-card card-cloud"
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cloud size={20} />

            <div>
              <strong>Cloud Ready</strong>
              <span>Secure Infrastructure</span>
            </div>
          </motion.div>

        </motion.div>

      </div>


      {/* Bottom scroll indicator */}

      <motion.div
        className="hero-scroll"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.7,
          repeat: Infinity,
        }}
      >
        <span>SCROLL TO EXPLORE</span>

        <div className="hero-scroll-line" />
      </motion.div>

    </section>
  );
}

export default Hero;