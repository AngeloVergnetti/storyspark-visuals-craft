import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TimelinesPage from "./pages/TimelinesPage";
import TimelineDetailPage from "./pages/TimelineDetailPage";
import JourneysPage from "./pages/JourneysPage";
import JourneyDetailPage from "./pages/JourneyDetailPage";
import CreatePage from "./pages/CreatePage";
import ExamplesPage from "./pages/ExamplesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/timelines" element={<TimelinesPage />} />
          <Route path="/timelines/:id" element={<TimelineDetailPage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/journeys/:id" element={<JourneyDetailPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
