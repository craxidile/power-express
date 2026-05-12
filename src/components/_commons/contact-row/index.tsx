import {PropsWithChildren} from "react";

export interface ContactRowProps {
  icon: string;
  text: string;
  isEmail?: boolean;
  isPhone?: boolean;
}

const ContactRow = (props: PropsWithChildren<ContactRowProps>) => {
  const {icon, text, isEmail, isPhone} = props;
  return (
    <div className="gap-x-5 flex flex-row justify-start items-start">
      <img className="block w-5 h-auto" alt="Icon" src={icon}/>
      {isEmail && <a href={`mailto:${text}`} className="block text-base text-black-a70 underline">{text}</a>}
      {isPhone && <a href={`tel:${text}`} className="block text-base text-black-a70">{text}</a>}
      {!isEmail && !isPhone && <span className="block text-base text-black-a70">{text}</span>}
    </div>
  );
};

export default ContactRow;
