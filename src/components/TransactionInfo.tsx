import { Tx, Enum } from "@/Types/TransactionDetailsResult";
import React, { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import BlockInfoChip from "./BlockInfoChip";

type Props = {
  data: Tx;
  op: Enum
};

const TransactionInfo: FC<Props> = ({ data }): ReactElement => {
  const { op, ...txData } = data;
  const { fee, submitterAddress, type, feeToken, submitterId ,signature:{pubkey,signature}} = op;

  const additionalData = { fee, submitterAddress, type, feeToken, submitterId }

  const [txBasicInfo, setTxBasicInfo] = useState<ReactNode[]>();

  useEffect(() => {
    if (!txData && txBasicInfo) return;

    const keys = Object.keys({ ...txData, ...additionalData });
    const values = Object.values({ ...txData, ...additionalData });
    const jsx = [];

    for (let i = 0; i < keys.length; i++) {
      jsx.push(<BlockInfoChip info={values[i]} property={keys[i]} key={i} />);
    }
    setTxBasicInfo(jsx);
  }, []);

  return <>{txBasicInfo && txBasicInfo.map((item) => item)}</>;
};

export default TransactionInfo;
