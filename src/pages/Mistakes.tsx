import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, AlertCircle } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { useMistakeStore } from '../store';
import { renderFormula } from '../utils/formulaUtils';

export default function Mistakes() {
  const navigate = useNavigate();
  const { mistakes, clearMistakes, removeMistake } = useMistakeStore();

  return (
    <PageLayout className="justify-start pt-8 md:pt-16">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center px-4 mb-12">
        <button 
          onClick={() => navigate('/')}
          className="glass-btn p-3 rounded-full hover:bg-white/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 drop-shadow-md">
          错题本
        </h2>
        {mistakes.length > 0 ? (
          <button 
            onClick={() => {
              if (window.confirm('确定要清空所有错题吗？')) {
                clearMistakes();
              }
            }}
            className="glass-btn p-3 rounded-full hover:bg-red-500/20 text-red-400"
            title="清空错题"
          >
            <Trash2 className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-12" />
        )}
      </div>

      {/* Mistake List */}
      <div className="w-full max-w-4xl px-4 flex flex-col gap-4 overflow-y-auto pb-20 max-h-[70vh]">
        {mistakes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-white/50">
            <AlertCircle className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-xl">目前没有错题记录，继续保持！</p>
          </div>
        ) : (
          mistakes.map((record) => (
            <div key={record.id} className="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-4 border-red-500/20 hover:border-red-500/40 transition-colors">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 flex-1">
                <div className="text-2xl font-bold text-white min-w-[120px] text-center md:text-left">
                  {record.name}
                </div>
                
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="text-sm text-red-300">你的答案</div>
                  <div className="text-xl font-medium text-red-400 line-through decoration-red-500/50">
                    {renderFormula(record.userAnswer) || <span className="text-red-400/50 italic">未输入</span>}
                  </div>
                </div>

                <div className="hidden md:block w-px h-12 bg-white/10" />

                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="text-sm text-green-300">正确答案</div>
                  <div className="text-2xl font-bold text-green-400">
                    {renderFormula(record.formula)}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => removeMistake(record.id)}
                className="glass-btn p-2 rounded-full hover:bg-red-500/20 text-white/50 hover:text-red-400 transition-colors"
                title="移除此题"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </PageLayout>
  );
}
