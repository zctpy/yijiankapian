import React from 'react';
import { STYLES } from '../constants';
import { StyleId } from '../types';
import { ChevronDown, Palette } from 'lucide-react';

interface StyleSelectorProps {
  selectedId: StyleId;
  onSelect: (id: StyleId) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="relative group">
       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zen-400 group-focus-within:text-zen-600 transition-colors">
        <Palette size={18} />
      </div>
      <select
        value={selectedId}
        onChange={(e) => onSelect(e.target.value as StyleId)}
        className="appearance-none w-full bg-white border border-gray-200 text-zen-900 py-4 pl-10 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-400 focus:border-transparent shadow-sm transition-all cursor-pointer hover:border-zen-300 font-serif text-base"
      >
        {(Object.keys(STYLES) as StyleId[]).map((id) => (
          <option key={id} value={id}>
            {STYLES[id].name} — {STYLES[id].description}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-zen-400">
        <ChevronDown size={18} />
      </div>
    </div>
  );
};

export default StyleSelector;