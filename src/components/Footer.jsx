import React from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { aboutMe, callToAction, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <footer id="contactMe" className="relative mt-16">
    <div className="section-divider mb-0" />

    <div className={`${styles.paddingX} py-16 md:py-20`}>
      <div className={`${styles.boxWidth}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                Get in touch
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-heading">
                Let's build something{" "}
                <span className="text-gradient">great together</span>
              </h2>
              <p className="text-body mt-4 leading-relaxed">{aboutMe.tagLine}</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <a
                href={callToAction}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Connect on LinkedIn
                <HiArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex gap-3">
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-heading hover:border-accent hover:text-accent transition-all duration-200"
                    aria-label="Social link"
                  >
                    {React.createElement(social.icon, { className: "h-5 w-5" })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-8 border-t border-border">
          <p className="font-display font-semibold text-heading text-sm">
            {aboutMe.name}
          </p>
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} · Build with Care
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
