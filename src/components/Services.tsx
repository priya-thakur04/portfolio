import { Code, Globe, GraduationCap, FolderCode } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom C/Python applications and automation tools tailored to your needs.",
      features: ["Custom Applications", "Automation Tools", "Script Development"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites using HTML, CSS, and JavaScript.",
      features: ["Responsive Design", "Interactive UIs", "Modern Layouts"],
    },
    {
      icon: GraduationCap,
      title: "Programming Tutoring",
      description: "Personalized coding lessons for beginners in Python, C, and web technologies.",
      features: ["One-on-One Sessions", "Beginner Friendly", "Practical Examples"],
    },
    {
      icon: FolderCode,
      title: "Project Assistance",
      description: "Help with academic projects, coding logic, and documentation.",
      features: ["Code Review", "Logic Building", "Documentation Support"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            What I can help you with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-lg glow-effect hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-semibold mb-2">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 font-body">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-foreground/80 font-body">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
