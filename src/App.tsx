import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
import ScreenActivityList from './components/screens/screen-activity-list';
import ScreenProjectList from "./components/screens/screen-project-list";
import ScreenAbout from "./components/screens/screen-about";
import ScreenProject from "./components/screens/screen-project";
import ScreenActivity from "./components/screens/screen-activity";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ScreenFront />} />
        <Route path="/activity" element={<ScreenActivityList />} />
        <Route path="/activity/:id" element={<ScreenActivity />} />
        <Route path="/project" element={<ScreenProjectList />} />
        <Route path="/project/:id" element={<ScreenProject />} />
        <Route path="/about" element={<ScreenAbout />} />
        <Route path="/contact" element={<ScreenAbout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
