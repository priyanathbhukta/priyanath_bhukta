import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  FileEdit, 
  FilePlus, 
  UserCog, 
  LogOut, 
  Plus, 
  Eye, 
  Calendar, 
  Briefcase 
} from "lucide-react";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();
  
  // In a real application, we would check for a token or session
  // For demo purposes, we'll assume user is authenticated if they reached this page
  
  useEffect(() => {
    // Check if user should be here
    // For demo, we'll just keep them here
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    // In a real app, we would clear tokens/session
    setIsAuthenticated(false);
    navigate("/admin");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-portfolio-primary">Admin Dashboard</h1>
          <p className="text-portfolio-muted mt-2">Manage your portfolio content and settings</p>
        </div>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="mt-4 md:mt-0 border-portfolio-primary/30 text-portfolio-primary hover:bg-portfolio-primary/10"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-portfolio-darker border-portfolio-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-portfolio-text flex items-center">
              <Eye className="mr-2 h-5 w-5 text-portfolio-primary" />
              Page Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-portfolio-primary">1,234</div>
            <p className="text-portfolio-muted text-sm mt-2">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card className="bg-portfolio-darker border-portfolio-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-portfolio-text flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-portfolio-primary" />
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-portfolio-primary">3</div>
            <p className="text-portfolio-muted text-sm mt-2">Last added 2 days ago</p>
          </CardContent>
        </Card>
        
        <Card className="bg-portfolio-darker border-portfolio-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-portfolio-text flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-portfolio-primary" />
              Next Update
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-portfolio-primary">April 25, 2025</div>
            <p className="text-portfolio-muted text-sm mt-2">Scheduled content refresh</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="analytics" className="space-y-4">
          <Card className="bg-portfolio-darker border-portfolio-primary/20">
            <CardHeader>
              <CardTitle className="text-portfolio-primary flex items-center">
                <BarChart className="mr-2 h-5 w-5" />
                Visitor Analytics
              </CardTitle>
              <CardDescription>
                Track the performance of your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border border-dashed border-portfolio-primary/30 rounded-md">
                <p className="text-portfolio-muted">Analytics visualization would appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projects" className="space-y-4">
          <div className="flex justify-end mb-4">
            <Button className="bg-portfolio-primary hover:bg-portfolio-primaryDark">
              <Plus className="mr-2 h-4 w-4" />
              Add Project
            </Button>
          </div>
          
          <Card className="bg-portfolio-darker border-portfolio-primary/20">
            <CardHeader>
              <CardTitle className="text-portfolio-primary flex items-center">
                <FilePlus className="mr-2 h-5 w-5" />
                Manage Projects
              </CardTitle>
              <CardDescription>
                Add, edit or remove projects from your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ProjectListItem title="OncoVision" type="CNN Model" />
                <ProjectListItem title="PulsePredict" type="ML Project" />
                <ProjectListItem title="HealthDekho" type="Data Analysis" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience" className="space-y-4">
          <div className="flex justify-end mb-4">
            <Button className="bg-portfolio-primary hover:bg-portfolio-primaryDark">
              <Plus className="mr-2 h-4 w-4" />
              Add Experience
            </Button>
          </div>
          
          <Card className="bg-portfolio-darker border-portfolio-primary/20">
            <CardHeader>
              <CardTitle className="text-portfolio-primary flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Manage Experience
              </CardTitle>
              <CardDescription>
                Add, edit or remove work experience entries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ExperienceListItem 
                  position="Machine Learning Intern" 
                  company="Unified Mentor"
                  duration="Sept. 24 - Oct '24"
                />
                <ExperienceListItem 
                  position="POSp" 
                  company="InsuranceDekho"
                  duration="Apr '24 - Oct '24"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-4">
          <Card className="bg-portfolio-darker border-portfolio-primary/20">
            <CardHeader>
              <CardTitle className="text-portfolio-primary flex items-center">
                <UserCog className="mr-2 h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Update your personal details and resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-portfolio-muted">Full Name</label>
                    <input 
                      type="text" 
                      value="Priyanath Bhukta" 
                      className="w-full bg-portfolio-dark border border-portfolio-primary/30 rounded-md p-2 mt-1 text-portfolio-text"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-portfolio-muted">Email</label>
                    <input 
                      type="email" 
                      value="priyanathbhukta@gmail.com" 
                      className="w-full bg-portfolio-dark border border-portfolio-primary/30 rounded-md p-2 mt-1 text-portfolio-text"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-portfolio-muted">Bio</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-portfolio-dark border border-portfolio-primary/30 rounded-md p-2 mt-1 text-portfolio-text"
                    defaultValue="Computer science engineer with a strong foundation in Java full-stack development, Node.js backend, and machine learning..."
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-portfolio-primary hover:bg-portfolio-primaryDark">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper components for the list items
const ProjectListItem = ({ title, type }: { title: string, type: string }) => (
  <div className="flex items-center justify-between p-3 bg-portfolio-dark rounded-md">
    <div>
      <h4 className="font-medium text-portfolio-text">{title}</h4>
      <p className="text-sm text-portfolio-muted">{type}</p>
    </div>
    <div className="flex gap-2">
      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
        <FileEdit className="h-4 w-4 text-portfolio-primary" />
      </Button>
    </div>
  </div>
);

const ExperienceListItem = ({ position, company, duration }: { position: string, company: string, duration: string }) => (
  <div className="flex items-center justify-between p-3 bg-portfolio-dark rounded-md">
    <div>
      <h4 className="font-medium text-portfolio-text">{position}</h4>
      <p className="text-sm text-portfolio-muted">{company} • {duration}</p>
    </div>
    <div className="flex gap-2">
      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
        <FileEdit className="h-4 w-4 text-portfolio-primary" />
      </Button>
    </div>
  </div>
);

export default AdminDashboard;
