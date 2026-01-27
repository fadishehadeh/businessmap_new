import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selected,
  onChange,
  placeholder = 'Select options',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const toggleAll = () => {
    if (selected.length === options.length) {
      onChange([]);
    } else {
      onChange([...options]);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        type="button"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between text-right"
      >
        <span className="truncate">
          {selected.length === 0
            ? placeholder
            : selected.length === 1
            ? selected[0]
            : `${selected.length} محدد`}
        </span>
        <ChevronDown className="h-4 w-4 opacity-50 mr-2" />
      </Button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-80 overflow-hidden">
          {/* Search Input */}
          <div className="p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="بحث..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 text-right"
              />
            </div>
          </div>

          {/* Select All Option */}
          <div className="p-2 border-b border-gray-200 dark:border-gray-700">
            <label className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer">
              <input
                type="checkbox"
                checked={selected.length === options.length}
                onChange={toggleAll}
                className="w-4 h-4 text-qatari border-gray-300 rounded focus:ring-qatari"
              />
              <span className="flex-1 text-right font-medium">تحديد الكل</span>
            </label>
          </div>

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto p-2">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                لا توجد نتائج
              </div>
            ) : (
              filteredOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="w-4 h-4 text-qatari border-gray-300 rounded focus:ring-qatari"
                  />
                  <span className="flex-1 text-right">{option}</span>
                  {selected.includes(option) && (
                    <Check className="h-4 w-4 text-qatari" />
                  )}
                </label>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;

