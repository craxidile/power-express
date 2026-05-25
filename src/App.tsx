import React, { PropsWithChildren, useEffect } from 'react';
import {
  HashRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
import ScreenActivityList from './components/screens/screen-activity-list';
import ScreenProjectList from './components/screens/screen-project-list';
import ScreenAbout from './components/screens/screen-about';
import ScreenProject from './components/screens/screen-project';
import ScreenActivity from './components/screens/screen-activity';
import { IVmScreen, useVmScreen } from './stores/vm-screen';

const ScrollToTopWrapper = (props: PropsWithChildren) => {
  const { children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

const AppScreen = (props: PropsWithChildren) => {
  const { children } = props;

  const vmScreen: IVmScreen = useVmScreen();
  useEffect(() => {
    if (!vmScreen.bind) return;
    vmScreen.bind();
  }, [vmScreen]);

  return <>{children}</>;
};

function App() {
  return (
    <HashRouter>
      <AppScreen>
        <ScrollToTopWrapper>
          <Routes>
            <Route path="/:locale/" element={<ScreenFront />} />
            <Route path="/:locale/activity" element={<ScreenActivityList />} />
            <Route path="/:locale/activity/:id" element={<ScreenActivity />} />
            <Route path="/:locale/project" element={<ScreenProjectList />} />
            <Route path="/:locale/project/:id" element={<ScreenProject />} />
            <Route path="/:locale/about" element={<ScreenAbout />} />
            <Route path="/:locale/contact" element={<ScreenAbout />} />
            <Route path="/" element={<Navigate to="/th" replace />} />
          </Routes>
        </ScrollToTopWrapper>
      </AppScreen>
    </HashRouter>
  );
}

export default App;
