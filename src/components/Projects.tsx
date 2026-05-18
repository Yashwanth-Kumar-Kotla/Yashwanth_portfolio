import { useState } from "react";
import { ExternalLink, Github, Brain, Heart, BarChart3, Layers, Sparkles, ShoppingCart } from "lucide-react";
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
      fullDescription: "Built a dual-intelligence collaboration engine where GPT-4 and Gemini work together through a four-stage pipeline: independent responses, cross-evaluation, critique, and unified synthesis. The result is higher accuracy and deeper reasoning than either model alone. Features a production-deployed Next.js frontend with real-time model interaction.",
      tools: ["Next.js", "GPT-4 API", "Gemini API", "Tailwind CSS", "Multi-Agent AI"],
      category: "AI / LLM",
      icon: Sparkles,
      highlights: [
        "Four-stage pipeline: query → dual responses → cross-critique → unified answer",
        "Two LLMs reviewing each other's work for higher accuracy",
        "Production-deployed with live demo at auraduo.app",
        "Modern responsive UI built with Next.js and Tailwind"
      ],
      image: "photo-1694903089438-bf28d4697d9a",
      github: "https://github.com/Yashwanth-Kumar-Kotla/aura-dual-intelligence",
      demo: "https://www.auraduo.app/"
    },
    {
      id: 2,
      title: "Next-Word Prediction with LSTM",
      shortDescription: "Deep learning NLP model that predicts the next word in a sentence, trained on two corpora including Sherlock Holmes",
      fullDescription: "Built a PyTorch LSTM language model trained on two distinct corpora: a custom 40-sentence dataset and the full Sherlock Holmes novel. The architecture uses an embedding layer (vocab → 100 dims) → LSTM (100 → 150 hidden units) → linear output layer. Supports autoregressive inference for multi-word text generation. Deployed as a live Streamlit web app.",
      tools: ["Python", "PyTorch", "LSTM", "NLP", "Streamlit"],
      category: "Deep Learning / NLP",
      icon: Brain,
      highlights: [
        "96.36% accuracy on custom corpus, 86% on Sherlock Holmes novel",
        "Autoregressive inference for multi-word text generation",
        "Dual corpus training to test generalization across domains",
        "Live demo deployed on Streamlit Cloud"
      ],
      image: "photo-1453090522900-026de5423c2a",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Next-Word-Prediction-Using-LSTM",
      demo: "https://nextt-word-predictor.streamlit.app"
    },
    {
      id: 3,
      title: "Fashion-MNIST Image Classifier (ANN)",
      shortDescription: "PyTorch neural network for clothing classification with batch normalization, dropout, and GPU acceleration",
      fullDescription: "Built a multi-layer perceptron (784→128→64→10) in PyTorch to classify 10 clothing categories from the Fashion-MNIST dataset. Implements batch normalization, dropout regularization (p=0.3), ReLU activations, and Adam/SGD optimization. Includes custom Dataset and DataLoader classes, CUDA GPU support, and demonstrates modern deep learning best practices end-to-end.",
      tools: ["Python", "PyTorch", "ANN", "GPU / CUDA", "Batch Normalization"],
      category: "Deep Learning",
      icon: Layers,
      highlights: [
        "MLP architecture with batch normalization and dropout regularization",
        "GPU acceleration via CUDA for faster training",
        "Custom Dataset and DataLoader classes for clean data pipelines",
        "Demonstrates overfitting prevention with modern regularization"
      ],
      image: "photo-1445205170230-053b83016050",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Fashion-MNIST-using-ANN",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/Fashion-MNIST-using-ANN"
    },
    {
      id: 4,
      title: "Walmart Sales EDA",
      shortDescription: "End-to-end business intelligence analysis on 10k Walmart transactions using Python and SQL",
      fullDescription: "Comprehensive data analysis of a 10,000-row Walmart sales dataset. Built a full data pipeline using Kaggle API for ingestion, Python (Pandas, NumPy) for transformation, and both MySQL and PostgreSQL for structured querying. Solved real business intelligence questions around revenue trends, top-performing categories, peak hours, and customer behavior patterns.",
      tools: ["Python", "Pandas", "MySQL", "PostgreSQL", "Kaggle API"],
      category: "Business Analytics",
      icon: ShoppingCart,
      highlights: [
        "Full pipeline from Kaggle API ingestion to SQL analysis",
        "Dual-database querying with MySQL and PostgreSQL",
        "Revenue trends, category performance, and customer segmentation",
        "Structured problem-solving approach to business intelligence questions"
      ],
      image: "photo-1551288049-bebda4e38f71",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Walmart_Exploratory_Data_Analysis",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/Walmart_Exploratory_Data_Analysis"
    },
    {
      id: 5,
      title: "Diabetes Risk Predictor",
      shortDescription: "Interactive SVM-based web app for real-time diabetes risk assessment from clinical health metrics",
      fullDescription: "End-to-end ML project using a Support Vector Machine trained on 8 clinical health parameters (glucose, BMI, blood pressure, insulin, age, etc.) to predict diabetes risk. Deployed as an interactive Streamlit web application with real-time predictions. Covers the full pipeline from preprocessing and feature scaling to model evaluation and live deployment.",
      tools: ["Python", "Scikit-learn", "SVM", "Streamlit", "Pandas"],
      category: "Healthcare ML",
      icon: Heart,
      highlights: [
        "SVM classifier on 8 key clinical biomarkers",
        "Real-time prediction via live Streamlit web app",
        "End-to-end pipeline: preprocessing → training → deployment",
        "Interpretable results designed for healthcare decision support"
      ],
      image: "photo-1624454002429-40ed87a5ec04",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Streamlit-ML-using-Diabetes-Prediction-Model",
      demo: "https://diabetespredictionusing.streamlit.app"
    },
    {
      id: 6,
      title: "Breast Cancer Detection using ML",
      shortDescription: "Multi-algorithm classifier for early breast cancer detection, optimized for high recall",
      fullDescription: "Built a classification system to detect malignant vs benign tumors from diagnostic features. Compared Logistic Regression, Random Forest, and SVM, selecting the best model based on recall — the critical metric in medical diagnosis where false negatives carry the highest cost. Includes feature importance analysis for clinical interpretability.",
      tools: ["Python", "Scikit-learn", "Random Forest", "SVM", "NumPy"],
      category: "Healthcare ML",
      icon: BarChart3,
      highlights: [
        "Recall-optimized model selection for medical safety",
        "Head-to-head comparison of Logistic Regression, Random Forest, and SVM",
        "Feature importance analysis for clinical interpretability",
        "Demonstrates understanding of evaluation metrics beyond accuracy"
      ],
      image: "photo-1518152006812-edab29b069ac",
      github: "https://github.com/Yashwanth-Kumar-Kotla/Breast-cancer-detection-using-ML",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/Breast-cancer-detection-using-ML"
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
