import React, { useState, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { Download, Sparkles, AlertCircle } from 'lucide-react';
import { STYLES, INITIAL_QUOTE } from './constants';
import { QuoteData, StyleId } from './types';
import Editor from './components/Editor';
import StyleSelector from './components/StyleSelector';
import Preview from './components/Preview';

const RANDOM_QUOTES = [
  { text: "这是一个最好的时代，也是一个最坏的时代。", author: "狄更斯" },
  { text: "满地都是六便士，他却抬头看见了月亮。", author: "毛姆" },
  { text: "生如夏花之绚烂，死如秋叶之静美。", author: "泰戈尔" },
  { text: "已识乾坤大，犹怜草木青。", author: "马一浮" },
  { text: "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。", author: "辛弃疾" },
  { text: "应无所住，而生其心。", author: "金刚经" },
  { text: "且视他人之疑目如盏盏鬼火，大胆去走你的夜路。", author: "史铁生" },
  { text: "既然选择了远方，便只顾风雨兼程。", author: "汪国真" },
];

const App: React.FC = () => {
  const [quoteData, setQuoteData] = useState<QuoteData>(INITIAL_QUOTE);
  const [currentStyleId, setCurrentStyleId] = useState<StyleId>('zen');
  const [isDownloading, setIsDownloading] = useState(false);
  
  const previewRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (key: keyof QuoteData, value: any) => {
    setQuoteData(prev => ({ ...prev, [key]: value }));
  };

  const handleRandom = useCallback(() => {
    const random = RANDOM_QUOTES[Math.floor(Math.random() * RANDOM_QUOTES.length)];
    // Preserve current alignment when randomizing text
    setQuoteData(prev => ({ 
      ...prev, 
      text: random.text, 
      author: random.author 
    }));
  }, []);

  const handleDownload = useCallback(async () => {
    if (previewRef.current === null) return;
    
    try {
      setIsDownloading(true);
      // Slight delay to ensure fonts and styles render if just changed
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const dataUrl = await toPng(previewRef.current, { 
        cacheBust: true,
        pixelRatio: 2, // High res
        // Attempt to fix font embedding issues by fetching resource with cors
        fetchRequestInit: {
            mode: 'cors',
            credentials: 'omit',
        },
        // Fallback: If fonts fail, don't crash the whole export, though fonts might be missing
        skipAutoScale: true, 
      });
      
      const link = document.createElement('a');
      link.download = `yiyan-${currentStyleId}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Oops, something went wrong!', err);
      // Fallback attempt without attempting to embed external styles if the first one failed strictly due to CORS
      // This is a naive retry but might save the user experience
      try {
         if (previewRef.current) {
            const dataUrlFallback = await toPng(previewRef.current, { 
                cacheBust: true, 
                pixelRatio: 2,
                skipFonts: true // Last resort: skip fonts to at least get the image
            });
            const link = document.createElement('a');
            link.download = `yiyan-${currentStyleId}-${Date.now()}.png`;
            link.href = dataUrlFallback;
            link.click();
            return;
         }
      } catch (retryErr) {
          console.error('Retry failed', retryErr);
      }

      alert('下载图片失败，可能由于网络或跨域字体问题。请尝试截图保存。');
    } finally {
      setIsDownloading(false);
    }
  }, [currentStyleId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-zen-50">
      
      {/* Header */}
      <header className="mb-8 text-center space-y-2">
        <h1 className="text-3xl font-serif font-bold text-zen-900 tracking-[0.2em] flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-zen-900 opacity-50"></span>
          一键生成名句卡片
          <span className="w-8 h-[1px] bg-zen-900 opacity-50"></span>
        </h1>
        <p className="text-zen-500 text-sm font-sans tracking-widest">
          ONE-CLICK QUOTE CARD
        </p>
      </header>

      {/* Main Content Area: 50/50 Grid Layout */}
      <main className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[600px] border border-zen-100">
        
        {/* Left Side: Controls */}
        <div className="p-6 md:p-10 flex flex-col bg-white border-b md:border-b-0 md:border-r border-zen-100 relative">
          
          <div className="flex-1 space-y-8">
             {/* Text Input Area */}
            <Editor 
              data={quoteData} 
              onChange={handleInputChange} 
              onRandom={handleRandom}
            />

            {/* Style Selector (Dropdown) */}
            <div className="space-y-3 pt-4 border-t border-dashed border-zen-100">
              <label className="text-xs font-semibold text-zen-500 uppercase tracking-wider ml-1 flex items-center gap-2">
                <Sparkles size={14} />
                选择风格
              </label>
              <StyleSelector 
                selectedId={currentStyleId} 
                onSelect={setCurrentStyleId} 
              />
            </div>
          </div>

          {/* Footer / Mobile only note */}
          <div className="mt-auto pt-6 text-[10px] text-gray-400 flex items-center gap-1.5">
            <AlertCircle size={10} />
            <span>实时预览，所见即所得</span>
          </div>

        </div>

        {/* Right Side: Preview */}
        <div className="bg-zen-50/50 p-6 md:p-10 flex flex-col items-center justify-center relative">
          
          <Preview 
            ref={previewRef}
            styleConfig={STYLES[currentStyleId]} 
            data={quoteData} 
          />

          {/* Floating Action Bar for Download */}
          <div className="mt-8 flex gap-4">
             <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`
                flex items-center gap-2 px-8 py-3 rounded-full font-sans font-medium text-white shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl active:scale-95
                ${isDownloading ? 'bg-gray-400 cursor-not-allowed' : 'bg-zen-800 hover:bg-zen-700'}
              `}
            >
              {isDownloading ? (
                <>Loading...</>
              ) : (
                <>
                  <Download size={18} />
                  <span>保存卡片</span>
                </>
              )}
            </button>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="mt-8 text-center text-zen-400 text-xs font-serif">
        <p>&copy; {new Date().getFullYear()} Zen Quotes. Designed with Inner Peace.</p>
      </footer>

    </div>
  );
};

export default App;