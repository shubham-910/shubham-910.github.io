import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { aesterik } from "../assets";
import SectionHeading from "./SectionHeading";

const OpenSource = () => (
  <section id="openSource" className="py-8 md:py-12">
    <SectionHeading
      label="05 — Community"
      title="Open Source"
      subtitle="Contributions to open source projects and community involvement."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.a
        href="https://github.com/users/shubham-910/achievements/pull-shark"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <img
            src={aesterik}
            alt="asterisk-java"
            className="w-12 h-12 rounded-xl border border-border object-cover"
          />
          <div className="flex-1">
            <h3 className="font-display font-semibold text-heading group-hover:text-accent transition-colors">
              asterisk-java
            </h3>
            <p className="text-sm text-body mt-1">Open source contribution</p>
          </div>
          <HiArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors shrink-0" />
        </div>
      </motion.a>
    </div>
  </section>
);

export default OpenSource;
