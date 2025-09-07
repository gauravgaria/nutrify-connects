
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatInterface from '@/components/chat/ChatInterface';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

const Chat = () => {
  const [activeTab, setActiveTab] = useState<"diet" | "coaching">("diet");
  const { isAuthenticated } = useAuth();
  
  // Redirect unauthenticated users
  if (!isAuthenticated) {
    toast.error("Please log in to access chat support");
    return <Navigate to="/" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-4 md:px-8">
        <div className="container-custom py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Chat Support
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Get real-time support from our expert coaches for your nutrition and fitness needs.
            </p>
            
            <Tabs defaultValue="diet" onValueChange={(v) => setActiveTab(v as "diet" | "coaching")}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="diet">Nutrition Support</TabsTrigger>
                <TabsTrigger value="coaching">Fitness Coaching</TabsTrigger>
              </TabsList>
              
              <TabsContent value="diet" className="mt-0">
                <ChatInterface serviceType="diet" />
              </TabsContent>
              
              <TabsContent value="coaching" className="mt-0">
                <ChatInterface serviceType="coaching" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
