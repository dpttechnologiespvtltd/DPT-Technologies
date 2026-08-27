import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  Globe2,
  Smartphone,
  Palette,
  CloudCog,
  Workflow,
  BarChart3,
  Check,
} from "lucide-react";

import "./Services.css";
import cloudVisual from "../../assets/dpt-cloud-visual.png";

const services = [
  {
    number: "01",
    icon: Bot,
    title: "Artificial Intelligence",
    shortTitle: "AI Solutions",
    description:
      "Leverage intelligent technologies to automate workflows, improve decision-making, and create better customer experiences.",
    features: [
      "AI Chatbots",
      "AI Voice Agents",
      "Generative AI Applications",
      "AI Workflow Automation",
      "AI Integration",
      "Machine Learning Solutions",
    ],
    accent: "cyan",
  },

  {
    number: "02",
    icon: Code2,
    title: "Custom Software",
    shortTitle: "Software Development",
    description:
      "Build powerful, scalable software tailored specifically to your business processes, requirements, and growth goals.",
    features: [
      "Enterprise Applications",
      "CRM Development",
      "ERP Development",
      "Business Management Systems",
      "Internal Portals",
      "SaaS Platforms",
    ],
    accent: "blue",
  },

  {
    number: "03",
    icon: Globe2,
    title: "Web Development",
    shortTitle: "Web Solutions",
    description:
      "Create modern, responsive, and scalable web experiences designed to perform across devices and platforms.",
    features: [
      "Corporate Websites",
      "Business Websites",
      "Landing Pages",
      "E-commerce Platforms",
      "Customer Portals",
      "Admin Dashboards",
    ],
    accent: "violet",
  },

  {
    number: "04",
    icon: Smartphone,
    title: "Mobile App Development",
    shortTitle: "Mobile Solutions",
    description:
      "Deliver high-performance mobile applications that provide seamless experiences across Android and iOS.",
    features: [
      "Native Apps",
      "Cross-platform Apps",
      "Flutter Development",
      "React Native Development",
    ],
    accent: "purple",
  },

  {
    number: "05",
    icon: Palette,
    title: "UI/UX Design",
    shortTitle: "Product Design",
    description:
      "Design intuitive digital experiences that combine beautiful interfaces with usability and business objectives.",
    features: [
      "User Research",
      "Wireframes",
      "Prototypes",
      "Dashboard Design",
      "Mobile App Design",
      "Website Design",
    ],
    accent: "pink",
  },

  {
    number: "06",
    icon: CloudCog,
    title: "Cloud & DevOps",
    shortTitle: "Cloud Infrastructure",
    description:
      "Build reliable infrastructure and streamlined deployment pipelines for secure and scalable digital products.",
    features: [
      "Cloud Deployment",
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "CI/CD",
      "Docker & Kubernetes",
    ],
    accent: "sky",
  },

  {
    number: "07",
    icon: Workflow,
    title: "Automation Solutions",
    shortTitle: "Business Automation",
    description:
      "Automate repetitive business processes to reduce manual work, increase efficiency, and improve productivity.",
    features: [
      "CRM Automation",
      "HR Automation",
      "Sales Automation",
      "Finance Automation",
      "Marketing Automation",
      "Workflow Automation",
    ],
    accent: "orange",
  },

  {
    number: "08",
    icon: BarChart3,
    title: "Data Analytics",
    shortTitle: "Business Intelligence",
    description:
      "Turn complex business data into meaningful insights that support faster and smarter decision-making.",
    features: [
      "Business Dashboards",
      "Power BI",
      "Tableau",
      "KPI Dashboards",
      "Business Intelligence",
    ],
    accent: "green",
  },
];

function Services() {
  return (
    <section id="services" className="services-section">
      {/* Background elements */}
      <div className="services-glow services-glow-one" />
      <div className="services-glow services-glow-two" />
      <div className="services-grid-bg" />

      <div className="services-container">
        {/* HEADER */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="services-header-left">
            <span className="services-eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Technology that
              <br />
              <span>moves business forward.</span>
            </h2>
          </div>

          <div className="services-header-right">
            <p>
              From intelligent AI solutions to enterprise
              software, cloud infrastructure, and business
              automation, we build technology around your
              unique business needs.
            </p>

            <div className="services-header-line">
              <span />
              <span />
              <span />
            </div>
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                className={`service-card service-${service.accent}`}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                {/* Top row */}
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="service-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* Content */}
                <div className="service-content">
                  <span className="service-category">
                    {service.shortTitle}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                {/* Features */}
                <div className="service-features">
                  {service.features.map((feature) => (
                    <div
                      className="service-feature"
                      key={feature}
                    >
                      <Check size={13} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom decoration */}
                <div className="service-card-bottom">
                  <span>EXPLORE SERVICE</span>

                  <div className="service-progress">
                    <span />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="services-cta"
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
          <div className="services-cta-content">
            <span>READY TO BUILD?</span>

            <h3>
              Have a technology challenge?
              <br />
              <span>Let's solve it together.</span>
            </h3>
          </div>

          <img
            className="services-cta-image"
            src={cloudVisual}
            alt="Cloud infrastructure technology illustration"
          />

          <a
            href="#contact"
            className="services-cta-button"
          >
            <span>Start a Conversation</span>

            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;