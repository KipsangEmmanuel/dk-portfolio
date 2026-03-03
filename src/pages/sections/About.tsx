import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 border-t border-border/40"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Building systems with clarity, structure & intent
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I approach software development as system design - not just writing
            code, but engineering solutions that scale, adapt, and solve real
            business problems.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          {/* Tab List - Mobile Responsive with Horizontal Scroll */}
          <TabsList className="w-full bg-card p-2 rounded-2xl shadow-concave overflow-x-auto flex-nowrap whitespace-nowrap scrollbar-hide">
            <TabsTrigger
              value="overview"
              className="inline-flex px-4 py-2 rounded-xl transition-all
                data-[state=active]:bg-(--accent-blue)
                data-[state=active]:text-(--card-color)
                data-[state=active]:shadow-concave-pressed
                data-[state=inactive]:text-(--muted-color)
              "
            >
              Overview
            </TabsTrigger>

            <TabsTrigger
              value="approach"
              className="inline-flex px-4 py-2 rounded-xl transition-all
                data-[state=active]:bg-(--accent-blue)/90
                data-[state=active]:text-(--card-color)
                data-[state=active]:shadow-concave-pressed
                data-[state=inactive]:text-(--muted-color)
              "
            >
              Engineering
            </TabsTrigger>

            <TabsTrigger
              value="goals"
              className="inline-flex px-4 py-2 rounded-xl transition-all
                data-[state=active]:bg-(--accent-red)
                data-[state=active]:text-(--card-color)
                data-[state=active]:shadow-concave-pressed
                data-[state=inactive]:text-(--muted-color)
              "
            >
              Goals
            </TabsTrigger>

            <TabsTrigger
              value="education"
              className="inline-flex px-4 py-2 rounded-xl transition-all
                data-[state=active]:bg-(--accent-blue)/80
                data-[state=active]:text-(--card-color)
                data-[state=active]:shadow-concave-pressed
                data-[state=inactive]:text-(--muted-color)
              "
            >
              Education
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-8">
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-concave space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I am a full stack software engineer specializing in React and
                Node.js ecosystems. My focus is building production-ready
                systems with strong architecture, secure authentication flows,
                and maintainable codebases.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy transforming complex business requirements into
                structured backend logic and intuitive frontend experiences. My
                goal is always clarity in code, design, and execution.
              </p>
            </div>
          </TabsContent>

          {/* Engineering */}
          <TabsContent value="approach" className="mt-8">
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-concave space-y-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-(--accent-blue) rounded-full" />
                  Clean API architecture & separation of concerns
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-(--accent-red) rounded-full" />
                  Database-first thinking & structured data modeling
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-(--accent-blue) rounded-full" />
                  Component-driven frontend systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-(--accent-red) rounded-full" />
                  Authentication, authorization & security awareness
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-(--accent-blue)/70 rounded-full" />
                  Performance and scalability considerations
                </li>
              </ul>
            </div>
          </TabsContent>

          {/* Goals */}
          <TabsContent value="goals" className="mt-8">
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-concave space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                My goal is to join a forward-thinking engineering team where I
                can contribute to meaningful products, grow through real-world
                challenges, and refine my system design capabilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I aim to evolve into a highly versatile full stack engineer
                capable of architecting scalable digital solutions that balance
                business objectives with technical excellence.
              </p>
            </div>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education" className="mt-8">
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-concave space-y-6">
              {/* Moringa */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Moringa School - Software Engineering
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nov 2024 - June 2025
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>
                    Completed intensive full-stack curriculum covering Python,
                    JavaScript, Flask, and React.
                  </li>
                  <li>
                    Developed REST APIs, interactive UIs, and performed
                    debugging, testing, and deployment workflows.
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1Y23hmCryDAja836EfIwrj2qIfvgfbXQm/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="mt-2">
                    Download Certificate
                  </Button>
                </a>
              </div>

              {/* T2G */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Teach2Give - Software Development Certification
                </h4>
                <p className="text-sm text-muted-foreground">
                  Sep 2025 - Dec 2025
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>
                    Advanced full-stack training in React, Node.js, Express.js,
                    TypeScript, and Prisma ORM.
                  </li>
                  <li>
                    Applied clean architecture, TDD, secure API practices, and
                    agile methodologies.
                  </li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1y5oNQ_YKaUeAzKu0rFsynt058dFcLqPJ/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="mt-2">
                    Download Certificate
                  </Button>
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
