
import { Database, BarChart3, FileText, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Database,
      title: "Data Cleaning & Preparation",
      description: "Transform messy datasets into clean, analysis-ready formats with proper validation and quality checks.",
      features: ["Data validation and quality assessment", "Missing value handling", "Outlier detection and treatment", "Data type optimization"]
    },
    {
      icon: BarChart3,
      title: "Exploratory Data Analysis (EDA)",
      description: "Uncover hidden patterns, relationships, and insights through comprehensive statistical analysis.",
      features: ["Statistical summaries and distributions", "Correlation analysis", "Pattern identification", "Data profiling reports"]
    },
    {
      icon: TrendingUp,
      title: "Visualization & Dashboard Creation",
      description: "Create compelling visual stories from your data with interactive charts and dashboards.",
      features: ["Interactive visualizations", "Custom dashboard development", "Automated reporting", "Mobile-responsive designs"]
    },
    {
      icon: FileText,
      title: "Job/Sales/Market Trend Reporting",
      description: "Comprehensive analysis of market trends, sales performance, and employment patterns.",
      features: ["Trend analysis and forecasting", "Market research insights", "Performance benchmarking", "Competitive analysis"]
    },
    {
      icon: Lightbulb,
      title: "Actionable Recommendations",
      description: "Convert data insights into strategic recommendations that drive business growth.",
      features: ["Strategic insights development", "Decision support analysis", "ROI optimization strategies", "Risk assessment reports"]
    },
    {
      icon: Users,
      title: "Data Storytelling & Communication",
      description: "Make complex data accessible to stakeholders through clear communication and storytelling.",
      features: ["Executive presentation preparation", "Non-technical audience translation", "Data-driven narratives", "Stakeholder workshops"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data analysis services to help you make informed decisions and drive business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-blue-600">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Open for Freelance Projects & Collaborations
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's work together to unlock the potential hidden in your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Start a Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
