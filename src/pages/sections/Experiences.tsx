import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiDocker,
} from "react-icons/si";
import { type IconType } from "react-icons";
import t2g1 from "../../assets/t2g1.png";
import t2g2 from "../../assets/t2g2.png";
import t2g3 from "../../assets/t2g3.png";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  techStack?: string[];
  images?: { src: string; desc: string }[];
}

const techIcons: Record<string, IconType> = {
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiNodedotjs,
  Python: SiPython,
  Django: SiDjango,
  "Tailwind CSS": SiTailwindcss,
  Docker: SiDocker,
};

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "WEBMETRO",
    period: "June 2025 - August 2025",
    description: `Contributed to the development and enhancement of user interfaces for Django-based applications, building responsive components and optimizing templates to improve load times and overall user engagement.

Collaborated closely with backend developers to integrate REST APIs, resolve UI inconsistencies, and streamline feature workflows, accelerating delivery cycles.

Participated in testing, debugging, and frontend performance refinement to improve product usability, stability, and reliability.

Gained hands-on experience with cPanel for server management and deployment, helping maintain stable production environments and reduce downtime.`,
    techStack: ["Python", "Django", "REST APIs", "Tailwind CSS"],
  },
  {
    role: "Software Development Apprentice",
    company: "Teach2Give",
    period: "September 2025 - December 2025",
    description: `Engineered scalable Express.js-based applications designed to support 800-1,200 simulated concurrent users, focusing on performance and efficient resource handling.

Delivered multiple full-stack projects, demonstrating strong proficiency in backend architecture, API development, and frontend integration.

Actively participated in code reviews and pair-programming sessions, strengthening collaboration, code quality, and team consistency.

Applied clean architecture principles, secure API design, and advanced debugging strategies, improving overall code maintainability and stability by over 25%.`,
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MsSQL",
      "Docker",
      "Tailwind CSS",
    ],
    images: [
      { src: t2g1, desc: "Being certified during T2G graduation" },
      { src: t2g2, desc: "T2G session with Jason Duff at Murang'a University" },
      { src: t2g3, desc: "T2G graduation at Jitu offices in Nyeri" },
    ],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 border-t border-border/40"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <p className="text-sm tracking-widest uppercase text-(--muted-color)">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-color)">
            Where I've Made an Impact
          </h2>
          <p className="text-(--muted-color) max-w-2xl mx-auto">
            My professional journey has been focused on building scalable,
            maintainable systems, and delivering real value in every project.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border/40 ml-4">
          {experiences.map((exp) => (
            <div key={exp.role} className="mb-10 ml-6 relative">
              {/* Timeline dot */}
              <span className="absolute -left-4 top-2 w-3 h-3 bg-(--accent-blue) rounded-full shadow-md" />

              {/* Experience Card */}
              <div className="bg-(--card-color) p-6 rounded-2xl shadow-concave border border-border/40 transition-transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Description */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold text-(--accent-blue)">
                        {exp.role}
                      </h3>
                      <span className="text-sm text-(--muted-color)">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-(--text-color) mb-3">
                      {exp.company}
                    </h4>
                    <p className="text-(--muted-color) text-sm leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {exp.techStack.map((tech) => {
                          const Icon = techIcons[tech];
                          return (
                            <span
                              key={tech}
                              className="flex items-center gap-2 text-(--text-color) text-xs font-medium px-3 py-1.5 rounded-full bg-(--accent-blue)/20"
                            >
                              {Icon && <Icon className="text-base" />}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {exp.images && (
                    <div className="grid grid-cols-2 gap-2 flex-1 h-auto w-full">
                      {/* Left Image */}
                      <div className="space-y-1">
                        <img
                          src={exp.images[0].src}
                          alt={exp.images[0].desc}
                          className="w-full aspect-2/3 sm:aspect-3/4 rounded-lg shadow-md object-cover"
                        />
                        <p className="text-xs text-muted-foreground text-center">
                          {exp.images[0].desc}
                        </p>
                      </div>

                      {/* Right Images stacked */}
                      <div className="space-y-2">
                        <div className="space-y-1">
                          <img
                            src={exp.images[1].src}
                            alt={exp.images[1].desc}
                            className="w-full aspect-square rounded-lg shadow-md object-cover"
                          />
                          <p className="text-xs text-muted-foreground text-center">
                            {exp.images[1].desc}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <img
                            src={exp.images[2].src}
                            alt={exp.images[2].desc}
                            className="w-full aspect-square rounded-lg shadow-md object-cover"
                          />
                          <p className="text-xs text-muted-foreground text-center">
                            {exp.images[2].desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
