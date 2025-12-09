import React, { forwardRef } from 'react';
import { StyleConfig, QuoteData } from '../types';

interface PreviewProps {
  styleConfig: StyleConfig;
  data: QuoteData;
}

const Preview = forwardRef<HTMLDivElement, PreviewProps>(({ styleConfig, data }, ref) => {
  const isVertical = styleConfig.id === 'ancient';
  
  // Mapping alignment prop to Tailwind classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2 md:p-6 bg-transparent rounded-xl">
      {/* 
        Wrapper for export capture. 
        Padding ensures shadows are captured without clipping.
      */}
      <div ref={ref} className="p-8 inline-block bg-transparent">
        {/* The Actual Card */}
        <div 
          className={`
            relative w-[340px] md:w-[400px] aspect-[3/4] flex flex-col p-10 transition-all duration-500
            ${styleConfig.containerClass}
          `}
        >
          {/* Decorative background elements */}
          {styleConfig.decoration}

          {/* Content Wrapper */}
          <div className={`flex-1 relative z-10 ${styleConfig.wrapperClass || 'flex flex-col h-full'}`}>
            
            {/* Main Text */}
            <div 
              className={`
                flex-1 flex flex-col justify-center whitespace-pre-wrap transition-colors duration-300
                ${styleConfig.textClass}
                ${alignmentClasses[data.alignment || 'left']}
              `}
            >
               {data.text || "请输入文字..."}
            </div>

            {/* Author Section */}
            {data.author && (
              <div className={`${styleConfig.authorClass} transition-colors duration-300`}>
                {isVertical ? data.author : `${data.author}`}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
});

Preview.displayName = 'Preview';

export default Preview;