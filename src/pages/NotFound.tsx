
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
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
    <div className="min-h-[85vh] flex items-center justify-center bg-secondary/20">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
