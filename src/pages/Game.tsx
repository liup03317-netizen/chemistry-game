import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowLeft, Delete, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { useGameStore, useMistakeStore, Difficulty } from '../store';
import { getRandomQuestions } from '../utils/gameData';
import { ELEMENTS_SIMPLE, RADICALS, checkAnswer, renderFormula } from '../utils/formulaUtils';

export default function Game() {
  const { difficulty } = useParams<{ difficulty: string }>();
  const navigate = useNavigate();
  const diff = difficulty as Difficulty;
  
  const { 
    currentLevel, currentQuestionIndex, questions,
    setQuestions, nextLevel, nextQuestion, resetGame
  } = useGameStore();
  const addMistake = useMistakeStore(state => state.addMistake);
  
  const [inputTokens, setInputTokens] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<'none' | 'correct' | 'wrong' | 'level-complete' | 'game-complete' | 'game-over'>('none');
  const [correctAnswerStr, setCorrectAnswerStr] = useState<string>('');

  const playBeep = (type: 'click' | 'correct' | 'wrong') => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.1);
      } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.setValueAtTime(600, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(800, ctx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
      }
    } catch (e) {
      // Ignore audio errors
    }
  };

  useEffect(() => {
    if (diff !== 'simple' && diff !== 'challenge') {
      navigate('/');
      return;
    }
    // Init questions if empty
    if (questions.length === 0) {
      setQuestions(getRandomQuestions(diff, 20));
    }
  }, [diff, questions, navigate, setQuestions]);

  // Clean up and reset on unmount
  useEffect(() => {
    return () => {
      // Don't reset if we are just navigating between same game
    };
  }, []);

  if (questions.length === 0) return <PageLayout><div>Loading...</div></PageLayout>;

  // Current question is index: (level-1)*4 + questionIndex
  const globalIndex = (currentLevel - 1) * 4 + currentQuestionIndex;
  const currentQuestion = questions[globalIndex];

  const handleKeyClick = (token: string) => {
    playBeep('click');
    setInputTokens(prev => [...prev, token]);
  };

  const handleDelete = () => {
    playBeep('click');
    setInputTokens(prev => prev.slice(0, -1));
  };

  const handleConfirm = () => {
    if (inputTokens.length === 0) return;
    
    const isCorrect = checkAnswer(inputTokens, currentQuestion.formula);
    
    if (isCorrect) {
      playBeep('correct');
      setShowResult('correct');
      
      setTimeout(() => {
        setInputTokens([]);
        
        if (currentQuestionIndex === 3) {
          // Level complete
          if (currentLevel === 5) {
            // Game complete
            setShowResult('game-complete');
            confetti({
              particleCount: 150,
              spread: 100,
              origin: { y: 0.6 }
            });
            setTimeout(() => {
              setShowResult('none');
              resetGame();
              navigate('/');
            }, 3000);
          } else {
            // Next level
            setShowResult('level-complete');
            confetti({
              particleCount: 50,
              spread: 60,
              colors: ['#a855f7', '#3b82f6', '#ec4899'],
              origin: { y: 0.8 }
            });
            setTimeout(() => {
              setShowResult('none');
              nextLevel();
            }, 2000);
          }
        } else {
          // Next question
          setShowResult('none');
          nextQuestion();
        }
      }, 1000);
      
    } else {
      playBeep('wrong');
      setCorrectAnswerStr(currentQuestion.formula);
      setShowResult('wrong');
      
      addMistake({
        name: currentQuestion.name,
        formula: currentQuestion.formula,
        userAnswer: inputTokens.join(''),
      });
      
      setTimeout(() => {
        setShowResult('game-over');
        setTimeout(() => {
          setShowResult('none');
          resetGame();
          navigate('/');
        }, 3000);
      }, 2000);
    }
  };

  const renderInput = () => {
    if (inputTokens.length === 0) return <span className="text-white/30">请使用下方键盘输入</span>;
    return inputTokens.map((t, i) => {
      if (/^[1-6]$/.test(t)) {
        return <sub key={i} className="text-2xl">{t}</sub>;
      }
      return <span key={i} className="text-4xl font-semibold tracking-wide">{t}</span>;
    });
  };

  return (
    <PageLayout className="justify-start pt-8 md:pt-16">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-4 mb-8">
        <button 
          onClick={() => { resetGame(); navigate('/'); }}
          className="glass-btn p-3 rounded-full hover:bg-white/10 z-20"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-center z-20">
          <h2 className="text-xl text-purple-300 font-medium">第 {currentLevel} 关</h2>
          <p className="text-sm text-blue-300/80">进度: {currentQuestionIndex + 1}/4</p>
        </div>
        <div className="w-12" />
      </div>

      {/* Main Game Area */}
      <div className="w-full max-w-3xl flex flex-col items-center z-10 px-4">
        <motion.div 
          key={currentQuestion.name}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-6xl font-bold mb-10 text-white drop-shadow-md"
        >
          {currentQuestion.name}
        </motion.div>

        {/* Input Box */}
        <div className="w-full h-24 glass-card mb-8 flex items-center justify-center px-6 border-b-4 border-b-purple-500/30">
          <div className="flex items-baseline justify-center min-h-[3rem]">
            {renderInput()}
          </div>
        </div>

        {/* Keyboard */}
        <div className="w-full glass-card p-4 md:p-6 flex flex-col gap-4">
          {/* Elements Row */}
          <div className="flex flex-wrap justify-center gap-2">
            {ELEMENTS_SIMPLE.map(el => (
              <button 
                key={el} 
                onClick={() => handleKeyClick(el)}
                className="glass-btn w-12 h-14 md:w-14 md:h-16 text-xl md:text-2xl hover:bg-blue-500/20 active:bg-blue-500/40"
              >
                {el}
              </button>
            ))}
          </div>

          {/* Radicals Row (Challenge only) */}
          {diff === 'challenge' && (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {RADICALS.map(rad => (
                <button 
                  key={rad} 
                  onClick={() => handleKeyClick(rad)}
                  className="glass-btn px-4 h-14 md:h-16 text-xl md:text-2xl hover:bg-purple-500/20 active:bg-purple-500/40"
                >
                  {/* render subscript for radicals, e.g. NH4 -> NH<sub>4</sub> */}
                  {renderFormula(rad)}
                </button>
              ))}
            </div>
          )}

          {/* Numbers & Brackets Row */}
          <div className="flex justify-center gap-2 mt-2">
            {['1', '2', '3', '4', '5', '6'].map(num => (
              <button 
                key={num} 
                onClick={() => handleKeyClick(num)}
                className="glass-btn w-12 h-12 md:w-14 md:h-14 text-xl hover:bg-emerald-500/20 active:bg-emerald-500/40"
              >
                <sub className="text-lg">{num}</sub>
              </button>
            ))}
          </div>

          {/* Controls Row */}
          <div className="flex justify-center gap-4 mt-4">
            {diff === 'challenge' && (
              <div className="flex gap-2 mr-4">
                <button onClick={() => handleKeyClick('(')} className="glass-btn w-12 h-12 text-2xl">(</button>
                <button onClick={() => handleKeyClick(')')} className="glass-btn w-12 h-12 text-2xl">)</button>
              </div>
            )}
            <button 
              onClick={handleDelete}
              className="glass-btn px-6 h-12 text-lg gap-2 hover:bg-red-500/20 active:bg-red-500/40"
            >
              <Delete className="w-5 h-5" />
              删除
            </button>
            <button 
              onClick={handleConfirm}
              className="glass-btn px-8 h-12 text-lg gap-2 bg-purple-600/30 hover:bg-purple-500/50 active:bg-purple-500/70 font-bold border-purple-400/50"
            >
              <CheckCircle2 className="w-5 h-5" />
              确认
            </button>
          </div>
        </div>
      </div>

      {/* Result Overlays */}
      <AnimatePresence>
        {showResult === 'correct' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-green-900/40 backdrop-blur-sm"
          >
            <div className="text-6xl md:text-8xl font-bold text-green-400 drop-shadow-[0_0_20px_rgba(74,222,128,0.8)]">
              正确!
            </div>
          </motion.div>
        )}
        
        {showResult === 'wrong' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-red-900/60 backdrop-blur-md"
          >
            <div className="text-5xl md:text-7xl font-bold text-red-400 mb-8 drop-shadow-[0_0_20px_rgba(248,113,113,0.8)]">
              遗憾失败
            </div>
            <div className="glass-card p-8 flex flex-col items-center bg-black/40">
              <p className="text-2xl text-white/80 mb-4">正确答案应为：</p>
              <div className="text-6xl font-bold text-green-400">
                {renderFormula(correctAnswerStr)}
              </div>
            </div>
          </motion.div>
        )}
        {showResult === 'level-complete' && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <div className="glass-card p-12 flex flex-col items-center border-purple-500/30">
              <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-md mb-4">
                第 {currentLevel} 关完成！
              </div>
              <p className="text-xl text-purple-200/80">即将进入下一关...</p>
            </div>
          </motion.div>
        )}

        {showResult === 'game-complete' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <div className="glass-card p-12 flex flex-col items-center border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.3)]">
              <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] mb-6">
                恭喜通关！
              </div>
              <p className="text-2xl text-yellow-200/90 mb-8">你已经掌握了这些化学式</p>
              <div className="text-white/60 animate-pulse">即将返回首页...</div>
            </div>
          </motion.div>
        )}

        {showResult === 'game-over' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <div className="glass-card p-12 flex flex-col items-center border-red-500/30">
              <div className="text-5xl md:text-6xl font-bold text-red-400 drop-shadow-[0_0_15px_rgba(248,113,113,0.5)] mb-4">
                挑战结束
              </div>
              <p className="text-xl text-red-200/80 mb-8">错题已加入错题本，多多复习哦！</p>
              <div className="text-white/60 animate-pulse">即将返回首页...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
