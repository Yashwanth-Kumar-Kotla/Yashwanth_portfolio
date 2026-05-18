
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
                an aspiring Data Scientist with a passion for building intelligent systems and predictive models
                that transform raw data into strategic decisions with measurable business impact.
              </p>
              <p>
                With a strong academic foundation in data science and hands-on experience across the full
                ML lifecycle — from feature engineering and model selection to deployment and interpretation —
                I specialize in delivering solutions that are both technically rigorous and business-relevant.
              </p>
              <p>
                I thrive at the intersection of statistics, machine learning, and domain expertise. Whether
                it's building classification models, designing NLP pipelines, or uncovering trends through
                deep exploratory analysis, I bring curiosity and precision to every problem. I'm committed
                to continuous learning in this fast-moving field and driven by the belief that great data
                science doesn't just answer questions — it asks better ones.
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
                  <h4 className="font-semibold text-gray-800">Master of Science in Data Science</h4>
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
                    Machine learning model development & deployment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Predictive analytics & forecasting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Natural language processing & text analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    Feature engineering & statistical modeling
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
