import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
import ScreenActivityList from './components/screens/screen-activity-list';
import ScreenProjectList from "./components/screens/screen-project-list";
import ScreenAbout from "./components/screens/screen-about";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ScreenFront />} />
        <Route path="/activity" element={<ScreenActivityList />} />
        <Route path="/project" element={<ScreenProjectList />} />
        <Route path="/about" element={<ScreenAbout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
