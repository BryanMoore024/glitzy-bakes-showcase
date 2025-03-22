
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-purple-50 p-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 animate-float">
          <img 
            src="/lovable-uploads/b35e4891-5947-4afb-8641-d8938058afcf.png" 
            alt="Glitzy Bakes Logo" 
            className="h-24 w-auto mx-auto" 
          />
        </div>
        <h1 className="text-5xl font-bold mb-2 text-glitzy-darkpurple">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-glitzy-pink">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Oops! It seems the page you're looking for has been gobbled up or doesn't exist. Let's get you back to our delicious creations!
        </p>
        <Button
          onClick={() => navigate('/')}
          className="btn-primary animate-pulse"
        >
          <Home className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
