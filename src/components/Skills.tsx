import { Code2, Database, Globe, Wrench, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python"],
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Database,
      title: "Database & Libraries",
      skills: ["MySQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["VS Code", "Jupyter Notebook"],
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      skills: ["Communication", "Project Management"],
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: Lightbulb,
      title: "Soft Skills",
      skills: ["Logical Thinking", "Adaptability", "Problem Solving"],
      color: "from-primary/20 to-primary/5",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-lg glow-effect hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${category.color} p-4 rounded-lg w-fit mb-4`}>
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-body border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
