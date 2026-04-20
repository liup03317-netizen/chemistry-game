import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Swords } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { useGameStore, Difficulty } from '../store';

export default function LevelSelect() {
  const navigate = useNavigate();
  const setDifficulty = useGameStore(state => state.setDifficulty);

  const handleSelect = (diff: Difficulty) => {
    setDifficulty(diff);
    navigate(`/game/${diff}`);
  };

  return (
    <PageLayout>
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-16">
          <button 
            onClick={() => navigate('/')}
            className="glass-btn p-3 rounded-full hover:bg-white/10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-md">
            选择难度
          </h2>
          <div className="w-12" /> {/* Spacer to balance flex layout */}
        </div>

        {/* Difficulty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <button 
            onClick={() => handleSelect('simple')}
            className="glass-card group relative p-8 flex flex-col items-center justify-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 border-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl" />
            <div className="p-6 bg-blue-500/20 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <Shield className="w-16 h-16 text-blue-400" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-100 mb-2">简单模式</h3>
              <p className="text-blue-300/80">包含常见的单元素和双元素无机物化学式书写，共5关。</p>
            </div>
          </button>

          <button 
            onClick={() => handleSelect('challenge')}
            className="glass-card group relative p-8 flex flex-col items-center justify-center gap-6 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 border-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-4xl" />
            <div className="p-6 bg-purple-500/20 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Swords className="w-16 h-16 text-purple-400" />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-100 mb-2">挑战模式</h3>
              <p className="text-purple-300/80">包含复杂的原子团结构和括号使用，考验你的综合能力，共5关。</p>
            </div>
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
