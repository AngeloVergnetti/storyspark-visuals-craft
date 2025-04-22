
import { JourneyMap } from "@/types";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JourneyMapVisualProps {
  journey: JourneyMap;
}

export function JourneyMapVisual({ journey }: JourneyMapVisualProps) {
  // Get unique phases and sort them
  const phases = [...new Set(journey.steps.map(step => step.phase))];
  const phaseOrder = ["discover", "define", "develop", "deliver", "results"];
  
  // Sort phases according to the predefined order
  phases.sort((a, b) => {
    const aIndex = phaseOrder.indexOf(a);
    const bIndex = phaseOrder.indexOf(b);
    
    // If either phase is not in the predefined order, place it at the end
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    
    return aIndex - bIndex;
  });

  // Group steps by phase
  const stepsByPhase = phases.reduce((acc, phase) => {
    acc[phase] = journey.steps.filter(step => step.phase === phase);
    return acc;
  }, {} as Record<string, typeof journey.steps>);

  // Get the phase color
  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "discover":
        return "from-blue-300 to-blue-500";
      case "define":
        return "from-purple-300 to-purple-500";
      case "develop":
        return "from-teal-300 to-teal-500";
      case "deliver":
        return "from-green-300 to-green-500";
      case "results":
        return "from-amber-300 to-amber-500";
      default:
        return "from-gray-300 to-gray-500";
    }
  };

  return (
    <div className="space-y-8 overflow-x-auto pb-4">
      {phases.map((phase, phaseIndex) => (
        <div key={phase} className="space-y-4">
          <div className="flex items-center">
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold bg-gradient-to-br",
              getPhaseColor(phase)
            )}>
              {phaseIndex + 1}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold capitalize">{phase}</h3>
              <p className="text-muted-foreground">
                {stepsByPhase[phase].length} steps
              </p>
            </div>
          </div>

          <div className="relative pl-8">
            {/* Vertical line connecting steps */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {stepsByPhase[phase].map((step, index) => (
              <div 
                key={step.id} 
                className="relative mb-6 ml-8 animate-fade-in"
                style={{ animationDelay: `${(phaseIndex * 300) + (index * 150)}ms` }}
              >
                {/* Horizontal line to step */}
                <div className="absolute -left-8 top-6 w-8 h-0.5 bg-gray-200"></div>
                
                {/* Step connector dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 rounded-full bg-white border-2 border-gray-200"></div>
                
                <Card className="p-4">
                  <h4 className="font-semibold text-lg">{step.title}</h4>
                  <p className="text-muted-foreground mt-1">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
