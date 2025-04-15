
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Phone
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const SocialMediaBar = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-2">
      <Button
        variant="ghost"
        size="icon"
        className="bg-qatari hover:bg-qatari-light text-white"
        onClick={() => window.open('https://facebook.com/MOCIQATAR', '_blank')}
      >
        <Facebook className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="bg-qatari hover:bg-qatari-light text-white"
        onClick={() => window.open('https://twitter.com/MOCIQATAR', '_blank')}
      >
        <Twitter className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="bg-qatari hover:bg-qatari-light text-white"
        onClick={() => window.open('https://instagram.com/MOCIQATAR', '_blank')}
      >
        <Instagram className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="bg-qatari hover:bg-qatari-light text-white"
        onClick={() => window.open('https://linkedin.com/company/MOCIQATAR', '_blank')}
      >
        <Linkedin className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="bg-qatari hover:bg-qatari-light text-white"
        onClick={() => window.open('https://youtube.com/@MOCIQATAR', '_blank')}
      >
        <Youtube className="h-5 w-5" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="bg-qatari hover:bg-qatari-light text-white mt-4"
        onClick={() => window.location.href = 'tel:+97444945555'}
      >
        <Phone className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SocialMediaBar;
