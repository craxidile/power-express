import React, { PropsWithChildren, Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom';

import ScreenFront from './components/screens/screen-front';
const ScreenActivityList = lazy(
  () => import('./components/screens/screen-activity-list')
);
const ScreenProjectList = lazy(
  () => import('./components/screens/screen-project-list')
);
const ScreenAbout = lazy(() => import('./components/screens/screen-about'));
const ScreenProject = lazy(() => import('./components/screens/screen-project'));
const ScreenActivity = lazy(
  () => import('./components/screens/screen-activity')
);
const ScreenAssessment = lazy(
  () => import('./components/screens/screen-assessment')
);
import CookieBanner from './components/_commons/cookie-banner';
const ScreenGuide = lazy(() => import('./components/screens/screen-guide'));
import { IVmScreen, useVmScreen } from './stores/vm-screen';

declare global {
  interface Window {
    __PE_PRE__?: string;
    __PE_PRE_PATH__?: string;
  }
}

// While a screen's chunk loads, keep showing the prerendered HTML for the page
// the visitor landed on so the content never blinks out.
const PrerenderedFallback = () => {
  const { pathname } = useLocation();
  const html = window.__PE_PRE__;
  if (!html || pathname !== window.__PE_PRE_PATH__) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

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
          <Suspense fallback={<PrerenderedFallback />}>
            <Routes>
              <Route path="/:locale/" element={<ScreenFront />} />
              <Route
                path="/:locale/activity"
                element={<ScreenActivityList />}
              />
              <Route
                path="/:locale/activity/:id"
                element={<ScreenActivity />}
              />
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
          </Suspense>
        </ScrollToTopWrapper>
        <CookieBanner />
      </AppScreen>
    </BrowserRouter>
  );
}

export default App;
