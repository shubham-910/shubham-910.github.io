import { motion } from "framer-motion";

const SectionHeading = ({ label, title, subtitle }) => (
  <motion.div
    className="mb-12 md:mb-16"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    {label && (
      <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-heading tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-body max-w-2xl text-base md:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
