
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
