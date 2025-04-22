
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PlusCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm py-2 px-4 md:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-br from-storytelling-purple to-storytelling-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SV</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">StoryVisuals</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/timelines" className="text-gray-700 hover:text-primary transition-colors">
            Timelines
          </Link>
          <Link to="/journeys" className="text-gray-700 hover:text-primary transition-colors">
            Journey Maps
          </Link>
          <Button asChild>
            <Link to="/create">
              <PlusCircle className="h-4 w-4 mr-2" />
              New Story
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white pt-16 px-4 transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/timelines" 
            className="text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Timelines
          </Link>
          <Link 
            to="/journeys" 
            className="text-lg py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Journey Maps
          </Link>
          <Button asChild className="mt-4">
            <Link to="/create" onClick={() => setIsMenuOpen(false)}>
              <PlusCircle className="h-4 w-4 mr-2" />
              New Story
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
