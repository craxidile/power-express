import { PropsWithChildren } from 'react';

export interface ProjectDetailRowProps {
  title: string;
  text: string;
  isCta?: boolean;
  isLongText?: boolean;
}

const ProjectDetailRow = (props: PropsWithChildren<ProjectDetailRowProps>) => {
  const { title, text, isCta, isLongText } = props;
  return (
    <div className="flex flex-col justify-start items-start">
      <h6 className="title-pale text-xs uppercase text-title-pale">{title}</h6>
      <p
        className={`line-clamp-2 title-pale text-sm ${!isCta ? '' : 'text-cta-primary'} ${!isLongText ? '' : 'min-h-10'}`}
      >
        {text}
      </p>
    </div>
  );
};

export default ProjectDetailRow;
