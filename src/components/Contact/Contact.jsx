
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background */}
      <div className="contact-grid" />
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="contact-label">
              <span />
              CONTACT DPT TECHNOLOGIES
            </span>

            <h2>
              Let's build something
              <span> extraordinary.</span>
            </h2>
          </div>

          <p>
            Have an idea, business challenge, or technology
            requirement? Tell us what you're building and our
            team will help you find the right digital solution.
          </p>
        </motion.div>

        {/* MAIN CONTACT AREA */}
        <div className="contact-layout">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-info-top">
              <span className="contact-number">01</span>

              <h3>
                Transforming ideas into
                <strong> intelligent digital solutions.</strong>
              </h3>

              <p>
                From AI-powered applications and custom software
                to automation, cloud, mobile, and enterprise
                solutions, DPT Technologies helps businesses
                turn ideas into scalable digital products.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="contact-details">

              <a
                href="mailto:dpttechnologiespvtltd@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>
                    dpttechnologiespvtltd@gmail.com
                  </strong>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={15}
                />
              </a>

              <a
                href="tel:+917065300376"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Phone size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <span>PHONE</span>
                  <strong>+91 70653 00376</strong>
                </div>

                <ArrowUpRight
                  className="contact-detail-arrow"
                  size={15}
                />
              </a>

              <div className="contact-detail contact-location">
                <div className="contact-detail-icon">
                  <MapPin size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <span>OFFICE</span>
                  <strong>
                    626B, Tower B2, 6th Floor,
                    SPAZE I–TECH PARK,
                    Sector 49, Sohna Road,
                    Gurgaon – 122018, Haryana
                  </strong>
                </div>
              </div>

            </div>

            {/* BOTTOM TAG */}
            <div className="contact-info-bottom">
              <div className="contact-status">
                <span />
                READY TO BUILD
              </div>

              <p>
                Innovation • Automation • Growth
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form-heading">
              <span>START A CONVERSATION</span>

              <h3>
                Tell us about
                <strong> your project.</strong>
              </h3>
            </div>

            {submitted ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2
                  size={48}
                  strokeWidth={1.4}
                />

                <h3>Message Ready!</h3>

                <p>
                  Thank you for reaching out to DPT
                  Technologies. Our team will get back to you.
                </p>
              </motion.div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="name">
                      YOUR NAME
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email">
                      EMAIL ADDRESS
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                </div>

                <div className="contact-form-row">

                  <div className="contact-field">
                    <label htmlFor="phone">
                      PHONE NUMBER
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="company">
                      COMPANY
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company name"
                    />
                  </div>

                </div>

                <div className="contact-field">
                  <label htmlFor="service">
                    WHAT DO YOU NEED?
                  </label>

                  <select id="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="ai">
                      Artificial Intelligence
                    </option>

                    <option value="software">
                      Custom Software Development
                    </option>

                    <option value="web">
                      Web Development
                    </option>

                    <option value="mobile">
                      Mobile App Development
                    </option>

                    <option value="automation">
                      Automation Solutions
                    </option>

                    <option value="cloud">
                      Cloud & DevOps
                    </option>

                    <option value="uiux">
                      UI/UX Design
                    </option>

                    <option value="analytics">
                      Data Analytics
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="message">
                    PROJECT DETAILS
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us about your project, requirements, or business challenge..."
                    required
                  />
                </div>

                <div className="contact-form-footer">

                  <p>
                    By submitting this form, you agree to
                    be contacted by our team regarding your
                    enquiry.
                  </p>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    <span>Send Enquiry</span>

                    <Send
                      size={16}
                      strokeWidth={1.8}
                    />
                  </button>

                </div>

              </form>
            )}
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>INDIA • GLOBAL DELIVERY</span>

            <h3>
              Your technology partner for
              <strong> innovation, automation & growth.</strong>
            </h3>
          </div>

          <a
            href="mailto:dpttechnologiespvtltd@gmail.com"
            className="contact-bottom-button"
          >
            <span>Connect With Us</span>
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;

