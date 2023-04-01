import { Tx } from "@/Types/TransactionDetailsResult";
import { info } from "console";
import React, { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import BlockInfoChip from "./BlockInfoChip";

type Props = {
  data: Tx;
};

const TransactionInfo: FC<Props> = ({ data }): ReactElement => {
  const { op, ...txData } = data;
  const [txBasicInfo, setTxBasicInfo] = useState<ReactNode[]>();

  useEffect(() => {
    if (!txData && txBasicInfo) return;

    const keys = Object.keys(txData);
    const values = Object.values(txData);
    const jsx = [];

    for (let i = 0; i < keys.length; i++) {
      jsx.push(<BlockInfoChip info={values[i]} property={keys[i]} key={i} />);
    }
    console.log(jsx);
    setTxBasicInfo(jsx);
  }, []);

  return <>{txBasicInfo && txBasicInfo.map((item) => item)}</>;
};

export default TransactionInfo;
