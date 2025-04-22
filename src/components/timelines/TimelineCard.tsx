
import { Timeline } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface TimelineCardProps {
  timeline: Timeline;
}

export function TimelineCard({ timeline }: TimelineCardProps) {
  const eventCount = timeline.events.length;
  const startDate = new Date(timeline.events[0]?.date || timeline.createdAt).toLocaleDateString();
  const endDate = new Date(
    timeline.events[eventCount - 1]?.date || timeline.updatedAt
  ).toLocaleDateString();

  return (
    <Link to={`/timelines/${timeline.id}`}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{timeline.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {timeline.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {startDate} - {endDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">{eventCount} Events</Badge>
            {timeline.events.some(e => e.category === "milestone") && (
              <Badge className="bg-storytelling-teal">Milestones</Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
