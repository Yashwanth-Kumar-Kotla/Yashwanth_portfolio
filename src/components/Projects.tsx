import { useState } from "react";
import { ExternalLink, Github, BarChart3, TrendingUp, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Walmart Sales Analysis Project",
      shortDescription: "Comprehensive analysis of Walmart sales data to identify trends and performance patterns",
      fullDescription: "Conducted an in-depth analysis of Walmart's sales dataset, cleaning and processing large volumes of transactional data. Identified seasonal trends, store-level performance variances, and customer behavior patterns. Built comprehensive visualizations to support data-driven decision making for retail strategy optimization.",
      tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      category: "Sales Analytics",
      icon: BarChart3,
      highlights: [
        "Analyzed 100,000+ sales records across multiple stores",
        "Identified 15% seasonal variance in sales patterns",
        "Created interactive dashboards for stakeholder presentation",
        "Provided actionable insights for inventory optimization"
      ],
      image: "photo-1461749280684-dccba630e2f6",
      github: "https://github.com/Yashwanth-Kumar-Kotla/",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/"
    },
    {
      id: 2,
      title: "Job Market Insights Project",
      shortDescription: "Analyzed 700,000+ job records to map skills demand and salary patterns",
      fullDescription: "Leveraged Hugging Face datasets to analyze over 700,000 job market records, mapping job titles to required skills and exploring salary patterns across different regions and industries. Built interactive visualizations using Plotly to provide strategic insights for career planning and market understanding.",
      tools: ["Python", "Plotly", "Hugging Face", "Pandas", "Statistical Analysis"],
      category: "Market Research",
      icon: TrendingUp,
      highlights: [
        "Processed 700,000+ job market records",
        "Mapped skill requirements across 50+ job categories",
        "Analyzed salary trends across multiple regions",
        "Built interactive career guidance visualizations"
      ],
      image: "photo-1518770660439-4636190af475",
      github: "https://github.com/Yashwanth-Kumar-Kotla/",
      demo: "https://github.com/Yashwanth-Kumar-Kotla/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications of data analysis and visualization techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <div className="flex items-center">
                    <project.icon className="mr-3 h-6 w-6 text-blue-600" />
                    <span className="text-xl">{project.title}</span>
                  </div>
                </CardTitle>
                <CardDescription className="text-base">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" size="sm" className="flex-1">
                        View Details
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
                          <Button asChild variant="outline">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              GitHub Profile
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
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
              Visit My GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
