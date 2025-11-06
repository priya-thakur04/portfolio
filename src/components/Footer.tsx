import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground font-body flex items-center justify-center gap-2">
            © 2025 Priya | All Rights Reserved
          </p>
          <p className="text-muted-foreground/60 text-sm mt-2 font-body flex items-center justify-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-primary fill-primary" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
