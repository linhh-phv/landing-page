import clsx from "clsx";
interface IProps {
  label: string;
  disable: boolean;
  onPress: () => void;
}

const ItemChip: React.FC<IProps> = ({ label, disable, onPress }) => {
  return (
    <div onClick={onPress} className="flex-none cursor-pointer">
      <div
        className={clsx(
          "bg-neutral-100 rounded-full px-3 py-1 text-sm font-semibold text-neutral-700 mr-2",
          { "bg-red-500 text-white": disable },
          { "hover:text-red-500": !disable }
        )}
      >
        {label}
      </div>
    </div>
  );
};

export default ItemChip;
