
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTimelines } from "@/data/mock-data";
import { TimelineCard } from "@/components/timelines/TimelineCard";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TimelinesPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Timelines</h1>
            <p className="text-muted-foreground mt-2">
              Visual chronologies of your team's key milestones and achievements
            </p>
          </div>
          <Button asChild>
            <Link to="/create?type=timeline">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Timeline
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTimelines.map((timeline) => (
            <TimelineCard key={timeline.id} timeline={timeline} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default TimelinesPage;
