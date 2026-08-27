import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import dptLogo from "../../assets/dpt-logo.png";

import "./Navbar.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Industries", id: "industries" },
  { label: "Process", id: "process" },
  { label: "Technologies", id: "technologies" },
  { label: "FAQ", id: "faq" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= 160) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      setMenuOpen(false);
      return;
    }

    const navbarHeight = window.innerWidth <= 850 ? 72 : 82;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          MAIN NAVBAR
      ========================== */}

      <motion.header
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-inner">

          {/* =========================
              LOGO
          ========================== */}

          <button
            className="navbar-logo"
            onClick={() => scrollToSection("home")}
            aria-label="DPT Technologies Home"
          >
            <img
              src={dptLogo}
              alt="DPT Technologies"
            />
          </button>


          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <nav
            className="navbar-links"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`navbar-link ${
                  activeSection === item.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  scrollToSection(item.id)
                }
              >
                <span>{item.label}</span>

                <span className="navbar-active-line" />
              </button>
            ))}
          </nav>


          {/* =========================
              CONTACT CTA
          ========================== */}

          <button
            className="navbar-cta"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            <span>Let's Talk</span>

            <span className="navbar-cta-icon">
              <ArrowUpRight size={17} />
            </span>
          </button>


          {/* =========================
              MOBILE BUTTON
          ========================== */}

          <button
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </motion.header>


      {/* =========================
          MOBILE MENU
      ========================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="mobile-menu-inner">

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`mobile-nav-link ${
                    activeSection === item.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                >
                  <span className="mobile-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <strong>{item.label}</strong>

                  {activeSection === item.id && (
                    <span className="mobile-active-dot" />
                  )}
                </motion.button>
              ))}


              {/* Mobile CTA */}

              <button
                className="mobile-cta"
                onClick={() =>
                  scrollToSection("contact")
                }
              >
                <span>
                  Let's Build Something
                </span>

                <ArrowUpRight size={18} />
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;