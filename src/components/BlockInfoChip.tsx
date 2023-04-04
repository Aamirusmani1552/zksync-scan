import React, { FC, ReactElement } from "react";
import TimeAgo from "react-timeago";
import Link from "next/link";

type Props = {
  property: string;
  info: string | number | undefined;
};

enum DateTypes {
  committedAt = "committedAt",
  finalizedAt = "finalizedAt",
  createdAt = "createdAt",
  validUntil = "validUntil",
  validFrom = "validFrom",
}

enum HashTypes {
  newStateRoot = "newStateRoot",
  commitTxHash = "commitTxHash",
  verifyTxHash = "verifyTxHash",
  submitterAddress = "submitterAddress",
  txHash = "txHash",
  recipient = "recipient",
}

const BlockInfoChip: FC<Props> = ({ info, property }): ReactElement => {
  console.log(info?.toString().length);

  return (
    <tr className=" gap-4 w-full border-b-[1px] border-lightGrey text-xs md:text-sm">
      <td className="text-gray-500 p-4">{property}</td>
      <td className="text-backgroundGrey hidden md:block p-4">
        {Object.values(DateTypes).includes(property as DateTypes) ? (
          info ? (
            <TimeAgo date={info ? info : ""} />
          ) : (
            <span>NA</span>
          )
        ) : Object.values(HashTypes).includes(property as HashTypes) ? (
          <Link
            href={
              info
                ? info.toString().length <= 42
                  ? `/account/${info}`
                  : `/transaction/${info}`
                : "#"
            }
          >
            {info && (
              <>
                <span className="cursor-pointer hover:underline hidden md:block">
                  {info}
                </span>
                <span className="cursor-pointer hover:underline md:hidden block">
                  {
                    (info?.toString().slice(0, 4),
                    "..." + info?.toString().slice(-5))
                  }
                </span>
              </>
            )}
          </Link>
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
          property == "verifyTxHash" ||
          property == "submitterAddress" ||
          property == "txHash" ||
          property == "recipient" ? (
          <Link
            href={
              info
                ? info.toString().length <= 42
                  ? `/account/${info}`
                  : "#"
                : "#"
            }
          >
            <span className="cursor-pointer">
              {info?.toString().slice(0, 5) +
                "..." +
                info?.toString().slice(-5)}
            </span>
          </Link>
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
