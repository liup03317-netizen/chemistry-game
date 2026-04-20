import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function ValenceInfo() {
  const navigate = useNavigate();

  return (
    <PageLayout className="justify-start pt-8 md:pt-16">
      <div className="w-full max-w-4xl flex justify-between items-center px-4 mb-8">
        <button 
          onClick={() => navigate('/')}
          className="glass-btn p-3 rounded-full hover:bg-white/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-md">
          化合价介绍
        </h2>
        <div className="w-12" />
      </div>

      <div className="w-full max-w-4xl px-4 overflow-y-auto pb-20 max-h-[80vh] space-y-8 text-white/90">
        
        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">一、化合价的概念和意义</h3>
          <div className="space-y-4">
            <p><strong className="text-white">化合价定义：</strong>化合价是元素在形成化合物时表现出来的一种性质，用来表示不同元素的原子相互化合的数目关系。</p>
            <p><strong className="text-white">化合价的本质：</strong>化合价的数值等于该元素的一个原子与其他元素的原子结合时，得到或失去电子的数目。</p>
            <p><strong className="text-white">化合价的表示方法：</strong>在化学式中，化合价通常写在元素符号的正上方，"+"表示正价，"-"表示负价。</p>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">二、化合价的规律</h3>
          <ul className="list-decimal pl-5 space-y-3">
            <li><strong className="text-white">化合价有正有负：</strong>金属元素通常显正价，非金属元素通常显负价。</li>
            <li><strong className="text-white">单质化合价为零：</strong>单质的化合价为零，因为电子没有转移。</li>
            <li><strong className="text-white text-yellow-300">化合价代数和为零：</strong>在化合物中，所有元素的正负化合价代数和为零。</li>
            <li><strong className="text-white">氢和氧的化合价：</strong>氢元素通常显+1价，氧元素通常显-2价。</li>
          </ul>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">三、常见元素的化合价</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">H (氢)</span> <span className="float-right text-purple-300">+1</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">O (氧)</span> <span className="float-right text-pink-300">-2</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Na (钠)</span> <span className="float-right text-purple-300">+1</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">K (钾)</span> <span className="float-right text-purple-300">+1</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Mg (镁)</span> <span className="float-right text-purple-300">+2</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Ca (钙)</span> <span className="float-right text-purple-300">+2</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Ba (钡)</span> <span className="float-right text-purple-300">+2</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Al (铝)</span> <span className="float-right text-purple-300">+3</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Zn (锌)</span> <span className="float-right text-purple-300">+2</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Fe (铁)</span> <span className="float-right text-purple-300">+2,+3</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Cu (铜)</span> <span className="float-right text-purple-300">+1,+2</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Ag (银)</span> <span className="float-right text-purple-300">+1</span></div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10"><span className="text-white font-semibold">Cl (氯)</span> <span className="float-right text-pink-300">-1</span></div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">四、化合价记忆口诀</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-3">元素记忆口诀：</h4>
              <ul className="space-y-2 text-lg text-blue-200">
                <li>一价氢氯钾钠银</li>
                <li>二价氧钙钡镁锌</li>
                <li>三铝四硅五价磷</li>
                <li>二四六硫二三铁</li>
                <li>铜汞二价最常见</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-3">原子团记忆口诀：</h4>
              <ul className="space-y-2 text-lg text-pink-200">
                <li>负一硝酸氢氧根（NO₃⁻、OH⁻）</li>
                <li>负二硫酸碳酸根（SO₄²⁻、CO₃²⁻）</li>
                <li>负三记住磷酸根（PO₄³⁻）</li>
                <li>正一价的是铵根（NH₄⁺）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-4 border-b border-purple-500/30 pb-2">五、化合价的应用规则</h3>
          <ul className="list-decimal pl-5 space-y-3 mb-6">
            <li><strong className="text-white">十字交叉法：</strong>将正价元素符号在前，负价元素符号在后，交叉化合价数值（去掉符号）作为下标。</li>
            <li><strong className="text-white">化合价代数和为零：</strong>在化合物中，所有元素的化合价代数和必须为零。</li>
            <li><strong className="text-white">原子团的化合价：</strong>原子团作为一个整体，其化合价等于内部各元素化合价的代数和。</li>
            <li><strong className="text-white">原子团括号的使用：</strong>当原子团的个数大于1时，需要用括号将原子团括起来，再在括号外写上数字。</li>
          </ul>
          
          <h4 className="text-xl font-bold text-white mb-3 mt-8">应用举例：</h4>
          <div className="space-y-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-bold text-blue-300">例1：氧化铝（Al₂O₃）</p>
              <p>铝是+3价，氧是-2价，(+3)×2 + (-2)×3 = 0</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-bold text-blue-300">例2：硫酸钠（Na₂SO₄）</p>
              <p>钠是+1价，硫酸根是-2价，(+1)×2 + (-2)×1 = 0</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="font-bold text-blue-300">例3：氢氧化钙（Ca(OH)₂）</p>
              <p>钙是+2价，氢氧根是-1价，(+2)×1 + (-1)×2 = 0</p>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}