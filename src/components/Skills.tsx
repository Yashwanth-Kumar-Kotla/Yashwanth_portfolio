
import { Code, Database, BarChart3, Brain, Users, Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, tools: "Pandas, NumPy, Matplotlib, Seaborn, Plotly" },
    { name: "SQL", level: 85, tools: "Data querying, joins, aggregations" },
    { name: "Data Visualization", level: 88, tools: "Matplotlib, Seaborn, Plotly, Excel" },
    { name: "Data Analysis", level: 82, tools: "Statistical analysis, trend identification" },
    { name: "Excel", level: 80, tools: "Advanced formulas, pivot tables, charts" },
    { name: "APIs & Tools", level: 75, tools: "Jupyter, Google Colab, GitHub, Hugging Face" },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 92 },
    { name: "Analytical Thinking", level: 88 },
    { name: "Communication", level: 85 },
    { name: "Attention to Detail", level: 90 },
    { name: "Data Storytelling", level: 83 },
    { name: "Critical Thinking", level: 87 },
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
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="border-t-4 border-t-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <Code className="mr-3 h-6 w-6" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <p className="text-xs text-gray-500">{skill.tools}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="border-t-4 border-t-teal-600">
            <CardHeader>
              <CardTitle className="flex items-center text-teal-600">
                <Users className="mr-3 h-6 w-6" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
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
