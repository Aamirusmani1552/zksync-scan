import { Enum } from "@/Types/TransactionDetailsResult";
import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import BlockInfoChip from "./BlockInfoChip";

type props = {
  op: Enum;
};

const DynamicChipData: FC<props> = ({ op }): ReactElement => {
  const [data, setData] = useState<ReactNode[]>();

  useEffect(() => {
    const { orders, signature, ...restData } = op;
    const keys = Object.keys(restData);
    const values: Array<string | number | string[] | number[]> =
      Object.values(restData);
    const jsx: ReactNode[] = [];

    console.log(keys, values);

    values.forEach((v, i) => {
      if (typeof v == "string" || typeof v == "number") {
        jsx.push(<BlockInfoChip info={v} property={keys[i]} key={i} />);
      } else if (typeof values[i] == "object") {
        jsx.push(
          <tr
            className="w-full border-b-[1px] border-lightGrey text-xs"
            key={i}
          >
            <td className="text-gray-400 p-4">{keys[i]}</td>
            <td className="text-backgroundGrey hidden md:block p-4">
              [
              {v.map((item, iKey) => {
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
      }
    });

    setData(jsx);
  }, []);

  return <>{data && data.map((i) => i)}</>;
};

export default DynamicChipData;
