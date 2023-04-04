import { Enum } from "@/Types/TransactionDetailsResult";
import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import BlockInfoChip from "./BlockInfoChip";
import DynamicChip from "./DynamicChip";

type props = {
  op: Enum;
};

const DynamicChipData: FC<props> = ({ op }): ReactElement => {
  const [data, setData] = useState<ReactNode[]>();
  const [ordersData, setOrdersData] = useState<ReactNode[]>();

  useEffect(() => {
    const { orders, signature, ...restData } = op;
    const keys = Object.keys(restData);
    const values: Array<string | number | string[] | number[]> =
      Object.values(restData);
    const jsx: ReactNode[] = [];

    values.forEach((v, i) => {
      if (typeof v == "string" || typeof v == "number") {
        jsx.push(<BlockInfoChip info={v} property={keys[i]} key={i} />);
      } else if (typeof values[i] == "object") {
        jsx.push(<DynamicChip key={i} itemKey={keys[i]} value={v} />);
      }
    });

    setData(jsx);
  }, []);

  useEffect(() => {
    const { orders, signature, ...restData } = op;
    const jsx: ReactNode[] = [];

    orders &&
      orders.forEach((order, i) => {
        const { signature, ...other } = order;
        const keys = Object.keys(other);
        const values: Array<string | number | string[] | number[]> =
          Object.values(other);

        values.forEach((v, i) => {
          console.log(keys[i], v, "is the data");
          if (typeof v == "string" || typeof v == "number") {
            jsx.push(
              <BlockInfoChip
                info={v}
                property={keys[i]}
                key={i + (Math.random() * 50).toString()}
              />
            );
          } else if (typeof values[i] == "object") {
            jsx.push(
              <DynamicChip
                key={i + (Math.random() * 100).toString()}
                itemKey={keys[i]}
                value={v}
              />
            );
          }
        });

        if (i != orders.length - 1)
          jsx.push(
            <tr
              key={Math.random() * 1000}
              className="border-b-[5px] border-t-[5px] border-lightGrey"
            ></tr>
          );
      });
    setOrdersData(jsx);
  }, []);

  return (
    <>
      {data && data.map((i) => i)}
      <tr>
        <h3 className="text-3xl  px-4 font-semibold text-backgroundGrey py-4">
          Orders
        </h3>
      </tr>
      {ordersData && ordersData.map((i) => i)}
    </>
  );
};

export default DynamicChipData;
