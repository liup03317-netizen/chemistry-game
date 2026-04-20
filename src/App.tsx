import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LevelSelect from './pages/LevelSelect';
import Game from './pages/Game';
import Mistakes from './pages/Mistakes';
import ElementInfo from './pages/ElementInfo';
import ValenceInfo from './pages/ValenceInfo';
import FormulaRules from './pages/FormulaRules';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/level-select" element={<LevelSelect />} />
      <Route path="/game/:difficulty" element={<Game />} />
      <Route path="/mistakes" element={<Mistakes />} />
      <Route path="/element-info" element={<ElementInfo />} />
      <Route path="/valence-info" element={<ValenceInfo />} />
      <Route path="/formula-rules" element={<FormulaRules />} />
    </Routes>
  );
}

export default App;
