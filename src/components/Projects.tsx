import { useState } from "react";
import { ExternalLink, Github, Brain, Heart, Home, CloudRain, Sparkles, Anchor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Aura Dual Intelligence",
      shortDescription: "Multi-agent AI system combining GPT-4 and Gemini for enhanced reasoning and accuracy",
      fullDescription: "Built a sophisticated dual-intelligence collaboration engine where GPT-4 and Gemini work together to critique, evaluate, and synthesize answers. The system leverages the strengths of both models to achieve higher accuracy and deeper reasoning through multi-agent collaboration. Features real-time model interaction and a modern Next.js frontend.",
      tools: ["Next.js", "GPT-4 API", "Gemini API", "Tailwind CSS", "Multi-Agent AI"],
      category: "AI / LLM",
      icon: Sparkles,
      highlights: [
        "Dual LLM architecture for cross-validation of responses",
        "Real-time collaborative reasoning between AI models",
        "Production-deployed application with live demo",
        "Modern responsive UI with Next.js and Tailwind"
      ],
      image: "photo-1677442136019-21780ecad995",
      github: "https://github.com/Yashwanth-Kumar-Kotla/aura-dual-intelligence",
      demo: "https://www.auraduo.app/"
    },
    {
      id: 2,
      title: "Breast Cancer Detection using ML",
      shortDescription: "Machine learning model for early breast cancer detection with high accuracy classification",
      fullDescription: "Developed a machine learning classification system to detect breast cancer from diagnostic features. Implemented multiple ML algorithms including Logistic Regression, Random Forest, and SVM, comparing their performance to select the optimal model. Focused on achieving high recall to minimize false negatives in medical diagnosis.",
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Classification"],
      category: "Healthcare ML",
      icon: Heart,
      highlights: [
        "Binary classification for malignant/benign tumor detection",
        "Compared multiple ML algorithms for best performance",
        "Feature importance analysis for medical insights",
        "High recall optimization for medical safety"
      ],
      image: "photo-1559757175-5700dde675bc",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Breast-cancer-detection-using-ML",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/Breast-cancer-detection-using-ML"
    },
    {
      id: 3,
      title: "Diabetes Prediction System",
      shortDescription: "ML-powered prediction system to identify diabetes risk from patient health metrics",
      fullDescription: "Built a predictive model using supervised machine learning to identify patients at risk of diabetes based on health indicators like glucose levels, BMI, blood pressure, and other diagnostic measurements. Implemented data preprocessing, feature scaling, and model evaluation with cross-validation.",
      tools: ["Python", "Scikit-learn", "Pandas", "SVM", "Logistic Regression"],
      category: "Healthcare ML",
      icon: Brain,
      highlights: [
        "Predictive modeling for diabetes risk assessment",
        "Data preprocessing and feature engineering pipeline",
        "Model evaluation with cross-validation techniques",
        "Interpretable results for healthcare decisions"
      ],
      image: "photo-1576091160550-2173dba999ef",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Diabetes-Prediction-using-Machine-Learning-with-Python",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/Diabetes-Prediction-using-Machine-Learning-with-Python"
    },
    {
      id: 4,
      title: "California Housing Price Prediction",
      shortDescription: "Regression model to predict housing prices based on location and property features",
      fullDescription: "Developed a comprehensive regression model to predict California housing prices using features like location, median income, house age, and proximity to ocean. Implemented feature engineering, handled missing values, and compared multiple regression algorithms including Linear Regression, Random Forest, and Gradient Boosting.",
      tools: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Regression"],
      category: "Regression ML",
      icon: Home,
      highlights: [
        "Multi-feature regression with geographical data",
        "Ensemble methods for improved predictions",
        "Feature engineering and data preprocessing",
        "Model comparison and hyperparameter tuning"
      ],
      image: "photo-1560518883-ce09059eeffa",
      github: "https://github.com/Yashwanth-Kumar-Kotla/California-Housing-Dataset",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/California-Housing-Dataset"
    },
    {
      id: 5,
      title: "Rainfall Prediction Challenge",
      shortDescription: "Classification model to predict rainfall occurrence using meteorological data",
      fullDescription: "Built a classification model to predict whether it will rain based on various meteorological features including temperature, humidity, wind speed, and atmospheric pressure. Implemented advanced feature engineering, handled imbalanced classes, and optimized for prediction accuracy.",
      tools: ["Python", "XGBoost", "LightGBM", "Feature Engineering", "Classification"],
      category: "Classification ML",
      icon: CloudRain,
      highlights: [
        "Weather prediction using ML classification",
        "Handling imbalanced dataset techniques",
        "Advanced feature engineering from raw data",
        "Ensemble methods for robust predictions"
      ],
      image: "photo-1534088568595-a066f410bcda",
      github: "https://github.com/Yashwanth-Kumar-Kotla/rainfall-prediction-challenge-classification",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/rainfall-prediction-challenge-classification"
    },
    {
      id: 6,
      title: "Rock vs Mine Sonar Prediction",
      shortDescription: "Binary classifier using sonar signals to distinguish between rocks and underwater mines",
      fullDescription: "Implemented a supervised machine learning model to classify sonar signals as either rocks or mines. This classic ML problem involves analyzing 60 sonar frequency features to make accurate predictions. Applied logistic regression with careful data preprocessing and model evaluation.",
      tools: ["Python", "Scikit-learn", "Logistic Regression", "NumPy", "Binary Classification"],
      category: "Classification ML",
      icon: Anchor,
      highlights: [
        "Binary classification on sonar signal data",
        "60-feature analysis for pattern recognition",
        "Logistic Regression implementation",
        "Comprehensive model evaluation metrics"
      ],
      image: "photo-1551244072-5d12893278ab",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Rock-or-Mine-Predictor-using-supervised-ML",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/Rock-or-Mine-Predictor-using-supervised-ML"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Machine Learning and AI projects showcasing end-to-end implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&h=300`}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="flex items-start justify-between">
                  <div className="flex items-center">
                    <project.icon className="mr-3 h-5 w-5 text-blue-600" />
                    <span className="text-lg">{project.title}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 4).map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tools.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" size="sm" className="flex-1">
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center text-2xl">
                          <project.icon className="mr-3 h-8 w-8 text-blue-600" />
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-base">
                          {project.fullDescription}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-6">
                        <img 
                          src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&h=400`}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        
                        <div>
                          <h4 className="font-semibold text-lg mb-3">Key Highlights</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tools.map((tool, index) => (
                              <Badge key={index} variant="secondary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3 pt-4">
                          <Button asChild variant="default">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                          {project.demo !== project.github && (
                            <Button asChild variant="outline">
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  {project.demo !== project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more projects?</p>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/Yashwanth-Kumar-Kotla/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
