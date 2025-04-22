
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockJourneyMaps } from "@/data/mock-data";
import { JourneyView } from "@/components/journeys/JourneyView";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const JourneyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const journey = mockJourneyMaps.find((j) => j.id === id);

  if (!journey) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Journey Map Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The journey map you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/journeys">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journey Maps
            </Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" asChild className="mr-2">
            <Link to="/journeys">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <Button variant="outline" asChild className="ml-auto">
            <Link to={`/edit/journey/${journey.id}`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Link>
          </Button>
        </div>

        <JourneyView journey={journey} />
      </div>
    </AppLayout>
  );
};

export default JourneyDetailPage;
