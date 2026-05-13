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
    <div className="gap-x-3 lg:gap-x-5 flex flex-row justify-start items-start text-sm lg:text-base text-black-a70">
      <img className="block w-5 h-auto" alt="Icon" src={icon}/>
      {isEmail && <a href={`mailto:${text}`} className="block underline">{text}</a>}
      {isPhone && <a href={`tel:${text}`} className="block">{text}</a>}
      {!isEmail && !isPhone && <span className="block">{text}</span>}
    </div>
  );
};

export default ContactRow;
