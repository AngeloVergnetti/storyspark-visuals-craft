
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTimelines, mockJourneyMaps } from "@/data/mock-data";
import { TimelineCard } from "@/components/timelines/TimelineCard";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExamplesPage = () => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Example Visualizations</h1>
          <p className="text-muted-foreground mt-2">
            Get inspired by these example visual stories
          </p>
        </div>

        <Tabs defaultValue="timelines" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="timelines">Timelines</TabsTrigger>
            <TabsTrigger value="journeys">Journey Maps</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timelines">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTimelines.map((timeline) => (
                <TimelineCard key={timeline.id} timeline={timeline} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="journeys">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockJourneyMaps.map((journey) => (
                <JourneyCard key={journey.id} journey={journey} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ExamplesPage;
