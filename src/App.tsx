import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
import ScreenActivityList from './components/screens/screen-activity-list';
import ScreenProjectList from "./components/screens/screen-project-list";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ScreenFront />} />
        <Route path="/activity" element={<ScreenActivityList />} />
        <Route path="/project" element={<ScreenProjectList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
