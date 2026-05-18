import {PropsWithChildren} from "react";

export interface TextLinesProps {
  text: string;
}

const TextLines = (props: PropsWithChildren<TextLinesProps>) => {
  const {text} = props;
  return (
    <>
      {text.split('\n').map((line, index, lines) => {
        return <>{line}{index !== lines.length - 1 && <br/>}</>;
      })}
    </>
  );
};

export default TextLines;
