import React from 'react';
import { QuoteData, TextAlignment } from '../types';
import { RefreshCw, PenTool, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

interface EditorProps {
  data: QuoteData;
  onChange: (key: keyof QuoteData, value: any) => void;
  onRandom: () => void;
}

const Editor: React.FC<EditorProps> = ({ data, onChange, onRandom }) => {
  
  const handleRandom = (e: React.MouseEvent) => {
    e.preventDefault();
    onRandom();
  };

  const AlignmentButton = ({ align, icon: Icon }: { align: TextAlignment; icon: React.ElementType }) => (
    <button
      onClick={() => onChange('alignment', align)}
      className={`p-2 rounded-lg transition-all ${
        data.alignment === align
          ? 'bg-zen-800 text-white shadow-md'
          : 'bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-600'
      }`}
      title={`Align ${align}`}
    >
      <Icon size={18} />
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Header for Input Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif font-bold text-zen-800 flex items-center gap-2">
          <PenTool size={20} />
          <span>内容录入</span>
        </h2>
        <button 
          onClick={handleRandom}
          className="text-xs flex items-center gap-1 text-zen-600 hover:text-zen-800 transition-colors bg-zen-100 px-3 py-1.5 rounded-full"
        >
          <RefreshCw size={12} />
          <span>随机一言</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="group relative">
           <div className="flex items-center justify-between mb-2 ml-1">
            <label className="block text-xs font-semibold text-zen-500 uppercase tracking-wider">
              正文 (Text)
            </label>
            {/* Alignment Controls */}
            <div className="flex gap-1 bg-gray-50 p-1 rounded-lg border border-gray-100">
              <AlignmentButton align="left" icon={AlignLeft} />
              <AlignmentButton align="center" icon={AlignCenter} />
              <AlignmentButton align="right" icon={AlignRight} />
            </div>
          </div>
          
          <textarea
            value={data.text}
            onChange={(e) => onChange('text', e.target.value)}
            placeholder="在此输入短句..."
            rows={3}
            className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zen-400 focus:border-transparent transition-all shadow-sm resize-none font-serif text-lg leading-relaxed"
            maxLength={100}
          />
          <div className="text-right text-[10px] text-gray-400 mt-1">
            {data.text.length} / 100
          </div>
        </div>

        <div className="group relative">
          <label className="block text-xs font-semibold text-zen-500 uppercase tracking-wider mb-2 ml-1">
            作者 / 出处 (Author)
          </label>
          <input
            type="text"
            value={data.author}
            onChange={(e) => onChange('author', e.target.value)}
            placeholder="例如：庄子"
            className="w-full p-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zen-400 focus:border-transparent transition-all shadow-sm font-serif"
            maxLength={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;