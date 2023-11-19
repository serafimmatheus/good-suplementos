import { twMerge } from "tailwind-merge";

interface TextTitleBaseProps {
  children: React.ReactNode;
  className?: string;
}

const TextTitleBase = ({ children, className }: TextTitleBaseProps) => {
  const merge = twMerge("text-base font-bold mb-4 px-5 ", className);
  return <h2 className={merge}>{children}</h2>;
};

export default TextTitleBase;
