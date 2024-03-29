import clsx from "clsx";

interface IProps {
  label?: string;
  color?: string;
  borderColor?: string;
  hoverColor?: string;
  hoverBorderColor?: string;
  className?: string;
}

const Button: React.FC<IProps> = ({
  label = "Button",
  color = "red-500",
  borderColor = "transparent",
  hoverColor = "transparent",
  hoverBorderColor = "white",
  className,
}) => {
  return (
    <button
      className={clsx(
        `
            mx-4
            border
            px-10
            py-3
            rounded-full
            transition-all
            bg-${color}
            border-${borderColor}
            hover:bg-${hoverColor}
            hover:border-${hoverBorderColor}
          `,
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
