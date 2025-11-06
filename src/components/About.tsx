import { GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education Timeline */}
          <div className="glass-card p-8 rounded-lg glow-effect animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-semibold mb-4">Education</h3>
                
                <div className="space-y-6">
                  {/* MCA */}
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-glow" />
                    <div className="mb-2">
                      <h4 className="text-xl font-heading font-semibold text-primary">
                        Master of Computer Applications (MCA)
                      </h4>
                      <p className="text-muted-foreground font-body">
                        Lovely Professional University • Pursuing
                      </p>
                    </div>
                  </div>

                  {/* B.Sc */}
                  <div className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary/60 rounded-full" />
                    <div className="mb-2">
                      <h4 className="text-xl font-heading font-semibold">
                        B.Sc. in Information Technology
                      </h4>
                      <p className="text-muted-foreground font-body">
                        Punjab Technical University • Completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 rounded-lg glow-effect animate-slide-up">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-semibold mb-4">My Vision</h3>
                <blockquote className="text-lg italic text-foreground/80 border-l-4 border-primary pl-6 font-body">
                  "To turn creative ideas into impactful digital experiences."
                </blockquote>
                <p className="mt-4 text-muted-foreground font-body">
                  I am deeply interested in coding, web technologies, and software development. 
                  My key areas of focus include <span className="text-primary font-semibold">Software Development</span>, 
                  <span className="text-primary font-semibold"> Web Design</span>, and 
                  <span className="text-primary font-semibold"> Emerging Technologies</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
