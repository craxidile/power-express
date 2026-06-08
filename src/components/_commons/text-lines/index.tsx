import { Fragment, PropsWithChildren } from 'react';

export interface TextLinesProps {
  text: string;
}

const TextLines = (props: PropsWithChildren<TextLinesProps>) => {
  const { text } = props;
  return (
    <div dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br/>') }} />
  );
};

export default TextLines;
