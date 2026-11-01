import React, { PropsWithChildren, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
import ScreenActivityList from './components/screens/screen-activity-list';
import ScreenProjectList from './components/screens/screen-project-list';
import ScreenAbout from './components/screens/screen-about';
import ScreenProject from './components/screens/screen-project';
import ScreenActivity from './components/screens/screen-activity';
import ScreenAssessment from './components/screens/screen-assessment';
import CookieBanner from './components/_commons/cookie-banner';
import ScreenGuide from './components/screens/screen-guide';
import { IVmScreen, useVmScreen } from './stores/vm-screen';

const ScrollToTopWrapper = (props: PropsWithChildren) => {
  const { children } = props;

  const { pathname } = useLocation();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    document.documentElement.scrollTo(0, 0);
  }, [pathname, hash]);

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
    <BrowserRouter>
      <AppScreen>
        <ScrollToTopWrapper>
          <Routes>
            <Route path="/:locale/" element={<ScreenFront />} />
            <Route path="/:locale/activity" element={<ScreenActivityList />} />
            <Route path="/:locale/activity/:id" element={<ScreenActivity />} />
            <Route path="/:locale/project" element={<ScreenProjectList />} />
            <Route path="/:locale/project/:id" element={<ScreenProject />} />
            <Route
              path="/:locale/free-assessment"
              element={<ScreenAssessment />}
            />
            <Route path="/:locale/about" element={<ScreenAbout />} />
            <Route path="/:locale/contact" element={<ScreenAbout />} />
            <Route path="/" element={<Navigate to="/th" replace />} />
            <Route path="/:locale/*" element={<ScreenGuide />} />
          </Routes>
        </ScrollToTopWrapper>
        <CookieBanner />
      </AppScreen>
    </BrowserRouter>
  );
}

export default App;
