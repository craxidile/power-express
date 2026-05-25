import { PropsWithChildren, useMemo } from 'react';

export enum ActivityTagSize {
  normal = 'normal',
  small = 'small',
}

export interface ActivityTagProps {
  tag: string;
  size?: ActivityTagSize;
}

const ActivityTag = (props: PropsWithChildren<ActivityTagProps>) => {
  const { tag, size } = props;
  const fontSize = useMemo(() => {
    switch (size) {
      case ActivityTagSize.small:
        return 'text-xs';
      case ActivityTagSize.normal:
      default:
        return 'text-xs lg:text-sm';
    }
  }, [size]);

  return (
    <div
      className={`py-1 px-3 ${tag === 'News' ? 'bg-green-tag' : 'bg-cta-primary'}`}
    >
      <span className={`block text-white uppercase ${fontSize}`}>{tag}</span>
    </div>
  );
};

export default ActivityTag;
