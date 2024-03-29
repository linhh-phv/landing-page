import clsx from "clsx";

interface IProps {
  type?: "title" | "des" | "nor";
  label: string;
  className?: string;
}

const Text: React.FC<IProps> = ({ type = "nor", label, className }) => {
  switch (type) {
    case "title":
      return (
        <h1
          className={clsx(
            "text-3xl font-bold max-w-2xl md:leading-relaxed md:text-4xl",
            className
          )}
        >
          {label}
        </h1>
      );
    case "des":
      return <p className={clsx("text-xl", className)}>{label}</p>;
    default:
      return <p className={clsx("", className)}>{label}</p>;
  }
};

export default Text;
