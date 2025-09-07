
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

export interface ChatMessageProps {
  message: string;
  timestamp: Date;
  isUser: boolean;
  sender?: {
    name: string;
    avatar?: string;
  };
}

const ChatMessage = ({ message, timestamp, isUser, sender }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex w-full gap-3 mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <Avatar className="h-8 w-8">
          <img src={sender?.avatar || "https://i.pravatar.cc/150?img=8"} alt={sender?.name || "Coach"} />
        </Avatar>
      )}
      
      <div className={cn(
        "px-4 py-3 rounded-lg max-w-[80%]",
        isUser 
          ? "bg-primary text-primary-foreground rounded-tr-none" 
          : "bg-secondary text-secondary-foreground rounded-tl-none"
      )}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium">{isUser ? "You" : sender?.name || "Coach"}</span>
          <span className="text-xs opacity-70">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <p className="text-sm whitespace-pre-wrap">{message}</p>
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8">
          <img src={sender?.avatar || "https://i.pravatar.cc/150?img=5"} alt="You" />
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
