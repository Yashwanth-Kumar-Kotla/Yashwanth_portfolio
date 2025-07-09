import { ArrowRight, Download, Mail, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-blue-300 rounded-full filter blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Floating data elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-blue-300/30 font-mono text-sm animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {
              [
                "SELECT *",
                "JOIN",
                "WHERE",
                "GROUP BY",
                "pandas",
                "numpy",
                "plt.show()",
                "df.head()",
              ][i % 8]
            }
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-white/20 shadow-2xl">
              <AvatarImage
                src="/lovable-uploads/bff2161f-7ca7-46b0-b34b-0fe852119fb7.png"
                alt="Yashwanth Kumar Kotla Profile Picture"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-br from-blue-600 to-teal-600 text-white text-2xl md:text-3xl font-bold">
                YK
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
            Yashwanth Kumar Kotla
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-blue-200 font-light">
            Aspiring Data Analyst | Python, SQL, Data Visualization
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Turning complex data into actionable insights through analysis and storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 text-lg group"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>

            {/* View Resume */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-3 text-lg"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </a>

            {/* Download Resume */}
            <a href="/resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
