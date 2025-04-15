
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types";
import { downloadResume } from "@/lib/resumeUtils";

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-portfolio-darker/80 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-xl text-portfolio-primary">
            <span className="font-mono">&lt;</span>PB<span className="font-mono">/&gt;</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-portfolio-primary relative",
                location.pathname === item.href
                  ? "text-portfolio-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-portfolio-primary"
                  : "text-portfolio-text/80"
              )}
            >
              {item.title}
            </Link>
          ))}
          <Button 
            onClick={() => window.location.href = "/admin"}
            variant="default" 
            className="bg-portfolio-primary hover:bg-portfolio-primaryDark text-white ml-2"
          >
            <Shield size={16} className="mr-2" />
            Admin
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-portfolio-text hover:text-portfolio-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-portfolio-darker/95 backdrop-blur-lg shadow-lg py-4 z-50 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "py-2 px-4 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "bg-portfolio-primary/10 text-portfolio-primary"
                    : "text-portfolio-text hover:bg-portfolio-primary/5"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button 
              onClick={() => window.location.href = "/admin"}
              variant="default" 
              className="bg-portfolio-primary hover:bg-portfolio-primaryDark text-white my-2 w-full"
            >
              <Shield size={16} className="mr-2" />
              Admin Access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
