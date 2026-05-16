import React, {PropsWithChildren, useEffect} from 'react';
import {HashRouter, Route, Routes, useLocation} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
import ScreenActivityList from './components/screens/screen-activity-list';
import ScreenProjectList from "./components/screens/screen-project-list";
import ScreenAbout from "./components/screens/screen-about";
import ScreenProject from "./components/screens/screen-project";
import ScreenActivity from "./components/screens/screen-activity";

const ScrollToTopWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTopWrapper>
        <Routes>
          <Route path="/" element={<ScreenFront/>}/>
          <Route path="/activity" element={<ScreenActivityList/>}/>
          <Route path="/activity/:id" element={<ScreenActivity/>}/>
          <Route path="/project" element={<ScreenProjectList/>}/>
          <Route path="/project/:id" element={<ScreenProject/>}/>
          <Route path="/about" element={<ScreenAbout/>}/>
          <Route path="/contact" element={<ScreenAbout/>}/>
        </Routes>
      </ScrollToTopWrapper>
    </HashRouter>
  );
}

export default App;
