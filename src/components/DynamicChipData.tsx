import {FC, ReactElement} from "react";

const DynamicChipData:FC = ():ReactElement=>{
  return(<tr className="w-full border-b-[1px] border-lightGrey text-xs">
    <td className="text-gray-400 p-4">Amount</td>
    <td className="text-backgroundGrey hidden md:block p-4" >[&nbsp;{[232,343].map((i, k) => {
                    return <span key={k}>{i}&nbsp;</span>
                  })}
                  ]
                </td>
              </tr>
  )
}

export default DynamicChipData;