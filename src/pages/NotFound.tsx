
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="glass-card p-12 text-center max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-6 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page not found</p>
        <Link 
          to="/" 
          className="glass-button inline-flex justify-center"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
