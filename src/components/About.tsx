
import { GraduationCap, Award, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed">
                Hello! I'm <span className="font-semibold text-blue-600">Yashwanth Kumar Kotla</span>, 
                an aspiring Data Analyst with a passion for transforming raw data into meaningful insights 
                that drive strategic decision-making.
              </p>
              <p>
                With a strong academic foundation and hands-on experience in data analysis, 
                I specialize in uncovering patterns, trends, and opportunities hidden within complex datasets. 
                My approach combines technical expertise with storytelling to make data accessible and actionable.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest tools and methodologies 
                in the ever-evolving field of data science. Every project is an opportunity to solve real-world 
                problems through analytical thinking and innovative solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-blue-600">
                  <GraduationCap className="mr-3 h-6 w-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-800">Master of Science in Data Analytics</h4>
                  <p className="text-gray-600">Webster University</p>
                  <p className="text-sm text-gray-500">Expected March 2026 | CGPA: 3.8/4.0</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <h4 className="font-semibold text-gray-800">B.Tech in Information Technology</h4>
                  <p className="text-gray-600">Jawaharlal Institute of Technology and Science</p>
                  <p className="text-sm text-gray-500">2024 | CGPA: 7.48/10</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-600 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-teal-600">
                  <Target className="mr-3 h-6 w-6" />
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Sales trend analysis and forecasting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Job market insights and analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Interactive data visualizations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Data storytelling and communication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
