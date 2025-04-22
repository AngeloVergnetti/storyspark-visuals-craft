
import { JourneyMap } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Route } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface JourneyCardProps {
  journey: JourneyMap;
}

export function JourneyCard({ journey }: JourneyCardProps) {
  const stepCount = journey.steps.length;
  const phases = [...new Set(journey.steps.map(step => step.phase))];

  return (
    <Link to={`/journeys/${journey.id}`}>
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{journey.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {journey.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Route className="h-4 w-4 mr-1" />
            <span>{stepCount} steps across {phases.length} phases</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {phases.slice(0, 3).map(phase => (
              <Badge key={phase} variant="outline" className="capitalize">
                {phase}
              </Badge>
            ))}
            {phases.length > 3 && (
              <Badge variant="outline">+{phases.length - 3} more</Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
