
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced YK Logo with Cool Animations */}
          <div 
            className="cursor-pointer group relative"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 bg-gradient-to-br from-primary to-emerald-600 shadow-lg group-hover:shadow-primary/25">
              <span className="text-xl font-bold transition-all duration-300 group-hover:scale-125 text-background">
                YK
              </span>
              
              {/* Rotating border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500 -z-10 blur-sm"></div>
              
              {/* Pulsing glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-emerald-400 opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-all duration-300 blur-md -z-10"></div>
              
              {/* Expanding ring effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium transition-all duration-200 hover:text-primary relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-background font-semibold transition-all duration-200 hover:scale-105"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-card/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-border/50">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-background font-semibold mt-4"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
