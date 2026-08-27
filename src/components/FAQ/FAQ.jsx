
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

import "./FAQ.css";

const faqItems = [
  {
    question: "What industries do you serve?",
    answer:
      "We work with startups, SMEs, and enterprises across multiple industries including manufacturing, healthcare, education, finance, logistics, retail, and more.",
  },
  {
    question: "Do you build AI-powered applications?",
    answer:
      "Yes. We specialize in AI chatbots, AI voice agents, workflow automation, and custom AI-powered business solutions.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes. We provide ongoing maintenance, upgrades, security updates, and technical support to help your technology continue performing reliably.",
  },
  {
    question: "Can you develop custom software?",
    answer:
      "Absolutely. Every solution is tailored to your business requirements, workflows, objectives, and scalability needs.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      {/* Background Elements */}
      <div className="faq-grid" />
      <div className="faq-glow faq-glow-one" />
      <div className="faq-glow faq-glow-two" />

      <div className="faq-container">
        {/* HEADER */}
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="faq-label">
              <span />
              FAQ
            </span>

            <h2>
              Questions?
              <span> We have answers.</span>
            </h2>
          </div>

          <p>
            Find answers to some of the most common questions
            about our technology solutions, AI capabilities,
            development services, and long-term support.
          </p>
        </motion.div>

        {/* FAQ CONTENT */}
        <div className="faq-layout">
          {/* LEFT INFO CARD */}
          <motion.div
            className="faq-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <div className="faq-info-number">04</div>

            <div className="faq-info-content">
              <span>COMMON QUESTIONS</span>

              <h3>
                Technology should
                <strong> simplify business.</strong>
              </h3>

              <p>
                Whether you need custom software, AI solutions,
                automation, or ongoing technical support, our
                team is ready to help you find the right approach.
              </p>
            </div>

            <div className="faq-info-footer">
              <span>NEED MORE INFORMATION?</span>

              <a href="#contact">
                Talk to our team
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* QUESTIONS */}
          <motion.div
            className="faq-list"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            {faqItems.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className={`faq-item ${
                    isActive ? "active" : ""
                  }`}
                  key={item.question}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isActive}
                  >
                    <div className="faq-question-left">
                      <span className="faq-number">
                        0{index + 1}
                      </span>

                      <span className="faq-question-text">
                        {item.question}
                      </span>
                    </div>

                    <span className="faq-plus">
                      <Plus
                        size={17}
                        strokeWidth={1.8}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="faq-answer-wrapper"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="faq-answer">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

