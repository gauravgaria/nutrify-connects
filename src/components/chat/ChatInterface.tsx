
import { useState, useEffect, useRef } from "react";
import ChatMessage, { ChatMessageProps } from "./ChatMessage";
import ChatInput from "./ChatInput";
import { useAuth } from "@/lib/auth";
import { toast } from "sonner";

// Mock conversation history based on service type
const getInitialMessages = (serviceType: "diet" | "coaching"): Omit<ChatMessageProps, "isUser">[] => {
  if (serviceType === "diet") {
    return [
      {
        message: "Welcome to your personalized diet plan chat! I'm Sarah, your nutrition coach. How can I help you today?",
        timestamp: new Date(Date.now() - 60000 * 15),
        sender: {
          name: "Sarah (Nutrition Coach)",
          avatar: "https://i.pravatar.cc/150?img=25"
        }
      }
    ];
  } else {
    return [
      {
        message: "Hi there! I'm Michael, your personal fitness coach. I'll be here to answer any questions about your training program. How's everything going so far?",
        timestamp: new Date(Date.now() - 60000 * 30),
        sender: {
          name: "Michael (Fitness Coach)",
          avatar: "https://i.pravatar.cc/150?img=68"
        }
      }
    ];
  }
};

interface ChatInterfaceProps {
  serviceType: "diet" | "coaching";
}

const ChatInterface = ({ serviceType }: ChatInterfaceProps) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Initialize with service-specific messages
  useEffect(() => {
    const initialCoachMessages = getInitialMessages(serviceType);
    setMessages(
      initialCoachMessages.map(msg => ({
        ...msg,
        isUser: false
      }))
    );
  }, [serviceType]);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  const handleSendMessage = async (text: string) => {
    // Add user message to chat
    const userMessage: ChatMessageProps = {
      message: text,
      timestamp: new Date(),
      isUser: true,
      sender: {
        name: user?.name || "You",
        avatar: user?.avatar
      }
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Generate coach response based on service type
      const coachResponse: ChatMessageProps = {
        message: generateCoachResponse(text, serviceType),
        timestamp: new Date(),
        isUser: false,
        sender: serviceType === "diet" 
          ? { name: "Sarah (Nutrition Coach)", avatar: "https://i.pravatar.cc/150?img=25" }
          : { name: "Michael (Fitness Coach)", avatar: "https://i.pravatar.cc/150?img=68" }
      };
      
      setMessages(prev => [...prev, coachResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  // Simple response generator (would be replaced by actual backend API)
  const generateCoachResponse = (userMessage: string, type: "diet" | "coaching"): string => {
    const lowercaseMsg = userMessage.toLowerCase();
    
    if (type === "diet") {
      if (lowercaseMsg.includes("meal") || lowercaseMsg.includes("eat") || lowercaseMsg.includes("food")) {
        return "Your meal plan is designed to provide balanced nutrition while supporting your goals. Remember to stay hydrated and try to eat at regular intervals. Would you like me to explain any specific meal in more detail?";
      } else if (lowercaseMsg.includes("calories") || lowercaseMsg.includes("macros")) {
        return "Your personalized plan includes a calorie target of 1800-2000 calories with a macro split of 40% carbs, 30% protein, and 30% fat. This is optimized for your specific goals and activity level.";
      } else if (lowercaseMsg.includes("substitute") || lowercaseMsg.includes("alternative")) {
        return "Great question about substitutions! You can swap chicken for tofu, rice for quinoa, or dairy milk for almond milk. Just make sure to adjust portions to maintain similar macronutrient profiles.";
      } else {
        return "Thanks for your message! I'll review your diet plan and get back to you with personalized recommendations. Is there anything specific you'd like me to focus on?";
      }
    } else {
      if (lowercaseMsg.includes("workout") || lowercaseMsg.includes("exercise") || lowercaseMsg.includes("training")) {
        return "Your workout program is designed to progress gradually. Make sure you're focusing on proper form before increasing weights. How are you feeling after your recent sessions?";
      } else if (lowercaseMsg.includes("sore") || lowercaseMsg.includes("pain") || lowercaseMsg.includes("injury")) {
        return "Some muscle soreness is normal, but pain isn't. Make sure to warm up properly, stay hydrated, and get adequate rest. If pain persists, consider consulting a healthcare professional.";
      } else if (lowercaseMsg.includes("schedule") || lowercaseMsg.includes("routine")) {
        return "Consistency is key! Try to stick to your scheduled workout times, but also listen to your body. 3-4 quality sessions per week is better than 6 mediocre ones.";
      } else {
        return "Thanks for reaching out! I'm here to support your fitness journey. Let me know if you have any specific questions about your training program.";
      }
    }
  };
  
  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-background border rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">
          {serviceType === "diet" ? "Nutrition Support" : "Fitness Coaching"} Chat
        </h2>
        <p className="text-sm text-muted-foreground">
          Chat with your {serviceType === "diet" ? "nutrition coach" : "fitness coach"}
        </p>
      </div>
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-2"
      >
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index}
            message={msg.message}
            timestamp={msg.timestamp}
            isUser={msg.isUser}
            sender={msg.sender}
          />
        ))}
        
        {isLoading && (
          <div className="flex space-x-2 p-3 items-center justify-center">
            <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        )}
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatInterface;
