
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-storytelling-light mt-auto py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} StoryVisuals. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/timelines" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Timelines
          </Link>
          <Link to="/journeys" className="text-sm text-gray-600 hover:text-primary transition-colors">
            Journey Maps
          </Link>
        </div>
      </div>
    </footer>
  );
}
