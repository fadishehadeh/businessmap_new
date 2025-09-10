
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import International from "./pages/International";
import About from "./pages/About/About";
import Minister from "./pages/About/Minister";
import Strategy from "./pages/About/Strategy";
import VisionMissionValues from "./pages/About/VisionMissionValues";
import NationalCommittees from "./pages/About/NationalCommittees";
import Services from "./pages/Services/Services";
import Business from "./pages/Services/Business";
import Consumer from "./pages/Services/Consumer";
import EServices from "./pages/EServices/EServices";
import MediaCenter from "./pages/MediaCenter/MediaCenter";
import News from "./pages/MediaCenter/News";
import NewsArticle from "./pages/MediaCenter/NewsArticle";
import Reports from "./pages/MediaCenter/Reports";
import Gallery from "./pages/MediaCenter/Gallery";
import Resources from "./pages/Resources/Resources";
import ContactUs from "./pages/ContactUs";
import ContactPageForFigma from "./components/ContactPageForFigma";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/international" element={<International />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/minister" element={<Minister />} />
          <Route path="/about/strategy" element={<Strategy />} />
          <Route path="/about/vision" element={<VisionMissionValues />} />
          <Route path="/about/committees" element={<NationalCommittees />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/business" element={<Business />} />
          <Route path="/services/consumer" element={<Consumer />} />
          <Route path="/e-services" element={<EServices />} />
          <Route path="/media-centre" element={<MediaCenter />} />
          <Route path="/media-centre/news" element={<News />} />
          <Route path="/media-centre/news/:id" element={<NewsArticle />} />
          <Route path="/media-centre/reports" element={<Reports />} />
          <Route path="/media-centre/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-figma" element={<ContactPageForFigma />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
