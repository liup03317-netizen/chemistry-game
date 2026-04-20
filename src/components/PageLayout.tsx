import React from 'react';
import { motion } from 'framer-motion';

export function PageLayout({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`min-h-screen w-full flex flex-col items-center justify-center p-4 relative ${className}`}
    >
      {/* Decorative border */}
      <div className="absolute inset-4 pointer-events-none rounded-[30px] border border-purple-500/20 shadow-[inset_0_0_50px_rgba(168,85,247,0.1)] z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {children}
      </div>
    </motion.div>
  );
}
