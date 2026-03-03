import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40 shadow-concave pt-12 pb-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-2xl font-bold text-primary">Dennis Kibet</h3>
          <p className="text-muted-foreground text-center md:text-left max-w-sm">
            Full Stack Software Engineer - building scalable, maintainable, and
            production-ready systems.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#technologies"
              className="hover:text-primary transition-colors"
            >
              Technologies
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-lg font-semibold text-primary">
            Connect with me
          </h4>
          <div className="flex gap-3">
            <a
              href="https://github.com/Kibetkipsang"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card shadow-concave hover:shadow-concave-pressed text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kibet-dennis-9320a8265/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card shadow-concave hover:shadow-concave-pressed text-muted-foreground hover:text-accent-blue transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/254719165008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card shadow-concave hover:shadow-concave-pressed text-muted-foreground hover:text-green-500 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="tel:+254719165008"
              className="p-2 rounded-full bg-card shadow-concave hover:shadow-concave-pressed text-muted-foreground hover:text-destructive transition-colors"
            >
              <FaPhone size={20} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground pt-2 text-center md:text-right">
            © {new Date().getFullYear()} Dennis Kibet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
