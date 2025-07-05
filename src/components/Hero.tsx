
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-teal-500/20 rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-muted-foreground/30 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {['SELECT *', 'pandas.DataFrame', 'plt.show()', 'df.groupby()', 'np.array()', 'JOIN', 'WHERE', 'GROUP BY'][i]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-in-up">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-2 border-primary/20 shadow-2xl animate-glow">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                  alt="Yashwanth Kumar Kotla" 
                  className="object-cover" 
                />
                <AvatarFallback className="bg-gradient-to-br from-primary to-emerald-600 text-background text-2xl md:text-3xl font-bold">
                  YK
                </AvatarFallback>
              </Avatar>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-emerald-400 to-teal-400 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Data Analyst & Storyteller
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="text-gradient">Yashwanth Kumar</span>
                <br />
                <span className="text-foreground">Kotla</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming complex data into compelling stories that drive 
              <span className="text-primary font-semibold"> strategic decisions</span> and 
              <span className="text-primary font-semibold"> business growth</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-background px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/Yashwanth-Kumar-Kotla/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/Yashwanth-Kumar-Kotla/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:kotla.yashwanthkumar@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
