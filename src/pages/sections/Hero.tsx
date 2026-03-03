import { Button } from "@/components/ui/button";
import { SiReact, SiNodedotjs, SiExpress } from "react-icons/si";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center pb-16 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-(--muted-color)">
              Full Stack Software Engineer
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-(--text-color)">
              I build
              <span className="text-(--accent-blue)"> scalable systems</span>
              <br className="hidden sm:block" />
              with clean architecture
              <span className="text-(--accent-red)">
                {" "}
                & real business logic
              </span>
              .
            </h1>
          </div>

          <p className="text-base sm:text-lg text-(--muted-color) max-w-xl leading-relaxed">
            Specialized in React and Node.js ecosystems, I design
            production-ready applications focused on performance,
            maintainability, and real-world business workflows.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
              </Button>
            </a>

            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </a>

            <a
              href="https://drive.google.com/file/d/1KrdrJwnhqJUrhiiC6lBjPLjpCPrfq647/view?usp=drivesdk"
              download
              target="_blank"
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Download My CV
              </Button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – Signature Card */}
        <div className="relative mt-12 lg:mt-0">
          <div
            className="
              bg-(--card-color)
              rounded-2xl
              p-6 sm:p-8 lg:p-10
              shadow-concave
              border border-border/40
            "
          >
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-(--accent-blue)">
                Engineering Focus
              </h3>

              <ul className="space-y-4 text-(--muted-color) text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <SiReact size={20} className="text-[#3B82F6]" />
                  Scalable Frontend Systems (React)
                </li>

                <li className="flex items-center gap-3">
                  <SiNodedotjs size={20} className="text-green-500" />
                  Backend Systems & API Architecture (Node.js)
                </li>

                <li className="flex items-center gap-3">
                  <SiExpress size={20} className="text-gray-400" />
                  Clean Server Routing & Middleware (Express.js)
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1 bg-(--accent-red) rounded-full shrink-0" />
                  Authentication & Secure Flows
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1 bg-(--accent-blue) rounded-full shrink-0" />
                  Performance, Scalability & Maintainability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
