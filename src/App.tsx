
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import International from "./pages/International";
import About from "./pages/About/About";
import Minister from "./pages/About/Minister";
import Strategy from "./pages/About/Strategy";
import VisionMissionValues from "./pages/About/VisionMissionValues";
import NationalCommittees from "./pages/About/NationalCommittees";
import Branches from "./pages/About/Branches";
import Services from "./pages/Services/Services";
import Business from "./pages/Services/Business";
import Consumer from "./pages/Services/Consumer";
import TradeNamesSearch from "./pages/Services/TradeNamesSearch";
import EServices from "./pages/EServices/EServices";
import MediaCenter from "./pages/MediaCenter/MediaCenter";
import News from "./pages/MediaCenter/News";
import NewsArticle from "./pages/MediaCenter/NewsArticle";
import Reports from "./pages/MediaCenter/Reports";
import Gallery from "./pages/MediaCenter/Gallery";
import Resources from "./pages/Resources/Resources";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";
import OfficeLocator from "./pages/OfficeLocator/OfficeLocator";
import UnifiedSystem from "./pages/UnifiedSystem/UnifiedSystem";
import BusinessMap from "./pages/BusinessMap/BusinessMap";
import { ThemeProvider } from "./context/ThemeContext";
import { AccessibilityProvider } from "./context/AccessibilityContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AccessibilityProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Original MOCI Website (Maroon) - Default */}
              <Route path="/" element={<Index />} />
              <Route path="/international" element={<International />} />

              {/* About Section */}
              <Route path="/about" element={<About />} />
              <Route path="/about/minister" element={<Minister />} />
              <Route path="/about/strategy" element={<Strategy />} />
              <Route path="/about/vision" element={<VisionMissionValues />} />
              <Route path="/about/committees" element={<NationalCommittees />} />
              <Route path="/about/branches" element={<Branches />} />

              {/* Services Section */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/business" element={<Business />} />
              <Route path="/services/consumer" element={<Consumer />} />
              <Route path="/services/trade-names" element={<TradeNamesSearch />} />

              {/* E-Services */}
              <Route path="/e-services" element={<EServices />} />

              {/* Media Center */}
              <Route path="/media-centre" element={<MediaCenter />} />
              <Route path="/media-centre/news" element={<News />} />
              <Route path="/media-centre/news/:id" element={<NewsArticle />} />
              <Route path="/media-centre/reports" element={<Reports />} />
              <Route path="/media-centre/gallery" element={<Gallery />} />

              {/* Resources & Contact */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact-us" element={<ContactUs />} />

              {/* Legal & Sitemap */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Unified System (Blue) - Employee Portal */}
              <Route path="/unified" element={<UnifiedSystem />} />

              {/* Office Locator */}
              <Route path="/locator" element={<OfficeLocator />} />

              {/* Business Map - Qatar Business Map Portal */}
              <Route path="/business-map" element={<BusinessMap />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AccessibilityProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
