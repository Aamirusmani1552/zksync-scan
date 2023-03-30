import {FC, ReactElement } from "react";

const BlockDataChip:FC = ():ReactElement =>{
  return <div className="px-4 py-2 bg-white border-2 border-lightGrey flex items-center justify-between rounded-md">
              <span className="bg-lightGrey text-backgroundGrey px-2 py-1 rounded-full text-xs">
                committed
              </span>
              <span>#234324309</span>
              <span>32</span>
              <span>2 hours ago</span>
          </div>
}

export default BlockDataChip;

//create a basic react component
