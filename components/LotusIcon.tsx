import React from 'react';

export const LotusIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Minimalist Line Art Lotus */}
    <g transform="translate(50, 60) scale(0.9)">
      {/* Center Petal */}
      <path d="M0 0 C -10 -20, -10 -40, 0 -55 C 10 -40, 10 -20, 0 0 Z" />
      
      {/* Left Petal */}
      <path d="M-5 -5 C -20 -15, -35 -20, -40 -5 C -40 10, -20 15, -5 0" />
      
      {/* Right Petal */}
      <path d="M5 -5 C 20 -15, 35 -20, 40 -5 C 40 10, 20 15, 5 0" />
      
      {/* Left Small Petal */}
      <path d="M-15 0 C -25 5, -35 15, -30 25" strokeWidth="1.5" />

      {/* Right Small Petal */}
      <path d="M15 0 C 25 5, 35 15, 30 25" strokeWidth="1.5" />
      
      {/* Center Stamen Details */}
      <line x1="0" y1="-10" x2="0" y2="-25" strokeWidth="1" opacity="0.6" />
      
      {/* Water ripple hint below */}
      <path d="M-20 30 Q 0 35 20 30" strokeWidth="1.5" opacity="0.5" />
    </g>
  </svg>
);