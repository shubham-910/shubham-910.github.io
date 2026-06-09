import { motion } from "framer-motion";
import { HiOutlineDocumentCheck, HiArrowUpRight } from "react-icons/hi2";
import { certificateList } from "../constants";
import SectionHeading from "./SectionHeading";

const CertificateCard = ({ title, link, index }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
  >
    <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
      <HiOutlineDocumentCheck className="w-6 h-6 text-accent" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-display font-semibold text-heading text-sm sm:text-base group-hover:text-accent transition-colors line-clamp-2">
        {title}
      </h4>
      <span className="text-xs text-muted mt-1 block">View credential</span>
    </div>
    <HiArrowUpRight className="shrink-0 w-5 h-5 text-muted group-hover:text-accent transition-colors" />
  </motion.a>
);

const Certificate = () => (
  <section id="certificateList" className="py-8 md:py-12">
    <SectionHeading
      label="04 — Credentials"
      title="Certificates"
      subtitle="Professional certifications and completed learning programs."
    />

    <div className="grid sm:grid-cols-2 gap-4">
      {certificateList.map((cert, index) => (
        <CertificateCard key={cert.id} index={index} {...cert} />
      ))}
    </div>
  </section>
);

export default Certificate;
