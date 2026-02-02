
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
              {/* Redirect root to Business Map */}
              <Route path="/" element={<Navigate to="/business-map" replace />} />

              {/* Business Map - Qatar Business Map Portal - ONLY ACTIVE ROUTE */}
              <Route path="/business-map" element={<BusinessMap />} />

              {/* All other routes redirect to Business Map */}
              <Route path="*" element={<Navigate to="/business-map" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AccessibilityProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
