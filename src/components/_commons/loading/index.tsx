import { p } from '../../../utils/path-utils';

const Loading = () => {
  return (
    <div className="p-8 flex-1 flex flex-col justify-center items-center">
      <img className="h-16" alt="Loading" src={p('mock/loading-bounce.svg')} />
    </div>
  );
};

export default Loading;
