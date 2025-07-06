
import { Code, Database, BarChart3, Brain, Users, Target, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = [
    { 
      name: "Python", 
      level: "Advanced", 
      tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
      stars: 5
    },
    { 
      name: "SQL", 
      level: "Advanced", 
      tools: ["Data querying", "Joins", "Aggregations"],
      stars: 4
    },
    { 
      name: "Data Visualization", 
      level: "Advanced", 
      tools: ["Matplotlib", "Seaborn", "Plotly", "Excel"],
      stars: 5
    },
    { 
      name: "Data Analysis", 
      level: "Intermediate", 
      tools: ["Statistical analysis", "Trend identification"],
      stars: 4
    },
    { 
      name: "Excel", 
      level: "Intermediate", 
      tools: ["Advanced formulas", "Pivot tables", "Charts"],
      stars: 4
    },
    { 
      name: "APIs & Tools", 
      level: "Intermediate", 
      tools: ["Jupyter", "Google Colab", "GitHub", "Hugging Face"],
      stars: 3
    },
  ];

  const softSkills = [
    { name: "Problem Solving", level: "Expert" },
    { name: "Analytical Thinking", level: "Advanced" },
    { name: "Communication", level: "Advanced" },
    { name: "Attention to Detail", level: "Expert" },
    { name: "Data Storytelling", level: "Advanced" },
    { name: "Critical Thinking", level: "Advanced" },
  ];

  const expertiseAreas = [
    {
      icon: BarChart3,
      title: "Sales Analysis",
      description: "Seasonal trend identification and performance optimization"
    },
    {
      icon: Target,
      title: "Market Insights",
      description: "Job market analysis and salary pattern exploration"
    },
    {
      icon: Database,
      title: "Data Processing",
      description: "Large dataset cleaning and preparation"
    },
    {
      icon: Brain,
      title: "Strategic Insights",
      description: "Converting data into actionable business recommendations"
    }
  ];

  const renderStars = (count: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 transition-colors duration-300 ${
              index < count 
                ? "fill-yellow-400 text-yellow-400 hover:fill-cyan-400 hover:text-cyan-400" 
                : "text-gray-300 hover:text-cyan-200"
            }`}
          />
        ))}
      </div>
    );
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200 hover:bg-cyan-100 hover:text-cyan-800 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50";
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-200 hover:bg-cyan-100 hover:text-cyan-800 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50";
      case "Intermediate":
        return "bg-orange-100 text-orange-800 border-orange-200 hover:bg-cyan-100 hover:text-cyan-800 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 hover:bg-cyan-100 hover:text-cyan-800 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-200/50";
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into insights
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group cursor-hover">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-cyan-200 group-hover:to-blue-200 group-hover:shadow-lg group-hover:shadow-cyan-200/50 transition-all duration-300">
                  <area.icon className="h-8 w-8 text-blue-600 group-hover:text-cyan-600 transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-cyan-700 transition-colors duration-300">{area.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="border-t-4 border-t-blue-600 hover:border-t-cyan-500 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600 hover:text-cyan-600 transition-colors duration-300">
                <Code className="mr-3 h-6 w-6" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-3 group cursor-hover">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-gray-800 group-hover:text-cyan-700 group-hover:animate-glow transition-all duration-300">{skill.name}</h4>
                        <Badge className={`${getLevelColor(skill.level)} transition-all duration-300 transform group-hover:scale-105`}>
                          {skill.level}
                        </Badge>
                      </div>
                      {renderStars(skill.stars)}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="outline" 
                        className="text-xs hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 hover:shadow-md hover:shadow-cyan-200/30 transition-all duration-300 transform hover:scale-105 cursor-hover"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="border-t-4 border-t-teal-600 hover:border-t-cyan-500 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-600 hover:text-cyan-600 transition-colors duration-300">
                <Users className="mr-3 h-6 w-6" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-cyan-50 hover:shadow-md hover:shadow-cyan-200/30 transition-all duration-300 group cursor-hover">
                  <h4 className="font-semibold text-gray-800 group-hover:text-cyan-700 group-hover:animate-glow transition-all duration-300">{skill.name}</h4>
                  <Badge className={`${getLevelColor(skill.level)} transition-all duration-300 transform group-hover:scale-105`}>
                    {skill.level}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
