
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-portfolio-accent/10 bg-portfolio-darker">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-xl text-portfolio-accent mb-4">
              <span className="font-mono">&lt;</span>PB<span className="font-mono">/&gt;</span>
            </div>
            <p className="text-portfolio-muted max-w-xs">
              Computer Science Engineer focusing on full-stack development and machine learning
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-portfolio-muted hover:text-portfolio-accent">Home</Link>
              <Link to="/about" className="text-sm text-portfolio-muted hover:text-portfolio-accent">About</Link>
              <Link to="/experience" className="text-sm text-portfolio-muted hover:text-portfolio-accent">Experience</Link>
              <Link to="/projects" className="text-sm text-portfolio-muted hover:text-portfolio-accent">Projects</Link>
              <Link to="/contact" className="text-sm text-portfolio-muted hover:text-portfolio-accent">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <a 
                href="mailto:priyanathbhukta@gmail.com" 
                className="text-sm text-portfolio-muted hover:text-portfolio-accent flex items-center gap-2"
              >
                <Mail size={16} />
                <span>priyanathbhukta@gmail.com</span>
              </a>
              <a 
                href="tel:+919163620567" 
                className="text-sm text-portfolio-muted hover:text-portfolio-accent flex items-center gap-2"
              >
                <Phone size={16} />
                <span>+91 916-362-0567</span>
              </a>
              <div className="flex gap-3 mt-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-muted hover:text-portfolio-accent"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-muted hover:text-portfolio-accent"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-portfolio-accent/10 text-center text-sm text-portfolio-muted">
          <p>© {currentYear} Priyanath Bhukta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
