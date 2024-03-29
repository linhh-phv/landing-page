import React from "react";
import clsx from "clsx";

interface IProps {
  imgSrc: string;
  tag: string;
  title: string;
  description: string;
  orderRight?: boolean;
}

const Step: React.FC<IProps> = ({
  imgSrc,
  tag,
  title,
  description,
  orderRight,
}) => {
  return (
    <div className="flex flex-col justify-evenly items-center py-10 md:flex-row">
      {/* img */}
      <div
        className={clsx("text-center mb-10", {
          "order-1 md:order-2": orderRight,
        })}
      >
        <img src={imgSrc} alt="app screen" />
      </div>
      {/* text */}
      <div
        className={clsx("text-center md:text-left", {
          "order-2 md:order-1": orderRight,
        })}
      >
        {/* tag */}
        <span className="text-red-500 font-semibold">{tag}</span>
        {/* title */}
        <h2 className="text-4xl text-blue-900 font-bold max-w-md leading-relaxed py-5">
          {title}
        </h2>
        {/* desc */}
        <p className="text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Step;
