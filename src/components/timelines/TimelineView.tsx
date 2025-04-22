
import { Timeline as TimelineType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "./Timeline";

interface TimelineViewProps {
  timeline: TimelineType;
}

export function TimelineView({ timeline }: TimelineViewProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{timeline.title}</CardTitle>
            <Badge className="bg-gradient-to-r from-storytelling-purple to-storytelling-blue">
              {timeline.events.length} Events
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2">{timeline.description}</p>
        </CardHeader>
        <CardContent>
          <Timeline events={timeline.events} />
        </CardContent>
      </Card>
    </div>
  );
}
