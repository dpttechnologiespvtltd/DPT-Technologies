import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingBag,
  Truck,
  Building2,
  Hotel,
  Rocket,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Smart software, automation, analytics, and AI solutions that improve production and operational efficiency.",
    icon: Factory,
    accent: "cyan",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Secure digital solutions that help healthcare organizations improve workflows, accessibility, and patient experiences.",
    icon: HeartPulse,
    accent: "rose",
  },
  {
    number: "03",
    title: "Education",
    description:
      "Modern platforms and applications that connect students, educators, institutions, and learning experiences.",
    icon: GraduationCap,
    accent: "violet",
  },
  {
    number: "04",
    title: "Finance",
    description:
      "Reliable technology solutions for financial operations, analytics, automation, and secure digital experiences.",
    icon: Landmark,
    accent: "blue",
  },
  {
    number: "05",
    title: "Retail",
    description:
      "Digital commerce and business solutions designed to improve customer engagement and operational performance.",
    icon: ShoppingBag,
    accent: "orange",
  },
  {
    number: "06",
    title: "Logistics",
    description:
      "Connected systems and automation solutions that help businesses manage logistics, operations, and data efficiently.",
    icon: Truck,
    accent: "green",
  },
  {
    number: "07",
    title: "Real Estate",
    description:
      "Technology platforms that simplify property management, customer engagement, analytics, and business operations.",
    icon: Building2,
    accent: "purple",
  },
  {
    number: "08",
    title: "Hospitality",
    description:
      "Digital experiences and automation solutions that help hospitality businesses deliver better customer service.",
    icon: Hotel,
    accent: "pink",
  },
  {
    number: "09",
    title: "Startups",
    description:
      "From MVP development to scalable products, we help startups turn ideas into technology-driven businesses.",
    icon: Rocket,
    accent: "yellow",
  },
  {
    number: "10",
    title: "Professional Services",
    description:
      "Custom applications, automation, and analytics that help professional teams improve productivity and scale.",
    icon: BriefcaseBusiness,
    accent: "sky",
  },
];

function Industries() {
  return (
    <section id="industries" className="industries-section">
      {/* Background */}
      <div className="industries-grid" />
      <div className="industries-orb industries-orb-one" />
      <div className="industries-orb industries-orb-two" />

      <div className="industries-container">
        {/* SECTION HEADER */}
        <motion.div
          className="industries-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="industries-heading">
            <span className="industries-label">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Technology built for
              <br />
              <span>every business.</span>
            </h2>
          </div>

          <div className="industries-intro">
            <p>
              We combine technology, industry knowledge,
              and business understanding to create digital
              solutions that solve real-world challenges.
            </p>

            <div className="industries-stat">
              <strong>10+</strong>
              <span>
                Industry sectors
                <br />
                supported
              </span>
            </div>
          </div>
        </motion.div>

        {/* INDUSTRIES */}
        <div className="industries-list">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.number}
                className={`industry-card industry-${industry.accent}`}
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
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
              >
                <div className="industry-card-top">
                  <span className="industry-number">
                    {industry.number}
                  </span>

                  <div className="industry-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>

                  <div className="industry-arrow">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                <div className="industry-content">
                  <h3>{industry.title}</h3>

                  <p>{industry.description}</p>
                </div>

                <div className="industry-footer">
                  <span>EXPLORE INDUSTRY</span>

                  <div className="industry-line">
                    <span />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="industries-bottom"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="industries-bottom-mark">
            <span />
            <span />
            <span />
          </div>

          <p>
            Whatever your industry, we build technology
            around your business—not the other way around.
          </p>

          <a href="#contact">
            Talk to our experts
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;