
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // In a real app, this would be a secure authentication flow
  // For demo purposes, we're using a simple password check
  const adminPassword = "portfolio123";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      if (password === adminPassword) {
        toast({
          title: "Access Granted",
          description: "Welcome to the admin dashboard.",
          variant: "default"
        });
        navigate("/admin/dashboard");
      } else {
        toast({
          title: "Access Denied",
          description: "The password you entered is incorrect.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-portfolio-primary/20 bg-portfolio-darker">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-portfolio-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-portfolio-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-portfolio-primary">Admin Access</CardTitle>
          <CardDescription className="text-center text-portfolio-muted">
            This area is restricted to the portfolio owner
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-portfolio-text">Admin Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-portfolio-dark border-portfolio-primary/30 text-portfolio-text"
                  required
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-portfolio-muted" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              className="w-full bg-portfolio-primary hover:bg-portfolio-primaryDark"
              disabled={isLoading}
            >
              {isLoading ? "Verifying..." : "Access Dashboard"}
            </Button>
          </CardFooter>
        </form>
        <div className="p-4">
          <p className="text-xs text-portfolio-muted text-center">
            For demo purposes, the password is: "portfolio123"
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;
