import { FC, MouseEvent } from "react";

interface IProps {
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "primary" | "secondary";
}

const Button: FC<IProps> = ({
  label = "button",
  onClick,
  className,
  type = "secondary",
}) => {
  // Define Tailwind CSS classes
  const primaryClasses =
    "mx-4 border border-transparent bg-red-500 px-10 py-3 rounded-full hover:bg-transparent hover:border-white transition-all";
  const secondaryClasses =
    "mx-4 border border-white bg-transparent px-10 py-3 rounded-full hover:bg-red-500 hover:border-transparent transition-all";

  // Apply conditional classes based on type prop
  const buttonClasses = type === "primary" ? primaryClasses : secondaryClasses;

  return (
    <button className={`${buttonClasses} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
