import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';

export default function FormulaRules() {
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
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 drop-shadow-md">
          化学式书写方法
        </h2>
        <div className="w-12" />
      </div>

      <div className="w-full max-w-4xl px-4 overflow-y-auto pb-20 max-h-[80vh] space-y-8 text-white/90">
        
        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">一、化学式的概念</h3>
          <div className="space-y-4">
            <p><strong className="text-white">化学式定义：</strong>化学式是用元素符号和数字的组合表示物质组成的式子。</p>
            <p><strong className="text-white">化学式的意义：</strong></p>
            <ul className="list-disc pl-5 space-y-2 text-pink-100">
              <li>表示一种物质</li>
              <li>表示物质的组成元素</li>
              <li>表示分子中各原子的个数比</li>
              <li>表示物质的相对分子质量</li>
            </ul>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">二、单质化学式的书写</h3>
          <ul className="space-y-4">
            <li><strong className="text-white">1. 单原子分子：</strong>直接用元素符号表示，如：Fe（铁）、Cu（铜）、He（氦气）</li>
            <li><strong className="text-white">2. 双原子分子：</strong>在元素符号右下角加"2"，如：O₂（氧气）、H₂（氢气）、N₂（氮气）、Cl₂（氯气）</li>
            <li><strong className="text-white">3. 多原子分子：</strong>在元素符号右下角写原子个数，如：O₃（臭氧）、P₄（白磷）</li>
          </ul>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">三、化合物化学式的书写规则</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-white">正价在前，负价在后</strong>（金属在前，非金属在后）</li>
            <li><strong className="text-white">十字交叉，化简数值</strong>（作为下标）</li>
          </ul>
          
          <h4 className="text-xl font-bold text-white mb-3 mt-8">书写步骤详解：</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <strong className="text-pink-300">步骤1：确定元素顺序</strong>
              <p className="text-sm mt-1">金属元素在前，非金属元素在后；正价元素在前，负价元素在后。</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <strong className="text-pink-300">步骤2：写出元素符号</strong>
              <p className="text-sm mt-1">按照顺序写出各元素的符号。</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <strong className="text-pink-300">步骤3：标注化合价</strong>
              <p className="text-sm mt-1">在元素符号上方标注化合价。</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <strong className="text-pink-300">步骤4：十字交叉</strong>
              <p className="text-sm mt-1">将化合价的数值交叉写在对方元素符号的右下角（去掉符号）。</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <strong className="text-pink-300">步骤5：化简</strong>
              <p className="text-sm mt-1">将右下角数字化简为最简整数比。</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <strong className="text-pink-300">步骤6：检查</strong>
              <p className="text-sm mt-1">验证化合价代数和是否为零。</p>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">四、书写示例</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-pink-200">
                  <th className="p-3 border-b border-white/20">物质名称</th>
                  <th className="p-3 border-b border-white/20">元素化合价</th>
                  <th className="p-3 border-b border-white/20">书写过程</th>
                  <th className="p-3 border-b border-white/20">化学式</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr><td className="p-3 font-semibold text-white">水</td><td className="p-3 text-sm">H(+1) O(-2)</td><td className="p-3 text-sm">→ H₂O</td><td className="p-3 font-bold text-pink-300">H₂O</td></tr>
                <tr><td className="p-3 font-semibold text-white">二氧化碳</td><td className="p-3 text-sm">C(+4) O(-2)</td><td className="p-3 text-sm">→ C₂O₄ → CO₂</td><td className="p-3 font-bold text-pink-300">CO₂</td></tr>
                <tr><td className="p-3 font-semibold text-white">氧化铝</td><td className="p-3 text-sm">Al(+3) O(-2)</td><td className="p-3 text-sm">→ Al₂O₃</td><td className="p-3 font-bold text-pink-300">Al₂O₃</td></tr>
                <tr><td className="p-3 font-semibold text-white">氯化钠</td><td className="p-3 text-sm">Na(+1) Cl(-1)</td><td className="p-3 text-sm">→ NaCl</td><td className="p-3 font-bold text-pink-300">NaCl</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">五、含原子团化合物的书写</h3>
          <div className="space-y-4">
            <p><strong className="text-white">原子团：</strong>由两个或两个以上原子组成的集团，在化学反应中像一个原子一样作为一个整体参加反应。</p>
            <p><strong className="text-white">含原子团化合物书写规则：</strong></p>
            <ul className="list-decimal pl-5 space-y-2 mb-6">
              <li>将原子团当作一个整体，按照正常顺序书写</li>
              <li>原子团个数大于1时，加括号，在括号外写数字</li>
              <li>原子团个数为1时，不加括号</li>
            </ul>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mt-4">
                <thead>
                  <tr className="bg-white/10 text-pink-200">
                    <th className="p-3 border-b border-white/20">物质名称</th>
                    <th className="p-3 border-b border-white/20">化合价</th>
                    <th className="p-3 border-b border-white/20">书写过程</th>
                    <th className="p-3 border-b border-white/20">化学式</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr><td className="p-3 font-semibold text-white">氢氧化钠</td><td className="p-3 text-sm">Na(+1) OH(-1)</td><td className="p-3 text-sm">→ NaOH</td><td className="p-3 font-bold text-pink-300">NaOH</td></tr>
                  <tr><td className="p-3 font-semibold text-white">氢氧化钙</td><td className="p-3 text-sm">Ca(+2) OH(-1)</td><td className="p-3 text-sm">→ Ca(OH)₂</td><td className="p-3 font-bold text-pink-300">Ca(OH)₂</td></tr>
                  <tr><td className="p-3 font-semibold text-white">硫酸钠</td><td className="p-3 text-sm">Na(+1) SO₄(-2)</td><td className="p-3 text-sm">→ Na₂SO₄</td><td className="p-3 font-bold text-pink-300">Na₂SO₄</td></tr>
                  <tr><td className="p-3 font-semibold text-white">硝酸铝</td><td className="p-3 text-sm">Al(+3) NO₃(-1)</td><td className="p-3 text-sm">→ Al(NO₃)₃</td><td className="p-3 font-bold text-pink-300">Al(NO₃)₃</td></tr>
                  <tr><td className="p-3 font-semibold text-white">碳酸钙</td><td className="p-3 text-sm">Ca(+2) CO₃(-2)</td><td className="p-3 text-sm">→ CaCO₃</td><td className="p-3 font-bold text-pink-300">CaCO₃</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="glass-card p-6 md:p-8">
          <h3 className="text-2xl font-bold text-pink-300 mb-4 border-b border-pink-500/30 pb-2">六、注意事项与书写技巧</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-3">注意事项：</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-pink-100">
                <li><strong className="text-white">数字的含义：</strong>元素符号右下角的数字表示该原子的个数，"1"通常省略不写。</li>
                <li><strong className="text-white">代数和为零：</strong>在任何化合物中，正负化合价的代数和必须为零。</li>
                <li><strong className="text-white">最简原则：</strong>化学式中各原子的个数比应化为最简整数比。</li>
                <li><strong className="text-white">括号的使用：</strong>只有当原子团的个数大于1时才使用括号。</li>
                <li><strong className="text-white">大小写：</strong>元素符号的第一个字母大写，第二个字母小写。</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-3">快速记忆技巧：</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-yellow-200">
                <li><strong className="text-yellow-400">记住常见化合价：</strong>化合价是书写化学式的基础</li>
                <li><strong className="text-yellow-400">多练习十字交叉法：</strong>熟练掌握交叉和化简</li>
                <li><strong className="text-yellow-400">特殊记忆原子团：</strong>记住常见原子团的化合价</li>
                <li><strong className="text-yellow-400">注意括号使用时机：</strong>原子团个数&gt;1时加括号</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}