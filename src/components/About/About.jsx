import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Eye,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

import "./About.css";

function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "Creating future-ready technology solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Excellence",
      text: "Delivering high-quality products with precision.",
    },
    {
      icon: Users,
      title: "Integrity",
      text: "Building trust through transparency and commitment.",
    },
    {
      icon: Target,
      title: "Customer Success",
      text: "Helping clients achieve measurable business outcomes.",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      text: "Adopting emerging technologies to stay ahead.",
    },
  ];

  const capabilities = [
    "Custom Software Development",
    "Artificial Intelligence",
    "Enterprise Applications",
    "Business Automation",
    "Digital Transformation",
    "Scalable Technology Solutions",
  ];

  return (
    <section id="about" className="about-section">

      {/* Background elements */}

      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />
      <div className="about-grid" />

      <div className="about-container">

        {/* SECTION HEADER */}

        <motion.div
          className="about-heading"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="about-label">
            ABOUT DPT TECHNOLOGIES
          </span>

          <h2>
            Building the Future
            <br />
            <span>with Technology</span>
          </h2>

          <p>
            We combine technology, strategy, and innovation
            to create digital solutions that solve real
            business challenges.
          </p>
        </motion.div>


        {/* MAIN ABOUT CONTENT */}

        <div className="about-main">

          {/* LEFT CONTENT */}

          <motion.div
            className="about-copy"
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
            }}
          >

            <div className="about-intro">
              <span className="about-intro-number">
                01
              </span>

              <div>
                <h3>
                  Technology Built Around
                  <span> Your Business</span>
                </h3>

                <p>
                  DPT Technologies is a technology-driven
                  company specializing in custom software
                  development, Artificial Intelligence,
                  enterprise applications, automation
                  solutions, and digital transformation.
                </p>

                <p>
                  We partner with startups, SMEs, and
                  enterprises to develop secure, scalable,
                  and innovative technology solutions that
                  solve real business challenges.
                </p>
              </div>
            </div>


            {/* CAPABILITIES */}

            <div className="about-capabilities">

              <div className="about-capability-title">
                <BrainCircuit size={18} />

                <span>
                  OUR TECHNOLOGY CAPABILITIES
                </span>
              </div>

              <div className="about-capability-list">

                {capabilities.map((item, index) => (
                  <motion.div
                    className="about-capability"
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <CheckCircle2 size={16} />

                    <span>{item}</span>
                  </motion.div>
                ))}

              </div>
            </div>

          </motion.div>


          {/* RIGHT VISUAL */}

          <motion.div
            className="about-visual"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div className="about-visual-orbit orbit-large" />
            <div className="about-visual-orbit orbit-small" />

            <div className="about-center">

              <div className="about-center-icon">
                <BrainCircuit size={42} />
              </div>

              <strong>
                DPT
              </strong>

              <span>
                TECHNOLOGY
              </span>

            </div>


            <div className="about-floating-card about-card-one">
              <Target size={18} />

              <div>
                <strong>Business Focused</strong>
                <span>Solutions that solve real problems</span>
              </div>
            </div>


            <div className="about-floating-card about-card-two">
              <Zap size={18} />

              <div>
                <strong>AI Powered</strong>
                <span>Intelligent digital experiences</span>
              </div>
            </div>


            <div className="about-floating-card about-card-three">
              <ShieldCheck size={18} />

              <div>
                <strong>Secure & Scalable</strong>
                <span>Built for long-term growth</span>
              </div>
            </div>

          </motion.div>

        </div>


        {/* MISSION / VISION */}

        <div className="about-direction">

          <motion.div
            className="direction-card mission-card"
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
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="direction-icon">
              <Target size={23} />
            </div>

            <div>
              <span>OUR MISSION</span>

              <h3>
                Empowering businesses
                through innovation.
              </h3>

              <p>
                To empower businesses through innovative
                technology solutions that improve efficiency,
                automate operations, and accelerate
                sustainable growth.
              </p>
            </div>

          </motion.div>


          <motion.div
            className="direction-card vision-card"
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
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
          >

            <div className="direction-icon">
              <Eye size={23} />
            </div>

            <div>
              <span>OUR VISION</span>

              <h3>
                Becoming a trusted
                global technology partner.
              </h3>

              <p>
                To become a trusted global technology
                partner by delivering world-class software,
                AI-powered solutions, and digital
                transformation services.
              </p>
            </div>

          </motion.div>

        </div>


        {/* CORE VALUES */}

        <motion.div
          className="values-section"
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="values-heading">

            <div>
              <span>WHAT DRIVES US</span>

              <h3>
                Our Core Values
              </h3>
            </div>

            <p>
              The principles that shape how we build,
              collaborate, and create value for our clients.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  className="value-card"
                  key={value.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >

                  <div className="value-icon">
                    <Icon size={20} />
                  </div>

                  <span className="value-number">
                    0{index + 1}
                  </span>

                  <h4>
                    {value.title}
                  </h4>

                  <p>
                    {value.text}
                  </p>

                  <ArrowUpRight
                    className="value-arrow"
                    size={17}
                  />

                </motion.div>
              );
            })}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;