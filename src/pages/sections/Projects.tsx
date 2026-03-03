import { Button } from "@/components/ui/button";
import { FaCogs } from "react-icons/fa";
import {
  SiReact,
  SiDjango,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiReactquery,
  SiMysql,
} from "react-icons/si";

import chamly from "../../assets/chamly.png";
import chamlyAdmin from "../../assets/chamlyadmin.png";
import notely from "../../assets/notely.png";
import blogit from "../../assets/blogit.png";
import salespro1 from "../../assets/salespro1.png";
import salespro2 from "../../assets/salespro2.png";

interface Tech {
  name: string;
  icon?: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  techStack: Tech[];
  github?: string;
  linkedin?: { label: string; link: string }[];
  images?: string[];
  status?: string;
}

const projects: Project[] = [
  {
    title: "Chamly Wears",
    description:
      "A full-stack e-commerce platform with admin dashboard, secure authentication, and real commerce workflows built with React and Django.",
    techStack: [
      { name: "React", icon: <SiReact size={18} className="text-[#3B82F6]" /> },
      {
        name: "Django",
        icon: <SiDjango size={18} className="text-green-700" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={18} className="text-[#38BDF8]" />,
      },
      { name: "REST API" },
    ],
    github: "https://github.com/Kibetkipsang/chamly.git",
    linkedin: [
      {
        label: "User Side",
        link: "https://www.linkedin.com/posts/kibet-dennis_softwareengineering-softwareengineers-ecommerce-activity-7367286369175449600-36dU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED5tTYB8t6xD4PvLc0FGDnBf1wMixDX_Z8",
      },
      {
        label: "Admin Side",
        link: "https://www.linkedin.com/posts/kibet-dennis_softwaredevelopment-python-react-activity-7370377805919850496-o3MJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED5tTYB8t6xD4PvLc0FGDnBf1wMixDX_Z8",
      },
    ],
    images: [chamly, chamlyAdmin],
  },
  {
    title: "Notely",
    description:
      "Notely enables users to write, organize, and access notes easily. Incorporated AI assistant and clean UI.",
    techStack: [
      { name: "React", icon: <SiReact size={18} className="text-[#3B82F6]" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript size={18} className="text-blue-600" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={18} className="text-green-500" />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress size={18} className="text-gray-600" />,
      },
      {
        name: "Prisma ORM",
        icon: <SiPrisma size={18} className="text-indigo-500" />,
      },
      { name: "State Management", icon: <FaCogs size={18} /> },
    ],
    github: "https://github.com/Kibetkipsang/notely.git",
    images: [notely],
  },
  {
    title: "Blogit",
    description:
      "BLOGIT - a blogging platform with modern UI inspired by VS Code. Focused on UX, API design, and state management.",
    techStack: [
      { name: "React", icon: <SiReact size={18} className="text-[#3B82F6]" /> },
      { name: "Zustand", icon: <FaCogs size={18} /> },
      { name: "React Query", icon: <SiReactquery size={18} /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={18} className="text-[#38BDF8]" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={18} className="text-green-500" />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress size={18} className="text-gray-600" />,
      },
      { name: "MSSQL", icon: <SiMysql size={18} className="text-blue-700" /> },
      {
        name: "Prisma ORM",
        icon: <SiPrisma size={18} className="text-indigo-500" />,
      },
    ],
    github: "https://github.com/Kibetkipsang/blogit.git",
    linkedin: [
      {
        label: "Project Video",
        link: "https://www.linkedin.com/posts/kibet-dennis_webdevelopment-react-typescript-activity-7427288456369860608-T68j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAED5tTYB8t6xD4PvLc0FGDnBf1wMixDX_Z8",
      },
    ],
    images: [blogit],
  },
  {
    title: "SalesPro (In Progress)",
    description:
      "A full-stack Sales Dashboard designed to simulate real-world business workflows. It enables tracking and managing customers, deals, tasks, and revenue analytics in a unified interface. The project focuses on building scalable systems with clean architecture, proper authentication, and interactive frontend experiences.",
    techStack: [
      { name: "React", icon: <SiReact size={18} className="text-[#3B82F6]" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={18} className="text-green-500" />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress size={18} className="text-gray-600" />,
      },
      { name: "Zustand", icon: <FaCogs size={18} /> },
      {
        name: "Prisma ORM",
        icon: <SiPrisma size={18} className="text-indigo-500" />,
      },
    ],
    images: [salespro1, salespro2],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <p className="text-sm tracking-widest uppercase text-(--muted-color)">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-(--text-color)">
            Projects & Case Studies
          </h2>
          <p className="text-(--muted-color) max-w-2xl mx-auto">
            I build production-ready systems that solve real-world problems,
            focusing on architecture, scalability, and user experience.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-(--card-color)
                rounded-2xl
                p-6
                shadow-concave
                border border-border/40
                flex flex-col justify-between
                transition-transform
                hover:scale-[1.02]
              "
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-(--accent-blue)">
                  {project.title}
                </h3>
                <p className="text-(--muted-color) text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="
                        text-(--text-color)
                        text-xs font-medium
                        px-2 py-1 rounded-full
                        bg-(--accent-blue)/20
                        flex items-center gap-1
                      "
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>

                {/* Images */}
                {project.images && (
                  <div className="grid grid-cols-1 gap-2 mt-4">
                    {project.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="rounded shadow"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-(--accent-blue) text-(--text-color)"
                    >
                      View GitHub
                    </Button>
                  </a>
                )}
                {project.linkedin &&
                  project.linkedin.map((linkObj) => (
                    <a
                      key={linkObj.label}
                      href={linkObj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-(--accent-blue) text-(--text-color)"
                      >
                        {linkObj.label}
                      </Button>
                    </a>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
