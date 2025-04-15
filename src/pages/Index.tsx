import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { downloadResume } from "@/lib/resumeUtils";

// Tech stack icons would be imported or embedded SVGs in a real implementation
const techStack = [
  { name: "Java", icon: "java.svg" },
  { name: "Spring Boot", icon: "spring-boot.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Express", icon: "express.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "TensorFlow", icon: "tensorflow.svg" }
];

const recentProjects = [
  {
    title: "OncoVision",
    description: "CNN model for brain tumor detection from MRI images with 82% accuracy.",
    tech: ["CNN", "TensorFlow", "Medical Imaging"],
    link: "/projects"
  },
  {
    title: "PulsePredict",
    description: "Heart disease prediction model using Random Forest Classifier, achieving 93.27% accuracy.",
    tech: ["Random Forest", "Feature Engineering", "Healthcare"],
    link: "/projects"
  },
  {
    title: "HealthDekho",
    description: "Health insurance cost prediction using linear regression with 92.15% accuracy.",
    tech: ["Linear Regression", "Insurance", "Data Analysis"],
    link: "/projects"
  }
];

export default function Home() {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    // This would be replaced with actual resume file
    const link = document.createElement("a");
    link.href = "/resume-priyanath-bhukta.pdf";
    link.download = "Resume-Priyanath-Bhukta.pdf";
    link.click();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative bg-portfolio-darker overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 z-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 lg:col-start-1 flex flex-col justify-center">
              <Badge className="w-fit mb-6 bg-portfolio-accent text-white">Computer Science Engineer</Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-accent to-portfolio-accentLight animate-gradient-x">
                  Priyanath Bhukta
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-portfolio-muted mb-8 max-w-2xl">
                Full-stack developer and machine learning enthusiast specializing in
                Java, Spring Boot, React, Node.js, and healthcare applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={downloadResume}
                  className="bg-portfolio-accent hover:bg-portfolio-accentDark text-white shadow-lg shadow-portfolio-primary/30 hover:shadow-portfolio-primary/40 transition-shadow duration-300"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
                
                <Button 
                  onClick={scrollToProjects}
                  variant="outline" 
                  className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10"
                  size="lg"
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex gap-5 mt-10">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:priyanathbhukta@gmail.com" 
                  className="text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
              {/* Code snippet decoration */}
              <div className="p-4 bg-portfolio-code rounded-lg border border-portfolio-accent/30 shadow-lg shadow-portfolio-accent/20 w-full max-w-md code-block">
                <pre className="text-xs text-portfolio-text font-mono overflow-x-auto whitespace-pre">
{`// Priyanath's expertise
class SoftwareEngineer {
  constructor() {
    this.name = "Priyanath Bhukta";
    this.role = "Computer Science Engineer";
    this.skills = [
      "Java Full-Stack",
      "Node.js Backend",
      "Machine Learning"
    ];
  }

  solveProblems() {
    return this.skills.map(skill => 
      optimize(implement(design(skill)))
    );
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-portfolio-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-10 text-center text-portfolio-accent">
            Technologies I Work With
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <div 
                key={tech.name}
                className="flex flex-col items-center p-4 bg-portfolio-darker rounded-lg border border-portfolio-accent/10 w-[100px] h-[100px] justify-center transition-all hover:shadow-md hover:shadow-portfolio-accent/20"
              >
                {/* In a real app, you'd use actual tech icons */}
                <div className="w-10 h-10 rounded-full bg-portfolio-accent/20 flex items-center justify-center mb-2">
                  <span className="text-portfolio-accent text-xs font-bold">{tech.name.substring(0, 2)}</span>
                </div>
                <span className="text-sm text-portfolio-text text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 bg-portfolio-darker">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-portfolio-accent">Featured Projects</h2>
            <Link 
              to="/projects" 
              className="text-portfolio-accent hover:text-portfolio-accentLight flex items-center gap-2"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card key={index} className="bg-portfolio-darker border-portfolio-accent/20 hover:shadow-md hover:shadow-portfolio-accent/10 transition-all">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-portfolio-accent">{project.title}</h3>
                  <p className="text-portfolio-muted mb-4 min-h-[80px]">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-portfolio-accent/30 text-portfolio-muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link 
                    to={project.link} 
                    className="flex items-center text-portfolio-accent hover:text-portfolio-accentLight gap-1 text-sm"
                  >
                    View Details <ExternalLink size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button 
              asChild
              className="bg-portfolio-accent hover:bg-portfolio-accentDark text-white"
            >
              <Link to="/projects">
                Explore All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-portfolio-darker via-portfolio-code to-portfolio-darker">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-portfolio-accent">Let's Work Together</h2>
          <p className="text-portfolio-text max-w-2xl mx-auto mb-8">
            I'm always interested in new opportunities, collaborations, and projects. 
            Feel free to reach out if you think we could create something amazing together.
          </p>
          
          <Button 
            asChild
            className="bg-portfolio-accent hover:bg-portfolio-accentDark text-white"
            size="lg"
          >
            <Link to="/contact">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
