import * as React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const technologies: Technology[] = [
  { name: "React", icon: <SiReact size={32} />, color: "text-[#3B82F6]" },
  { name: "Node.js", icon: <SiNodedotjs size={32} />, color: "text-green-500" },
  { name: "Python", icon: <SiPython size={32} />, color: "text-yellow-400" },
  { name: "Django", icon: <SiDjango size={32} />, color: "text-green-700" },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={32} />,
    color: "text-[#38BDF8]",
  },
  { name: "MsSQL", icon: <SiPostgresql size={32} />, color: "text-blue-700" },
  { name: "Docker", icon: <SiDocker size={32} />, color: "text-blue-500" },
];

export const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 px-4 sm:px-6 border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <p className="text-sm tracking-widest uppercase text-(--muted-color)">
            Technologies & Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-color)">
            Tools I Work With
          </h2>
          <p className="text-(--muted-color) max-w-2xl mx-auto">
            I leverage a combination of modern frontend, backend, and DevOps
            tools to deliver scalable and maintainable software solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`
                bg-(--card-color)
                rounded-2xl
                p-6
                flex flex-col items-center justify-center
                shadow-concave
                border border-border/40
                transition-transform
                hover:scale-[1.05]
              `}
            >
              <div className={`${tech.color} mb-3`}>{tech.icon}</div>
              <p className="text-(--text-color) font-medium text-sm sm:text-base">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
