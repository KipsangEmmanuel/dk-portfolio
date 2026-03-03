import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useDarkMode } from "../hooks/useDarkMode";
import { cn } from "../lib/utils";
import profilePic from "../assets/profile.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Technologies", href: "#technologies" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { isDark, toggleDarkMode } = useDarkMode();

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href.replace("#", ""));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-[1.02]"
        >
          <img
            src={profilePic}
            alt="Dennis Kibet"
            className="w-10 h-10 rounded-full border-2 border-primary shadow-concave transition-all duration-300 group-hover:shadow-lg"
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
            Kibet Dennis<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "group text-sm font-medium transition-all duration-300 relative",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary hover:-translate-y-0.5",
                )}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            );
          })}

          <Button
            variant="outline"
            size="sm"
            onClick={toggleDarkMode}
            className="transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            {isDark ? "Dark Mode" : "Light Mode"}
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMenuOpen(!menuOpen)}
            className="transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            {menuOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};
