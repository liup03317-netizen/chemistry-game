import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, BookA, Gamepad2, FileX } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="flex flex-col items-center space-y-12">
        {/* Title Section */}
        <div className="text-center relative">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-tight">
            化学式闯关
          </h1>
          {/* Decorative bottom line */}
          <div className="h-1.5 w-3/4 mx-auto mt-4 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4">
          <button 
            onClick={() => navigate('/level-select')}
            className="neon-btn sweep-light md:col-span-2 py-6 text-2xl font-bold gap-3"
          >
            <Gamepad2 className="w-8 h-8" />
            开始挑战
          </button>

          <button 
            onClick={() => navigate('/element-info')}
            className="glass-btn py-5 text-xl gap-2 hover:border-blue-400/50"
          >
            <BookOpen className="w-6 h-6 text-blue-400" />
            元素介绍
          </button>

          <button 
            onClick={() => navigate('/valence-info')}
            className="glass-btn py-5 text-xl gap-2 hover:border-purple-400/50"
          >
            <BookA className="w-6 h-6 text-purple-400" />
            化合价介绍
          </button>

          <button 
            onClick={() => navigate('/formula-rules')}
            className="glass-btn py-5 text-xl gap-2 hover:border-pink-400/50"
          >
            <BookOpen className="w-6 h-6 text-pink-400" />
            书写方法
          </button>

          <button 
            onClick={() => navigate('/mistakes')}
            className="glass-btn py-5 text-xl gap-2 hover:border-red-400/50"
          >
            <FileX className="w-6 h-6 text-red-400" />
            错题本
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
