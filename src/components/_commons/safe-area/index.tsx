import {PropsWithChildren} from 'react';

const SafeArea = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="relative mx-auto w-full max-w-[1648px] px-6 flex-1">
      {children}
    </div>
  );
};

export default SafeArea;
