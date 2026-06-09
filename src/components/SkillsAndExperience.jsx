import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
import { experiences, skills } from "../constants";
import SectionHeading from "./SectionHeading";

export const SkillIcon = ({ icon, name }) => (
  <div className="tooltip">
    <span className="skill-pill">
      <span className="text-accent text-base">{React.createElement(icon)}</span>
      <span>{name}</span>
    </span>
    <span className="tooltiptext">{name}</span>
  </div>
);

const SkillCard = ({ title, items, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="glass-card rounded-2xl p-6"
  >
    <h4 className="font-display font-semibold text-lg text-heading mb-4 flex items-center gap-2">
      <span className="w-1 h-5 rounded-full bg-gradient-accent" />
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <SkillIcon key={item.id} {...item} />
      ))}
    </div>
  </motion.div>
);

const Content = ({ text, link }) => (
  <li className="font-sans text-sm text-body leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">
    {text}{" "}
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <BsLink45Deg size="1rem" className="inline text-accent hover:opacity-80" />
      </a>
    )}
  </li>
);

const ExperienceCard = ({ organisation, link, positions, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card rounded-2xl p-6 md:p-8"
  >
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="font-display font-semibold text-xl text-heading hover:text-accent transition-colors"
    >
      {organisation}
    </a>

    <div className="mt-6 space-y-8 relative">
      {positions.map((position, pIndex) => (
        <div key={pIndex} className="relative pl-6">
          {pIndex < positions.length - 1 && (
            <div className="absolute left-[5px] top-6 bottom-0 w-px bg-border" />
          )}
          <div className="timeline-dot absolute left-0 top-1.5" />
          <h3 className="font-semibold text-heading text-base">{position.title}</h3>
          <time className="text-xs font-mono text-accent mt-0.5 block">{position.duration}</time>

          {position.stack?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {position.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-bg-secondary border border-border text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <ul className="mt-3 space-y-2.5 list-none">
            {position.content.map((info, cIndex) => (
              <Content key={cIndex} {...info} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsAndExperience = () => (
  <section id="skills" className="py-8 md:py-12">
    <SectionHeading
      label="01 — Expertise"
      title="Skills & Experience"
      subtitle="Technologies I work with and the impact I've delivered across roles."
    />

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} index={index} {...skill} />
        ))}
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.organisation} index={index} {...exp} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsAndExperience;
