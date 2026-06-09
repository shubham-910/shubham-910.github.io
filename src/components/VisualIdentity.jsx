import React from "react";

export const PROJECT_THEMES = {
  fullstack: {
    label: "Full-Stack",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    glow: "rgba(99, 102, 241, 0.35)",
  },
  cloud: {
    label: "Cloud",
    gradient: "from-cyan-700 via-teal-600 to-sky-500",
    glow: "rgba(6, 182, 212, 0.35)",
  },
  devops: {
    label: "DevOps",
    gradient: "from-orange-600 via-amber-600 to-yellow-500",
    glow: "rgba(249, 115, 22, 0.35)",
  },
  backend: {
    label: "Backend",
    gradient: "from-emerald-700 via-green-600 to-teal-500",
    glow: "rgba(16, 185, 129, 0.35)",
  },
  design: {
    label: "UI/UX",
    gradient: "from-pink-600 via-rose-500 to-fuchsia-500",
    glow: "rgba(236, 72, 153, 0.35)",
  },
  ml: {
    label: "ML / AI",
    gradient: "from-violet-700 via-purple-600 to-fuchsia-600",
    glow: "rgba(139, 92, 246, 0.35)",
  },
};

export const EDUCATION_THEMES = [
  { gradient: "from-indigo-600 via-blue-600 to-cyan-600", glow: "rgba(99, 102, 241, 0.3)" },
  { gradient: "from-violet-600 via-purple-600 to-indigo-600", glow: "rgba(124, 58, 237, 0.3)" },
];

export const getMonogram = (text, max = 2) => {
  const words = text.replace(/[|,]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return words
      .slice(0, max)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }
  return text.slice(0, max).toUpperCase();
};

export const MonogramSeal = ({ monogram, gradient, glow, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-14 h-14 text-lg",
    md: "w-16 h-16 text-xl",
    lg: "w-20 h-20 text-2xl",
  };

  return (
    <div
      className={`relative shrink-0 ${sizes[size]} rounded-2xl flex items-center justify-center font-display font-bold text-white tracking-tight ${className}`}
      style={{ boxShadow: `0 8px 32px ${glow}` }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-90`} />
      <div className="absolute inset-0 rounded-2xl bg-grid opacity-20" />
      <div className="absolute inset-[1px] rounded-[15px] border border-white/20" />
      <span className="relative z-[1] drop-shadow-sm">{monogram}</span>
    </div>
  );
};

export const ProjectBanner = ({ title, category, stack, theme }) => {
  const monogram = getMonogram(title);
  const floatingIcons = stack.slice(0, 3);

  return (
    <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${theme.gradient}`}>
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-2xl opacity-60"
        style={{ background: theme.glow }}
      />
      <div
        className="absolute -left-4 bottom-0 w-24 h-24 rounded-full blur-xl opacity-40"
        style={{ background: theme.glow }}
      />

      <span className="absolute top-4 right-5 font-display text-6xl font-bold text-white/[0.07] select-none leading-none">
        {monogram}
      </span>

      <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-[0.18]">
        {floatingIcons.map((tech) => (
          <span key={tech.id} className="text-white text-5xl">
            {React.createElement(tech.icon)}
          </span>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block px-2.5 py-0.5 mb-2 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/15 text-white/90 backdrop-blur-sm border border-white/10">
          {theme.label}
        </span>
        <h3 className="font-display font-bold text-xl text-white drop-shadow-sm">{title}</h3>
      </div>
    </div>
  );
};
