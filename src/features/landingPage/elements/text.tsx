import clsx from "clsx";

interface IProps {
  type: "title" | "des";
  label: string;
  className?: string;
}

const Text: React.FC<IProps> = ({ type, label, className }) => {
  switch (type) {
    case "title":
      return (
        <h1
          className={clsx(
            "text-4xl mb-5 font-bold max-w-2xl md:leading-relaxed md:text-5xl",
            className
          )}
        >
          {label}
        </h1>
      );
    case "des":
      return <p className={clsx("text-xl mb-5", className)}>{label}</p>;
    default:
      return <p className={clsx("", className)}>{label}</p>;
  }
};

export default Text;
