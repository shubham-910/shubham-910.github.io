import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../constants";
import SectionHeading from "./SectionHeading";
import { ProjectBanner, PROJECT_THEMES } from "./VisualIdentity";

const Project = ({ title, content, stack, github, link, index, category }) => {
  const theme = PROJECT_THEMES[category] || PROJECT_THEMES.fullstack;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
    >
      <ProjectBanner title={title} category={category} stack={stack} theme={theme} />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <p className="text-body text-sm leading-relaxed flex-1">{content}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech) => (
            <span
              key={tech.id}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-bg-secondary border border-border text-body"
            >
              <span className="text-accent">{React.createElement(tech.icon)}</span>
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-body hover:text-accent transition-colors"
            >
              <AiFillGithub className="h-5 w-5" />
              Code
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-body hover:text-accent transition-colors"
            >
              <BsLink45Deg className="h-5 w-5" />
              Live
            </a>
          )}
          {(github || link) && (
            <HiArrowUpRight className="h-4 w-4 text-muted ml-auto group-hover:text-accent transition-colors" />
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" className="py-8 md:py-12">
    <SectionHeading
      label="03 — Work"
      title="Featured Projects"
      subtitle="A selection of projects spanning full-stack development, cloud, and DevOps."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <Project key={project.id} index={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
