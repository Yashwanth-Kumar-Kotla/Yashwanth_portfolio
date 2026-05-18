
import { Database, BarChart3, Brain, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Model Development",
      description: "Design, train, and validate production-ready ML models tailored to your business problem.",
      features: ["Classification & regression modeling", "Hyperparameter tuning & cross-validation", "Model interpretability (SHAP, LIME)", "End-to-end pipeline design"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics & Forecasting",
      description: "Anticipate future trends and outcomes with statistically robust forecasting models.",
      features: ["Time-series analysis (ARIMA, Prophet, LSTM)", "Demand & revenue forecasting", "Churn prediction & retention modeling", "Scenario simulation & uncertainty quantification"]
    },
    {
      icon: Database,
      title: "Data Engineering & Feature Engineering",
      description: "Build solid data foundations and craft high-signal features that supercharge model performance.",
      features: ["ETL pipeline design & automation", "Feature selection & dimensionality reduction", "Data wrangling at scale with pandas & SQL", "Reproducible ML workflows"]
    },
    {
      icon: BarChart3,
      title: "Statistical Analysis & Hypothesis Testing",
      description: "Apply rigorous statistical methods to validate assumptions and extract trustworthy insights.",
      features: ["A/B testing & experiment design", "Regression & multivariate analysis", "Distribution fitting & Bayesian inference", "Causal inference & confounding control"]
    },
    {
      icon: Lightbulb,
      title: "NLP & Text Analytics",
      description: "Unlock value from unstructured text data using modern natural language processing techniques.",
      features: ["Sentiment analysis & opinion mining", "Topic modeling (LDA, BERTopic)", "Named entity recognition & text classification", "Transformer-based model fine-tuning"]
    },
    {
      icon: Users,
      title: "AI-Powered Insights & Reporting",
      description: "Translate complex model outputs into clear, executive-ready narratives that drive decisions.",
      features: ["Interactive dashboards & automated reports", "Data storytelling for non-technical stakeholders", "ROI measurement & KPI tracking", "Strategic recommendations grounded in evidence"]
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
            End-to-end data science services — from raw data to deployed models — that give you a measurable competitive edge
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
            Ready to build something intelligent with your data? Let's collaborate to engineer solutions that predict, classify, and deliver real business value.
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
