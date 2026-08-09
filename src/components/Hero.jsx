import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import styles from "../style";
import { aboutMe, callToAction, socialMedia } from "../constants";

const roles = [
  "Software Developer",
  "Cloud & DevOps Engineer",
  "AWS Solutions Architect",
  "Full-Stack Engineer",
];

const codeLines = [
  { parts: [{ t: "const ", c: "keyword" }, { t: "developer", c: "var" }, { t: " = {" }], delay: 0 },
  { parts: [{ t: '  name: "' }, { t: "Shubham Jethva", c: "str" }, { t: '",' }], delay: 0.1 },
  { parts: [{ t: '  skills: ["React", "AWS", "Python"],' }], delay: 0.2 },
  { parts: [{ t: '  passion: "' }, { t: "Building scalable systems", c: "str" }, { t: '",' }], delay: 0.3 },
  { parts: [{ t: "  available: " }, { t: "true", c: "bool" }], delay: 0.4 },
  { parts: [{ t: "};" }], delay: 0.5 },
];

const colorMap = {
  keyword: "text-violet-400",
  var: "text-sky-400",
  str: "text-emerald-400",
  bool: "text-amber-400",
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const githubLink = socialMedia.find((s) => s.id === "social-media-2")?.link;

  return (
    <section id="home" className={`relative ${styles.paddingY}`}>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-body">Open to opportunities</span>
          </div>

          <p className="font-mono text-sm text-accent mb-3">Hi, my name is</p>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-heading tracking-tight leading-[1.1]">
            {aboutMe.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{aboutMe.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <div className="mt-4 h-8 sm:h-10">
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-body">
              {" "}
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gradient font-semibold"
              >
                {roles[roleIndex]}
              </motion.span>
            </p>
          </div>

          <p className={`${styles.paragraph} max-w-xl mt-6`}>
            {aboutMe.tagLine}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href={callToAction} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Let's Connect
              <HiArrowUpRight className="h-4 w-4" />
            </a>
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <AiFillGithub className="h-5 w-5" />
                View GitHub
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full max-w-lg lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/50">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-xs text-muted">portfolio.js</span>
            </div>
            <div className="p-5 sm:p-6 code-window text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="code-line flex"
                  style={{ animationDelay: `${line.delay}s` }}
                >
                  <span className="text-muted select-none w-6 shrink-0">{i + 1}</span>
                  <span className="text-body">
                    {line.parts.map((part, j) => (
                      <span key={j} className={part.c ? colorMap[part.c] : ""}>
                        {part.t}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
