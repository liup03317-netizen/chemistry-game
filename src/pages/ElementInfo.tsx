import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function ElementInfo() {
  const navigate = useNavigate();

  return (
    <PageLayout className="justify-start pt-8 md:pt-16">
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center px-4 mb-8">
        <button 
          onClick={() => navigate('/')}
          className="glass-btn p-3 rounded-full hover:bg-white/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 drop-shadow-md">
          元素介绍
        </h2>
        <div className="w-12" />
      </div>

      <div className="w-full max-w-4xl px-4 overflow-y-auto pb-20 max-h-[80vh] space-y-8 text-white/90">
        
        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">一、元素概述</h3>
          <div className="space-y-4">
            <p><strong className="text-white">元素定义：</strong>具有相同核电荷数（即质子数）的一类原子统称为元素。</p>
            <p><strong className="text-white">元素符号：</strong>用元素的拉丁文名称的第一个字母大写表示，若第一个字母相同，则附加第二个小写字母。</p>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">二、常见金属元素</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-blue-200">
                  <th className="p-3 border-b border-white/20">符号</th>
                  <th className="p-3 border-b border-white/20">名称</th>
                  <th className="p-3 border-b border-white/20">相对原子质量</th>
                  <th className="p-3 border-b border-white/20">常见化合价</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr><td className="p-3 font-semibold text-white">H</td><td className="p-3">氢</td><td className="p-3">1</td><td className="p-3 text-purple-300">+1</td></tr>
                <tr><td className="p-3 font-semibold text-white">Na</td><td className="p-3">钠</td><td className="p-3">23</td><td className="p-3 text-purple-300">+1</td></tr>
                <tr><td className="p-3 font-semibold text-white">K</td><td className="p-3">钾</td><td className="p-3">39</td><td className="p-3 text-purple-300">+1</td></tr>
                <tr><td className="p-3 font-semibold text-white">Mg</td><td className="p-3">镁</td><td className="p-3">24</td><td className="p-3 text-purple-300">+2</td></tr>
                <tr><td className="p-3 font-semibold text-white">Al</td><td className="p-3">铝</td><td className="p-3">27</td><td className="p-3 text-purple-300">+3</td></tr>
                <tr><td className="p-3 font-semibold text-white">Zn</td><td className="p-3">锌</td><td className="p-3">65</td><td className="p-3 text-purple-300">+2</td></tr>
                <tr><td className="p-3 font-semibold text-white">Fe</td><td className="p-3">铁</td><td className="p-3">56</td><td className="p-3 text-purple-300">+2,+3</td></tr>
                <tr><td className="p-3 font-semibold text-white">Cu</td><td className="p-3">铜</td><td className="p-3">64</td><td className="p-3 text-purple-300">+1,+2</td></tr>
                <tr><td className="p-3 font-semibold text-white">Ag</td><td className="p-3">银</td><td className="p-3">108</td><td className="p-3 text-purple-300">+1</td></tr>
                <tr><td className="p-3 font-semibold text-white">Ba</td><td className="p-3">钡</td><td className="p-3">137</td><td className="p-3 text-purple-300">+2</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">三、常见非金属元素</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-blue-200">
                  <th className="p-3 border-b border-white/20">符号</th>
                  <th className="p-3 border-b border-white/20">名称</th>
                  <th className="p-3 border-b border-white/20">相对原子质量</th>
                  <th className="p-3 border-b border-white/20">常见化合价</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr><td className="p-3 font-semibold text-white">O</td><td className="p-3">氧</td><td className="p-3">16</td><td className="p-3 text-pink-300">-2</td></tr>
                <tr><td className="p-3 font-semibold text-white">Cl</td><td className="p-3">氯</td><td className="p-3">35.5</td><td className="p-3 text-pink-300">-1</td></tr>
                <tr><td className="p-3 font-semibold text-white">N</td><td className="p-3">氮</td><td className="p-3">14</td><td className="p-3 text-purple-300">-3,+5</td></tr>
                <tr><td className="p-3 font-semibold text-white">S</td><td className="p-3">硫</td><td className="p-3">32</td><td className="p-3 text-purple-300">-2,+4,+6</td></tr>
                <tr><td className="p-3 font-semibold text-white">C</td><td className="p-3">碳</td><td className="p-3">12</td><td className="p-3 text-purple-300">+2,+4</td></tr>
                <tr><td className="p-3 font-semibold text-white">P</td><td className="p-3">磷</td><td className="p-3">31</td><td className="p-3 text-purple-300">-3,+5</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">四、常见原子团</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-blue-200">
                  <th className="p-3 border-b border-white/20">符号</th>
                  <th className="p-3 border-b border-white/20">名称</th>
                  <th className="p-3 border-b border-white/20">化合价</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr><td className="p-3 font-semibold text-white">NH₄</td><td className="p-3">铵根</td><td className="p-3 text-purple-300">+1</td></tr>
                <tr><td className="p-3 font-semibold text-white">OH</td><td className="p-3">氢氧根</td><td className="p-3 text-pink-300">-1</td></tr>
                <tr><td className="p-3 font-semibold text-white">CO₃</td><td className="p-3">碳酸根</td><td className="p-3 text-pink-300">-2</td></tr>
                <tr><td className="p-3 font-semibold text-white">NO₃</td><td className="p-3">硝酸根</td><td className="p-3 text-pink-300">-1</td></tr>
                <tr><td className="p-3 font-semibold text-white">SO₄</td><td className="p-3">硫酸根</td><td className="p-3 text-pink-300">-2</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-4 border-b border-blue-500/30 pb-2">五、元素周期表基础</h3>
          <div className="space-y-4">
            <p><strong className="text-white">周期：</strong>元素周期表中横行称为周期，共有7个周期。</p>
            <p><strong className="text-white">族：</strong>元素周期表中纵行称为族，共有18个纵行，分为16个族。</p>
            <p><strong className="text-white">原子序数：</strong>按核电荷数从小到大的顺序给元素编号，这种编号叫做原子序数。</p>
            <p><strong className="text-white text-yellow-300">关系式：</strong>原子序数 = 核电荷数 = 质子数 = 核外电子数（对于原子）</p>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}