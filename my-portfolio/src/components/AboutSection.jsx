import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Backend Developer & Lifelong Learner
            </h3>

            <p className="text-muted-foreground">
              Hi! I'm a final-year Software Engineering student with a strong interest in backend development and system architecture. I enjoy building scalable, maintainable, and efficient server-side applications, and I'm especially passionate about exploring modern frameworks and cloud technologies.
            </p>

            <p className="text-muted-foreground">
              Although I haven’t worked in a company yet, I’ve built several academic and personal projects that reflect my curiosity and dedication to learning. I’m continuously improving my skills through hands-on practice, open-source contributions, and staying up-to-date with industry trends. My goal is to become a reliable and thoughtful backend engineer who writes clean, robust code and solves real-world problems with impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Development</h4>
                  <p className="text-muted-foreground">
                    Building reliable and scalable server-side applications using modern technologies like Spring Boot. Focused on writing clean, maintainable code and understanding system architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving & System Design</h4>
                  <p className="text-muted-foreground">
                    Enjoy solving real-world problems through code. Continuously exploring design patterns, database modeling, and system logic to improve performance and maintainability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Self-Driven Learning</h4>
                  <p className="text-muted-foreground">
                    Actively learning through side projects, online courses, and technical communities. Embracing Agile principles and version control tools like Git to simulate real-world workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
