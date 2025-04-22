
import { AppLayout } from "@/components/layout/AppLayout";
import { mockJourneyMaps } from "@/data/mock-data";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const JourneysPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Journey Maps</h1>
            <p className="text-muted-foreground mt-2">
              Visual representations of how your team solves problems and creates solutions
            </p>
          </div>
          <Button asChild>
            <Link to="/create?type=journey">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Journey Map
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJourneyMaps.map((journey) => (
            <JourneyCard key={journey.id} journey={journey} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default JourneysPage;
