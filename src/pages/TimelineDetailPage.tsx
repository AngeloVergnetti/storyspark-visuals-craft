
import { useParams } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTimelines } from "@/data/mock-data";
import { TimelineView } from "@/components/timelines/TimelineView";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const TimelineDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const timeline = mockTimelines.find((t) => t.id === id);

  if (!timeline) {
    return (
      <AppLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Timeline Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The timeline you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/timelines">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Timelines
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
            <Link to="/timelines">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <Button variant="outline" asChild className="ml-auto">
            <Link to={`/edit/timeline/${timeline.id}`}>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Link>
          </Button>
        </div>

        <TimelineView timeline={timeline} />
      </div>
    </AppLayout>
  );
};

export default TimelineDetailPage;
