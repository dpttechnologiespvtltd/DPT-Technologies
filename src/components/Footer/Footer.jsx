
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import dptLogo from "../../assets/dpt-logo.png";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Technologies", href: "#technologies" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    "Artificial Intelligence",
    "Custom Software",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "Automation",
    "Data Analytics",
  ];

  return (
    <footer className="footer-section">

      {/* Background */}
      <div className="footer-grid" />
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-container">

        {/* ================= CTA ================= */}

        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="footer-cta-content">

            <span className="footer-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's create something
              <span> remarkable.</span>
            </h2>

            <p>
              Turn your ideas into intelligent, scalable,
              and future-ready digital products with
              DPT Technologies.
            </p>

          </div>

          <a
            href="#contact"
            className="footer-cta-button"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>


        {/* ================= MAIN FOOTER ================= */}

        <div className="footer-main">

          {/* BRAND */}

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <a
              href="#home"
              className="footer-logo"
            >
              <img
                src={dptLogo}
                alt="DPT Technologies"
              />
            </a>

            <p>
              DPT Technologies builds intelligent digital
              solutions that help businesses automate
              operations, improve productivity, and
              accelerate growth.
            </p>

            {/* Simple Social Buttons */}

            <div className="footer-socials">

              <a
                href="#"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M6.94 8.5H3.27V20h3.67V8.5ZM5.1 3A2.15 2.15 0 1 0 5.1 7.3 2.15 2.15 0 0 0 5.1 3ZM20.73 13.41c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.67v-5.69c0-1.5.29-2.95 2.14-2.95 1.82 0 1.85 1.72 1.85 3.05V20h3.71v-6.59Z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="footer-social"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.4" cy="6.7" r="1.15" fill="currentColor"/>
                </svg>
              </a>

              <a
                href="mailto:dpttechnologiespvtltd@gmail.com"
                aria-label="Email"
                className="footer-social"
              >
                @
              </a>

            </div>

          </motion.div>


          {/* QUICK LINKS */}

          <motion.div
            className="footer-column"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.05,
            }}
          >

            <span className="footer-column-title">
              EXPLORE
            </span>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>

                  <a href={link.href}>
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} />
                  </a>

                </li>
              ))}
            </ul>

          </motion.div>


          {/* SERVICES */}

          <motion.div
            className="footer-column footer-services"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <span className="footer-column-title">
              SERVICES
            </span>

            <ul>
              {serviceLinks.map((service) => (
                <li key={service}>

                  <a href="#services">
                    <span>{service}</span>
                    <ArrowUpRight size={12} />
                  </a>

                </li>
              ))}
            </ul>

          </motion.div>


          {/* CONTACT */}

          <motion.div
            className="footer-column footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
          >

            <span className="footer-column-title">
              GET IN TOUCH
            </span>


            {/* EMAIL */}

            <a
              href="mailto:dpttechnologiespvtltd@gmail.com"
              className="footer-contact-item"
            >

              <Mail size={16} />

              <div>

                <small>
                  EMAIL
                </small>

                <strong>
                  dpttechnologiespvtltd@gmail.com
                </strong>

              </div>

            </a>


            {/* PHONE */}

            <a
              href="tel:+917065300376"
              className="footer-contact-item"
            >

              <Phone size={16} />

              <div>

                <small>
                  PHONE
                </small>

                <strong>
                  +91 70653 00376
                </strong>

              </div>

            </a>


            {/* ADDRESS */}

            <div
              className="
                footer-contact-item
                footer-address
              "
            >

              <MapPin size={16} />

              <div>

                <small>
                  OFFICE
                </small>

                <strong>
                  626B, Tower B2, 6th Floor,
                  SPAZE I–TECH PARK,
                  Sector 49, Sohna Road,
                  Gurgaon – 122018,
                  Haryana, India
                </strong>

              </div>

            </div>

          </motion.div>

        </div>


        {/* ================= TECHNOLOGY STRIP ================= */}

        <motion.div
          className="footer-tech-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span>
            TECHNOLOGY
          </span>

          <div className="footer-tech-list">

            <span>AI & ML</span>
            <i />

            <span>SOFTWARE</span>
            <i />

            <span>CLOUD</span>
            <i />

            <span>AUTOMATION</span>
            <i />

            <span>DATA</span>
            <i />

            <span>MOBILE</span>

          </div>

        </motion.div>


        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            © {currentYear} DPT Technologies.
            All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#home">
              Privacy Policy
            </a>

            <span />

            <a href="#home">
              Terms & Conditions
            </a>

          </div>

          <a
            href="#home"
            className="footer-back-top"
            aria-label="Back to top"
          >
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

