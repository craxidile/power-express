import {useRef, useEffect, PropsWithChildren, useMemo} from 'react';
import { enableBodyScroll, disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import {useVmScreen} from "../../../stores/vm-screen";

export interface LayoutPopupProps {
  visible: boolean;
}

const LayoutPopup = (props: PropsWithChildren<LayoutPopupProps>) => {
  const { visible, children } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const { current: target } = targetRef;
  //   if (!target) return () => clearAllBodyScrollLocks();
  //
  //   // const elem = target as HTMLElement;
  //   if (visible) {
  //     disableBodyScroll(elem);
  //   } else {
  //     enableBodyScroll(elem);
  //   }
  //   return () => clearAllBodyScrollLocks();
  // }, [visible]);

  useEffect(() => {
    document.documentElement.style.overflowY = !visible ? 'auto' : 'hidden';
  }, [visible]);

  const pointerEvents = useMemo(() => {
    return !visible ? 'pointer-events-none translate-x-[100vw] delay-700 ease-in' : 'translate-x-0 delay-300 ease-out';
  }, [visible]);

  return (
    <div ref={targetRef} className={`z-[20] lg:hidden transition-all fixed left-0 top-0 w-screen h-svh ${pointerEvents} bg-black-a50`}>
      {children}
    </div>
  );
};

export default LayoutPopup;
