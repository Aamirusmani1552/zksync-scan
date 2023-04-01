import React, { FC, ReactElement } from "react";
import TimeAgo from "react-timeago";

type Props = {
  property: string;
  info: string | number | undefined;
};

const BlockInfoChip: FC<Props> = ({ info, property }): ReactElement => {
  console.log(property, "is the info");
  return (
    <tr className=" gap-4 w-full border-b-[1px] border-lightGrey text-xs">
      <td className="text-gray-400 p-4">{property}</td>
      <td className="text-backgroundGrey hidden md:block p-4">
        {property == "committedAt" ||
        property == "finalizedAt" ||
        property == "createdAt" ? (
          <TimeAgo date={info ? info : ""} />
        ) : !info ? (
          "NA"
        ) : (
          info
        )}
      </td>

      <td className="text-backgroundGrey block md:hidden p-4">
        {property == "committedAt" ||
        property == "finalizedAt" ||
        property == "createdAt" ? (
          <TimeAgo date={info ? info : ""} />
        ) : property == "newStateRoot" ||
          property == "commitTxHash" ||
          property == "verifyTxHash" ? (
          info?.toString().slice(0, 5) + "..." + info?.toString().slice(-5)
        ) : !info ? (
          "NA"
        ) : (
          info
        )}
      </td>
    </tr>
  );
};

export default BlockInfoChip;
