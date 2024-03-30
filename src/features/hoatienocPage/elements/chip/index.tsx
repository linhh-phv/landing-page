import React, { useState } from "react";
import ItemChip from "./itemChip";
import { IProductType } from "../../model/productTypes";

interface IProps {
  chips: IProductType[];
  value: IProductType | undefined;
  onChange: (chip: IProductType | undefined) => void;
}

const Chip: React.FC<IProps> = ({ chips, value, onChange }) => {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);

  const onCloseBottomSheet = () => {
    setShowBottomSheet(false);
  };

  const onPressChip = (chip: IProductType | undefined) => {
    onCloseBottomSheet();
    onChange(chip);
  };

  return (
    <div className="relative">
      {/* render chip */}
      <div className="flex">
        <div className="flex overflow-x-auto no-scrollbar">
          <ItemChip
            onPress={() => onPressChip(undefined)}
            label="Tất cả"
            disable={!value}
          />
          {chips.map((chip, index) => (
            <ItemChip
              onPress={() => onPressChip(chip)}
              key={index}
              label={chip.name}
              disable={value?.id === chip.id}
            />
          ))}
        </div>

        <div
          className="flex items-center px-2 bg-slate-200 cursor-pointer"
          onClick={() => setShowBottomSheet(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {/* bottomsheet */}
      {showBottomSheet && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-20"
            onClick={onCloseBottomSheet}
          />
          <div className="fixed bottom-0 left-0 right-0 z-20">
            <div className="container mx-auto px-4">
              <div className="p-4 md:p-6 bg-white border border-gray-200 shadow-lg rounded-t-xl md:rounded-t-2xl">
                <div className="flex flex-wrap gap-2 mb-48">
                  {chips.map((chip, index) => (
                    <ItemChip
                      onPress={() => onPressChip(chip)}
                      key={index}
                      label={chip.name}
                      disable={value?.id === chip.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Chip;
