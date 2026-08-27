import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

import "./Technologies.css";

const technologyCategories = [
  {
    id: "frontend",
    label: "Frontend",
    shortLabel: "01",
    icon: Code2,
    description:
      "Modern interfaces built for speed, usability, and responsive digital experiences.",
    technologies: [
      "React.js",
      "Next.js",
      "Angular",
      "Vue.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    shortLabel: "02",
    icon: Server,
    description:
      "Robust backend systems designed for performance, security, and scalability.",
    technologies: [
      "Node.js",
      "Python",
      "Java",
      ".NET",
      "PHP",
      "Laravel",
      "Django",
      "FastAPI",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    shortLabel: "03",
    icon: Smartphone,
    description:
      "High-performance mobile applications for Android, iOS, and cross-platform ecosystems.",
    technologies: [
      "Flutter",
      "React Native",
      "Android",
      "iOS",
    ],
  },
  {
    id: "database",
    label: "Database",
    shortLabel: "04",
    icon: Database,
    description:
      "Reliable data infrastructure for secure storage, processing, and real-time applications.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "Redis",
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    shortLabel: "05",
    icon: Cloud,
    description:
      "Cloud infrastructure and deployment technologies for reliable and scalable products.",
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    shortLabel: "06",
    icon: BrainCircuit,
    description:
      "Artificial intelligence and machine learning technologies powering intelligent solutions.",
    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
      "Vector Databases",
    ],
  },
];

function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      {/* Background */}
      <div className="technologies-grid" />
      <div className="technologies-glow technologies-glow-one" />
      <div className="technologies-glow technologies-glow-two" />

      <div className="technologies-container">
        {/* HEADER */}
        <motion.div
          className="technologies-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="technologies-heading">
            <span className="technologies-label">
              TECHNOLOGY STACK
            </span>

            <h2>
              Built with the
              <span> right technology.</span>
            </h2>
          </div>

          <div className="technologies-intro">
            <p>
              We choose modern, proven technologies based on
              your product requirements, scalability goals,
              performance needs, and long-term business vision.
            </p>
          </div>
        </motion.div>

        {/* TECHNOLOGY LAYOUT */}
        <div className="technologies-layout">
          {/* CATEGORY NAVIGATION */}
          <motion.div
            className="technology-nav"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <div className="technology-nav-heading">
              <span>EXPLORE</span>
              <small>TECH STACK</small>
            </div>

            {technologyCategories.map((category) => {
              const Icon = category.icon;

              return (
                <a
                  href={`#technology-${category.id}`}
                  className="technology-nav-item"
                  key={category.id}
                >
                  <div className="technology-nav-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  <span>{category.label}</span>

                  <small>{category.shortLabel}</small>

                  <ArrowUpRight
                    className="technology-nav-arrow"
                    size={15}
                  />
                </a>
              );
            })}
          </motion.div>

          {/* TECHNOLOGY CONTENT */}
          <div className="technology-content">
            {technologyCategories.map(
              (category, categoryIndex) => {
                const Icon = category.icon;

                return (
                  <motion.article
                    id={`technology-${category.id}`}
                    className="technology-category"
                    key={category.id}
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
                      duration: 0.55,
                      delay: categoryIndex * 0.05,
                    }}
                  >
                    <div className="technology-category-header">
                      <div className="technology-category-title">
                        <div className="technology-category-icon">
                          <Icon
                            size={21}
                            strokeWidth={1.6}
                          />
                        </div>

                        <div>
                          <span>
                            {category.shortLabel}
                          </span>

                          <h3>{category.label}</h3>
                        </div>
                      </div>

                      <p>{category.description}</p>
                    </div>

                    <div className="technology-list">
                      {category.technologies.map(
                        (technology, index) => (
                          <motion.div
                            className="technology-item"
                            key={technology}
                            initial={{
                              opacity: 0,
                              scale: 0.95,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.35,
                              delay: index * 0.035,
                            }}
                          >
                            <span className="technology-dot" />

                            <span>
                              {technology}
                            </span>

                            <ArrowUpRight
                              className="technology-item-arrow"
                              size={13}
                            />
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.article>
                );
              }
            )}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          className="technologies-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="technologies-bottom-left">
            <div className="technology-status">
              <span />
              TECHNOLOGY READY
            </div>

            <h3>
              The right stack for
              <span> your next product.</span>
            </h3>
          </div>

          <p>
            From frontend interfaces to AI-powered systems,
            we select technologies that support your business
            today and scale with you tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;