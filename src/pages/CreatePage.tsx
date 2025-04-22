
import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Route } from "lucide-react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

type StoryType = "timeline" | "journey" | null;

const CreatePage = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") as StoryType;
  const [selectedType, setSelectedType] = useState<StoryType>(initialType);
  const navigate = useNavigate();

  const handleTypeSelect = (type: StoryType) => {
    setSelectedType(type);
  };

  const handleContinue = () => {
    if (selectedType === "timeline") {
      navigate("/timelines");
    } else if (selectedType === "journey") {
      navigate("/journeys");
    }
  };

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

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create Your Visual Story</h1>
            <p className="text-muted-foreground mt-2">
              Choose a story type to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedType === "timeline" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleTypeSelect("timeline")}
            >
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Timeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Show the progression of key milestones and achievements over time. Perfect for project
                  retrospectives and tracking team growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedType === "journey" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleTypeSelect("journey")}
            >
              <CardHeader>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Route className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Journey Map</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Illustrate how your team solves problems or creates solutions. Great for showcasing
                  your team's process and approach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={handleContinue}
              disabled={!selectedType}
              className="bg-gradient-to-r from-storytelling-purple to-storytelling-blue"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CreatePage;
