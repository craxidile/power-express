import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import FrontScreen from './components/screens/front';
import ProjectScreen from './components/screens/project';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<FrontScreen />} />
        <Route path="/project" element={<ProjectScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
