import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-dark">
      <div className="text-center p-8 bg-portfolio-darker rounded-lg border border-portfolio-accent/20 max-w-md">
        <div className="text-8xl font-bold mb-4 text-portfolio-accent">404</div>
        <h1 className="text-2xl font-bold mb-4 text-portfolio-text">Page Not Found</h1>
        <p className="text-portfolio-muted mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accentDark">
          <Link to="/">
            <Home size={16} className="mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
