
import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4 border-t bg-background sticky bottom-0">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={isLoading}
        className="flex-1"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={isLoading || message.trim() === ""}
        className="rounded-full h-10 w-10"
      >
        <Send size={18} />
      </Button>
    </form>
  );
};

export default ChatInput;
