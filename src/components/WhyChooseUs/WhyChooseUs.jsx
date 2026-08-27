import { motion } from "framer-motion";
import {
  UsersRound,
  BrainCircuit,
  ShieldCheck,
  Workflow,
  MessageSquareText,
  Layers3,
  Headphones,
  Clock3,
  WalletCards,
  HeartHandshake,
  ArrowUpRight,
  Check,
} from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Experienced Technology Team",
    description:
      "A skilled team combining technical expertise, strategic thinking, and modern development practices.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "AI-First Development Approach",
    description:
      "We use artificial intelligence to create smarter products, automate operations, and improve decision-making.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Scalable & Secure Solutions",
    description:
      "Our solutions are designed to remain reliable, secure, and scalable as your business grows.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Agile Development Process",
    description:
      "An iterative development approach that keeps projects flexible, transparent, and focused on business goals.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Transparent Communication",
    description:
      "Clear communication and regular updates keep you informed throughout every stage of development.",
    icon: MessageSquareText,
  },
  {
    number: "06",
    title: "End-to-End Development",
    description:
      "From strategy and design to development, deployment, and support, we handle the complete product journey.",
    icon: Layers3,
  },
  {
    number: "07",
    title: "Long-Term Technical Support",
    description:
      "Continuous maintenance, improvements, upgrades, and technical assistance after launch.",
    icon: Headphones,
  },
  {
    number: "08",
    title: "On-Time Project Delivery",
    description:
      "Structured planning and development practices help us deliver projects efficiently and on schedule.",
    icon: Clock3,
  },
  {
    number: "09",
    title: "Affordable Engagement Models",
    description:
      "Flexible engagement options designed to provide strong technology value for businesses of different sizes.",
    icon: WalletCards,
  },
  {
    number: "10",
    title: "Customer-Centric Approach",
    description:
      "We build around your business objectives and focus on creating measurable outcomes for your organization.",
    icon: HeartHandshake,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section">
      {/* Decorative background */}
      <div className="why-grid" />
      <div className="why-glow why-glow-one" />
      <div className="why-glow why-glow-two" />

      <div className="why-container">
        {/* HEADER */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="why-heading">
            <span className="why-label">
              WHY DPT TECHNOLOGIES
            </span>

            <h2>
              More than a technology
              <span> partner.</span>
            </h2>
          </div>

          <div className="why-intro">
            <p>
              We combine technology, innovation, and business
              understanding to build solutions that create
              lasting value.
            </p>
          </div>
        </motion.div>

        {/* MAIN FEATURE */}
        <motion.div
          className="why-feature"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className="why-feature-left">
            <div className="why-feature-badge">
              <span className="why-pulse" />
              BUILT FOR BUSINESS
            </div>

            <h3>
              Technology that
              <br />
              <span>moves your business forward.</span>
            </h3>

            <p>
              Whether you are launching an MVP, automating
              business workflows, or building enterprise-grade
              software, DPT Technologies focuses on creating
              secure, scalable, and future-ready solutions.
            </p>

            <a href="#contact" className="why-feature-link">
              Start your project
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="why-feature-right">
            <div className="why-orbit orbit-one">
              <span />
            </div>

            <div className="why-orbit orbit-two">
              <span />
            </div>

            <div className="why-core">
              <BrainCircuit size={42} strokeWidth={1.4} />

              <strong>DPT</strong>

              <small>TECHNOLOGY</small>
            </div>

            <div className="why-floating-card floating-card-one">
              <Check size={13} />
              <span>Secure</span>
            </div>

            <div className="why-floating-card floating-card-two">
              <Check size={13} />
              <span>Scalable</span>
            </div>

            <div className="why-floating-card floating-card-three">
              <Check size={13} />
              <span>Intelligent</span>
            </div>
          </div>
        </motion.div>

        {/* REASONS */}
        <div className="why-reasons">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                className="why-card"
                key={reason.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
              >
                <div className="why-card-top">
                  <span className="why-card-number">
                    {reason.number}
                  </span>

                  <div className="why-card-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    className="why-card-arrow"
                    size={16}
                  />
                </div>

                <h4>{reason.title}</h4>

                <p>{reason.description}</p>

                <div className="why-card-line">
                  <span />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM */}
        <motion.div
          className="why-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="why-bottom-text">
            <span>READY TO BUILD?</span>

            <h3>
              Let's turn your idea into
              <span> something extraordinary.</span>
            </h3>
          </div>

          <a href="#contact" className="why-bottom-button">
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;