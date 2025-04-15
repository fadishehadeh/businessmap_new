
import React, { useState } from 'react';
import { 
  MessageSquare, 
  ChevronUp, 
  Send,
  X 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [userType, setUserType] = useState<string | null>(null);
  const { toast } = useToast();
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUserType(null); // Reset user type when opening chat
    }
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      toast({
        title: "Message sent",
        description: "Our support team will respond shortly.",
      });
      setMessage('');
    }
  };
  
  const handleUserTypeSelection = (type: string) => {
    setUserType(type);
  };
  
  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={toggleChat}
          size="lg"
          className={`rounded-full w-14 h-14 p-0 shadow-lg ${isOpen ? 'bg-gray-700' : 'bg-qatari hover:bg-qatari-light'}`}
          aria-label="Chat Support"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-40 animate-fade-in">
          <div className="bg-qatari text-white p-4">
            <h3 className="font-semibold">MOCI Support</h3>
            <p className="text-sm text-white/90">We're here to help you</p>
          </div>
          
          <div className="p-4 h-[350px] overflow-y-auto bg-gray-50">
            {userType === null ? (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-3">Hello! I'm your MOCI assistant. How can I help you today?</p>
                  <p className="text-gray-600 text-sm mb-3">Please select your category:</p>
                  
                  <div className="space-y-2">
                    <Button 
                      onClick={() => handleUserTypeSelection('investor')} 
                      variant="outline" 
                      className="w-full justify-start text-left"
                    >
                      International Investor
                    </Button>
                    <Button 
                      onClick={() => handleUserTypeSelection('local')} 
                      variant="outline" 
                      className="w-full justify-start text-left"
                    >
                      Local Business
                    </Button>
                    <Button 
                      onClick={() => handleUserTypeSelection('consumer')} 
                      variant="outline" 
                      className="w-full justify-start text-left"
                    >
                      Consumer
                    </Button>
                    <Button 
                      onClick={() => handleUserTypeSelection('other')} 
                      variant="outline" 
                      className="w-full justify-start text-left"
                    >
                      Other Inquiry
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">
                    {userType === 'investor' && "Welcome, investor! How can I assist with your investment journey in Qatar?"}
                    {userType === 'local' && "Hello! What can I help you with regarding your local business operations?"}
                    {userType === 'consumer' && "Hi there! How can I assist you with consumer-related inquiries?"}
                    {userType === 'other' && "Hello! What information are you looking for today?"}
                  </p>
                </div>
                
                <div className="bg-qatari/10 p-4 rounded-lg text-right">
                  <p className="text-gray-700">I'd like to learn more about business opportunities in Qatar.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700">I'd be happy to help! Qatar offers numerous investment opportunities across sectors like technology, finance, logistics, tourism, and healthcare. Would you like me to guide you through the investment process or provide specific sector information?</p>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit" size="icon" className="bg-qatari hover:bg-qatari-light">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatSupport;
