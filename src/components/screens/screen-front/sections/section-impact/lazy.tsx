import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

// The whole Impact section (stats, forest, car park, chart and their code) is a separate chunk.
// It is fetched only when the placeholder is within ~1200px of the viewport, or at once when the
// address is /#impact, so the first load carries none of it. The placeholder keeps id="impact" and
// roughly the final height, so anchor links and the layout below it do not move.
const SectionImpact = lazy(() => import('./index'));

const Placeholder = React.forwardRef<HTMLElement>((_props, ref) => (
  <section
    id="impact"
    ref={ref}
    aria-hidden="true"
    className="min-h-[900px] lg:min-h-[1500px]"
  />
));
Placeholder.displayName = 'ImpactPlaceholder';

const LazySectionImpact = () => {
  const { hash } = useLocation();
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(hash === '#impact');

  useEffect(() => {
    const el = ref.current;
    if (on || !el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { rootMargin: '1200px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [on]);

  if (!on) return <Placeholder ref={ref} />;
  return (
    <Suspense fallback={<Placeholder />}>
      <SectionImpact />
    </Suspense>
  );
};

export default LazySectionImpact;
