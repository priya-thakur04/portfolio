import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo-new.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Programmer", "Web Developer", "Learner"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setDisplayText(currentRole.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentRole.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-slide-up">
            <div className="space-y-2">
              <p className="text-primary font-body text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-heading font-bold">
                Priya
              </h1>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <span className="text-2xl md:text-3xl text-muted-foreground font-body">
                  {displayText}
                  <span className="animate-glow text-primary">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl font-body">
              Data Analyst | Python, SQL, Power BI, Excel | Turning messy data into clear business decisions | MCA (AI) @ LPU
            </p>

            <p className="text-foreground/80 max-w-xl font-body">
              A passionate MCA student exploring the world of programming and modern tech. I believe in continuous learning and enjoy building creative, practical solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="glow-effect bg-primary text-primary-foreground hover:bg-primary/90 font-body"
              >
                View My Projects
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <img
                src={profilePhoto}
                alt="Priya - MCA Student"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover object-[center_30%] shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
