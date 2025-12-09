import React from 'react';

export interface StyleConfig {
  id: string;
  name: string;
  description: string;
  containerClass: string; // Background and borders
  textClass: string; // Font family, size, color
  authorClass: string; // Author font styles
  wrapperClass?: string; // Additional layout wrapper (e.g. for vertical text)
  decoration?: React.ReactNode; // Optional visual elements like stamps or lines
}

export type TextAlignment = 'left' | 'center' | 'right';

export interface QuoteData {
  text: string;
  author: string;
  alignment: TextAlignment;
}

export type StyleId = 
  | 'zen' 
  | 'ink' 
  | 'ancient' 
  | 'modern' 
  | 'porcelain' 
  | 'anime' 
  | 'watercolor' 
  | 'nature' 
  | 'elegant' 
  | 'red'
  | 'blueprint'
  | 'clay';