import { useState } from "react";
import { Mail, Phone, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
          <p className="text-muted-foreground mt-4 font-body">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <div className="glass-card p-6 rounded-lg glow-effect">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:priyathaku144211@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      priyathaku144211@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-lg glow-effect">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+918837536392"
                      className="text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      +91 8837536392
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-lg glow-effect">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/priya-9362b8361/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <p className="text-foreground/80 font-body italic">
                  "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="glass-card p-6 rounded-lg space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary glow-effect font-body"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary glow-effect font-body"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="bg-input border-border focus:border-primary focus:ring-1 focus:ring-primary glow-effect resize-none font-body"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full glow-effect bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
