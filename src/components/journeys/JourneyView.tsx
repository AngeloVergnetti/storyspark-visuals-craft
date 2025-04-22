
import { JourneyMap } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JourneyMapVisual } from "./JourneyMapVisual";

interface JourneyViewProps {
  journey: JourneyMap;
}

export function JourneyView({ journey }: JourneyViewProps) {
  const phases = [...new Set(journey.steps.map(step => step.phase))];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{journey.title}</CardTitle>
            <Badge className="bg-gradient-to-r from-storytelling-purple to-storytelling-blue">
              {journey.steps.length} Steps
            </Badge>
          </div>
          <p className="text-muted-foreground mt-2">{journey.description}</p>
        </CardHeader>
        <CardContent>
          <JourneyMapVisual journey={journey} />
        </CardContent>
      </Card>
    </div>
  );
}
