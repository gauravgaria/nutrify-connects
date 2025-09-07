
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import Index from "./pages/Index";
import DietPlans from "./pages/DietPlans";
import Coaching from "./pages/Coaching";
import Freebies from "./pages/Freebies";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

// Handle back button in mobile apps
const BackButtonHandler = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleBackButton = () => {
      // Handle back button press
      navigate(-1);
      return false; // Prevent default behavior
    };
    
    // Only add listener on native platforms
    if (Capacitor.isNativePlatform()) {
      CapacitorApp.addListener('backButton', handleBackButton);
    }
    
    return () => {
      if (Capacitor.isNativePlatform()) {
        CapacitorApp.removeAllListeners();
      }
    };
  }, [navigate]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BackButtonHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/freebies" element={<Freebies />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
