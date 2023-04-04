import React, { FC, ReactElement } from "react";

type Props = {
  itemKey: string;
  value: string[] | number[];
};

const DynamicChip: FC<Props> = ({ itemKey, value }): ReactElement => {
  return (
    <tr className="w-full border-b-[1px] border-lightGrey text-xs md:text-sm truncate">
      <td className="text-gray-400 p-4">{itemKey}</td>
      <td className="text-backgroundGrey hidden md:block p-4">
        [
        {value.map((item, iKey) => {
          return (
            <span className="text-blue-700 " key={iKey}>
              &nbsp;{item}
            </span>
          );
        })}
        &nbsp;]
      </td>
    </tr>
  );
};

export default DynamicChip;
