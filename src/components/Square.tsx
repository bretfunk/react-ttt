import React from "react";

type Props = {
  value: string;
  onClick: () => any;
};

export const Square: React.FC<Props> = props => {
  return (
    <div
      className="w-1/3 bg-gray-400 text-gray-800 border-black text-6xl m-5 border-2 border-gray-500"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};
