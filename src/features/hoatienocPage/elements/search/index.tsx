import React, { ChangeEvent } from "react";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchProduct: React.FC<IProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="w-full border-2 border-gray-300 bg-white h-10 md:h-14 px-5 pr-16 rounded-lg text-base focus:outline-none"
      placeholder="Tìm kiếm sản phẩm"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchProduct;
