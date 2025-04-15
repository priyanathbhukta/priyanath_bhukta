
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a mock submission - in a real application, you would send this to a backend
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-accent">Get in Touch</h1>
        <p className="text-lg text-portfolio-muted max-w-3xl">
          I'm always open to discussing new projects, opportunities, or collaborations. 
          Feel free to reach out using the form below or through any of my contact channels.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-portfolio-darker border-portfolio-accent/20 text-portfolio-text"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="bg-portfolio-darker border-portfolio-accent/20 text-portfolio-text"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="bg-portfolio-darker border-portfolio-accent/20 text-portfolio-text"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="bg-portfolio-darker border-portfolio-accent/20 text-portfolio-text"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-portfolio-accent hover:bg-portfolio-accentDark text-white"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={16} className="ml-2" />
            </Button>
          </form>
        </div>
        
        <div>
          <Card className="bg-portfolio-darker border-portfolio-accent/20 h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-6 text-portfolio-accent">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-portfolio-accent mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-portfolio-text">Email</h3>
                    <a 
                      href="mailto:priyanathbhukta@gmail.com" 
                      className="text-portfolio-muted hover:text-portfolio-accent"
                    >
                      priyanathbhukta@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-portfolio-accent mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-portfolio-text">Phone</h3>
                    <a 
                      href="tel:+919163620567" 
                      className="text-portfolio-muted hover:text-portfolio-accent"
                    >
                      +91 916-362-0567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-portfolio-accent mt-1" />
                  <div>
                    <h3 className="text-sm font-medium text-portfolio-text">Location</h3>
                    <p className="text-portfolio-muted">Singur, West Bengal, India, 712409</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-sm font-medium text-portfolio-text mt-auto mb-3">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-portfolio-code rounded-lg text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-portfolio-code rounded-lg text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:priyanathbhukta@gmail.com"
                  className="p-2 bg-portfolio-code rounded-lg text-portfolio-muted hover:text-portfolio-accent transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
