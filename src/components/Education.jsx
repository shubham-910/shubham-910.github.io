import { motion } from "framer-motion";
import { educationList } from "../constants";
import SectionHeading from "./SectionHeading";
import { MonogramSeal, EDUCATION_THEMES, getMonogram } from "./VisualIdentity";

const EducationCard = ({
  title,
  degree,
  duration,
  content1,
  content2,
  link,
  index,
  monogram,
}) => {
  const theme = EDUCATION_THEMES[index % EDUCATION_THEMES.length];
  const seal = monogram || getMonogram(title);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 flex gap-5 group hover:-translate-y-1 transition-transform duration-300"
    >
      <MonogramSeal monogram={seal} gradient={theme.gradient} glow={theme.glow} />

      <div className="flex-1 min-w-0">
        <h4 className="font-display font-semibold text-heading text-lg group-hover:text-accent transition-colors">
          {title}
        </h4>
        <p className="text-body text-sm mt-1">{degree}</p>
        <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-xs font-mono text-accent bg-accent/10 border border-accent/20">
          {duration}
        </span>
        <ul className="mt-3 space-y-1">
          <li className="text-sm text-body flex items-start gap-2">
            <span className="text-accent mt-1 shrink-0">▸</span>
            {content1}
          </li>
          {content2 && (
            <li className="text-sm text-body flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">▸</span>
              {content2}
            </li>
          )}
        </ul>
      </div>
    </motion.a>
  );
};

const Education = () => (
  <section id="education" className="py-8 md:py-12">
    <SectionHeading
      label="02 — Background"
      title="Education"
      subtitle="Academic foundation in computer science and applied computing."
    />

    <div className="grid md:grid-cols-2 gap-6">
      {educationList.map((item, index) => (
        <EducationCard key={item.id} index={index} {...item} />
      ))}
    </div>
  </section>
);

export default Education;
