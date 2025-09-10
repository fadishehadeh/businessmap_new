import React, { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'document';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock search results - in a real application, this would come from an API
const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Business Services',
    description: 'Comprehensive business services including licensing, permits, and registrations',
    url: '/services/business',
    type: 'page'
  },
  {
    id: '2',
    title: 'Consumer Services',
    description: 'Consumer protection services, daily prices, and important addresses',
    url: '/services/consumer',
    type: 'page'
  },
  {
    id: '3',
    title: 'E-Services Portal',
    description: 'Access digital government services online',
    url: '/e-services',
    type: 'service'
  },
  {
    id: '4',
    title: 'Ministry Strategy',
    description: 'Learn about the strategic vision and mission of the Ministry',
    url: '/about/strategy',
    type: 'page'
  },
  {
    id: '5',
    title: 'Contact Information',
    description: 'Find contact details for all ministry branches and departments',
    url: '/contact-us',
    type: 'page'
  },
  {
    id: '6',
    title: 'Latest News',
    description: 'Stay updated with the latest news and announcements',
    url: '/media-centre/news',
    type: 'page'
  }
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Simulate search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const filtered = mockSearchResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleResultClick = () => {
    onClose();
    setSearchQuery('');
    setSearchResults([]);
  };

  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'service':
        return <ExternalLink className="h-4 w-4 text-qatari" />;
      case 'document':
        return <FileText className="h-4 w-4 text-qatari" />;
      default:
        return <FileText className="h-4 w-4 text-qatari" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed top-0 left-0 right-0 bg-white shadow-xl border-b border-gray-200">
        <div className="container-wide py-6">
          <div className="flex items-center gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search for services, information, or documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-qatari/20 focus:border-qatari rounded-xl"
              />
            </div>
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-600 hover:text-qatari"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="mt-6">
            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-qatari"></div>
                <p className="mt-2 text-gray-600">Searching...</p>
              </div>
            )}

            {!isLoading && searchQuery && searchResults.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-500 mt-1">Try different keywords or browse our main sections</p>
              </div>
            )}

            {!isLoading && searchResults.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={result.url}
                    onClick={handleResultClick}
                    className="block p-4 rounded-lg border border-gray-200 hover:border-qatari hover:bg-qatari/5 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      {getResultIcon(result.type)}
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 group-hover:text-qatari transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {result.description}
                        </p>
                        <p className="text-xs text-qatari mt-2 capitalize">
                          {result.type}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!searchQuery && (
              <div className="text-center py-8">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Start typing to search for services, information, or documents</p>
                <p className="text-sm text-gray-500 mt-1">Use keywords like "business", "consumer", "license", or "contact"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
