
import { Button } from "@/components/ui/button";
import { AppLayout } from "@/components/layout/AppLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Route, Map } from "lucide-react";

const Index = () => {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-storytelling-light to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Tell your team's story with compelling visuals
              </h1>
              <p className="text-xl text-gray-600">
                Create narrative-driven graphics that highlight your team's contributions,
                milestones, achievements, and problem-solving processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-storytelling-purple to-storytelling-blue">
                  <Link to="/create">
                    Create Your Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/examples">
                    View Examples
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-white rounded-lg shadow-xl p-6 border animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Project Alpha Launch</h3>
                  <span className="text-sm text-gray-500">Jan - Aug 2023</span>
                </div>
                <div className="space-y-4">
                  {/* Simplified timeline graphic */}
                  <div className="relative pl-6 border-l-2 border-primary pb-8">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                    <h4 className="font-semibold">Initial Concept</h4>
                    <p className="text-sm text-gray-600">Team brainstorming session</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-primary pb-8">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                    <h4 className="font-semibold">Prototype Development</h4>
                    <p className="text-sm text-gray-600">Engineering team delivered ahead of schedule</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-storytelling-teal"></div>
                    <h4 className="font-semibold">Market Launch</h4>
                    <p className="text-sm text-gray-600">Exceeded adoption targets by 27%</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-storytelling-light rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-storytelling-purple/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Tell your story your way</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Timelines</h3>
              <p className="text-gray-600 mb-4">
                Show the progression of key milestones and achievements. Perfect for project
                retrospectives, team growth stories, and product evolution.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <Link to="/timelines">
                  View Timelines
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Route className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Journey Maps</h3>
              <p className="text-gray-600 mb-4">
                Illustrate how your team solves problems or creates solutions. Ideal for showcasing
                processes, methodologies, and the path from challenge to success.
              </p>
              <Button variant="outline" asChild className="mt-2">
                <Link to="/journeys">
                  View Journey Maps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-storytelling-light py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to showcase your team's achievements?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start creating compelling visual stories that highlight your team's contributions and successes.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-storytelling-purple to-storytelling-blue">
            <Link to="/create">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </AppLayout>
  );
};

export default Index;
