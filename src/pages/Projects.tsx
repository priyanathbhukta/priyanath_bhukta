
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OncoVision",
    description: "A machine learning project focused on brain tumor detection using CNN models with MRI imaging data.",
    tags: ["Machine Learning", "CNN", "TensorFlow", "Medical Imaging"],
    highlights: [
      "Designed a CNN model for detecting brain tumours from MRI images, achieving 82% accuracy.",
      "Applied the Tanh activation function with 3 hidden layers to improve model efficiency.",
      "Employed BCELoss for binary classification to ensure accurate tumour identification.",
    ],
    timeline: "Oct 2024",
    imagePath: "/project-medical-ai.jpg", 
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "PulsePredict",
    description: "Heart disease risk prediction system using random forest classifier and patient data.",
    tags: ["Machine Learning", "Random Forest", "Healthcare", "Data Analysis"],
    highlights: [
      "Engineered a sophisticated model to effectively predict heart disease risk using comprehensive patient data.",
      "Utilized the Random Forest Classifier with feature engineering and hyperparameter tuning.",
      "Achieved 93.27% accuracy on the validation dataset through meticulous testing."
    ],
    timeline: "Sep - Oct 2024",
    imagePath: "/project-heart-data.jpg",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "HealthDekho",
    description: "A health insurance cost estimator using linear regression techniques.",
    tags: ["Linear Regression", "Insurance", "Data Modeling", "Cost Prediction"],
    highlights: [
      "Built a comprehensive predictive model for health insurance cost estimation.",
      "Implemented linear regression techniques for accurate premium prediction.",
      "Achieved 92.15% accuracy in estimating insurance premiums."
    ],
    timeline: "2024",
    imagePath: "/project-insurance.jpg",
    links: {
      github: "#",
      live: "#"
    }
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-primary">Projects</h1>
        <p className="text-lg text-portfolio-muted max-w-3xl">
          Here are some of the notable projects I've worked on, showcasing my 
          experience in machine learning, healthcare applications, and predictive modeling.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <Card className="bg-portfolio-darker border-portfolio-primary/20 overflow-hidden transition-all hover:shadow-md hover:shadow-portfolio-primary/20">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 h-full">
                    {/* Project image */}
                    <div className="h-full w-full flex items-center justify-center overflow-hidden">
                      <img 
                        src={project.imagePath} 
                        alt={project.title}
                        className="object-cover w-full h-full min-h-[250px]"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h2 className="text-2xl font-bold text-portfolio-primary">{project.title}</h2>
                      <span className="text-sm text-portfolio-muted mt-2 md:mt-0">{project.timeline}</span>
                    </div>
                    
                    <p className="text-portfolio-text mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} className="bg-portfolio-code text-portfolio-text hover:bg-portfolio-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-2 text-portfolio-text">Key Highlights:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-portfolio-muted">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4 mt-2">
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-muted hover:text-portfolio-primary flex items-center gap-2"
                      >
                        <Github size={18} />
                        <span className="text-sm">View Code</span>
                      </a>
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-muted hover:text-portfolio-primary flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>
      
      <section className="mt-16 mb-10 p-8 border border-portfolio-primary/20 rounded-md bg-portfolio-darker">
        <h2 className="text-2xl font-semibold mb-4 text-portfolio-primary">More Projects Coming Soon</h2>
        <p className="text-portfolio-muted">
          I'm constantly working on new and exciting projects. Check back soon for more updates on my latest work, 
          or connect with me to discuss potential collaborations.
        </p>
      </section>
    </div>
  );
}
