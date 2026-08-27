import { motion } from "framer-motion";
import {
  Search,
  Map,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react";

import "./Process.css";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your business requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description: "Creating a strategic roadmap.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design",
    description: "Designing intuitive user experiences.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Develop",
    description: "Building secure and scalable products.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Test",
    description: "Ensuring quality through rigorous testing.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Deploy",
    description: "Launching products with confidence.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Support",
    description:
      "Providing continuous maintenance and improvements.",
    icon: Headphones,
  },
];

function Process() {
  return (
    <section id="process" className="process-section">
      {/* Background elements */}
      <div className="process-grid" />
      <div className="process-glow process-glow-one" />
      <div className="process-glow process-glow-two" />

      <div className="process-container">
        {/* HEADER */}
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="process-label">
              HOW WE WORK
            </span>

            <h2>
              From idea to
              <span> impact.</span>
            </h2>
          </div>

          <p>
            A structured development process that transforms
            your business requirements into reliable,
            scalable, and future-ready digital solutions.
          </p>
        </motion.div>

        {/* PROCESS TIMELINE */}
        <div className="process-timeline">
          <div className="process-line">
            <span />
          </div>

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process-step"
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                <div className="process-step-number">
                  {step.number}
                </div>

                <div className="process-icon">
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                <div className="process-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

                {index !== processSteps.length - 1 && (
                  <ArrowRight
                    className="process-arrow"
                    size={16}
                  />
                )}
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          className="process-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="process-bottom-mark">
            <span />
            <span />
            <span />
          </div>

          <div className="process-bottom-text">
            <strong>
              A clear process. A better product.
            </strong>

            <p>
              Every stage is designed to keep your project
              aligned with your goals.
            </p>
          </div>

          <a
            href="#contact"
            className="process-bottom-link"
          >
            Start a conversation
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;