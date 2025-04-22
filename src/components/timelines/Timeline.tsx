
import { TimelineEvent } from "@/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

      <div className="space-y-8">
        {sortedEvents.map((event, index) => (
          <div key={event.id} className="relative ml-16 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            {/* Timeline dot */}
            <div className={cn(
              "absolute -left-20 top-2 w-4 h-4 rounded-full border-4 border-white shadow-sm",
              event.category === "milestone" ? "bg-storytelling-teal" : 
              event.category === "development" ? "bg-storytelling-blue" : 
              "bg-primary"
            )}></div>
            
            {/* Date on left side */}
            <div className="absolute -left-16 top-1 transform -translate-x-full text-sm text-gray-500">
              {new Date(event.date).toLocaleDateString(undefined, { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}
            </div>

            <div className="bg-card p-4 rounded-lg border shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-lg">{event.title}</h3>
                {event.category && (
                  <Badge variant={event.category === "milestone" ? "default" : "outline"}>
                    {event.category}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
