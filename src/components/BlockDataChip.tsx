import {FC, ReactElement } from "react";
import {List} from "../Types/BlockDataRequest";
import TimeAgo from 'react-timeago';
import Link from "next/link";

type Props = {
  item: List
}

const BlockDataChip:FC<Props> = ({item}):ReactElement =>{
  return <div className="px-4 py-2 bg-white border-[1px] border-lightGrey flex items-center justify-between">
              <span className="bg-lightGrey text-backgroundGrey px-2 py-1 rounded-full text-xs">
                {item.status}
              </span>
              <Link href={`/blocks/${item.blockNumber}`}><span className="hover:underline">#{item.blockNumber}</span></Link>
              <span>{item.blockSize}</span>
              <TimeAgo date={item.committedAt} />
          </div>
}

export default BlockDataChip;

//create a basic react component
