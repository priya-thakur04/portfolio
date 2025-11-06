import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import evLocator from "@/assets/project-ev-locator.jpg";
import studentMgmt from "@/assets/project-student-mgmt.jpg";
import dataAnalysis from "@/assets/project-data-analysis.jpg";

const Projects = () => {
  const projects = [
    {
      title: "EV Charging Station Locator",
      description: "Prototype web app to help EV users find nearby charging stations using Google Maps API.",
      tech: ["HTML", "CSS", "JavaScript", "Google Maps API"],
      image: evLocator,
      type: "Hackathon Project",
    },
    {
      title: "Student Management System",
      description: "Console-based system for managing student data efficiently with MySQL integration.",
      tech: ["Python", "MySQL"],
      image: studentMgmt,
      type: "Academic Project",
    },
    {
      title: "Data Analysis Mini Project",
      description: "Data visualization project to identify trends from datasets using Python libraries.",
      tech: ["Python", "Pandas", "Matplotlib"],
      image: dataAnalysis,
      type: "Personal Learning",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            Some of my recent work and academic projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-body">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-body text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-body border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
