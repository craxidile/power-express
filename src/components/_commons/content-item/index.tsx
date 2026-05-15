import {PropsWithChildren} from "react";

export interface ContentItemProps {
  title: string;
  text: string;
}

const ContentItem = (props: PropsWithChildren<ContentItemProps>) => {
  const { title, text } = props;
  return (
    <div className="py-8 gap-x-4 flex flex-row justify-start items-start border-t border-t-sep-light">
      <span className="flex-1 flex-shrink-0 block uppercase text-title-pale">{title}</span>
      <span className="flex-1 flex-shrink-0 block text text-base text-title-dark">{text}</span>
    </div>
  );
};

export default ContentItem;
