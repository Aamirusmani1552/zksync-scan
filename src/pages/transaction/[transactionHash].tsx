import {FC, ReactElement, useState, useEffect} from "react";
import {useRouter} from "next/router";
import {TransactionDetailsResult} from "../../Types/TransactionDetailsResult";
import Header from "../../components/Header";
import axios from "axios";
import TimeAgo from "react-timeago"

const transactionHx:FC = ():ReactElement=>{
  const router = useRouter();
  const {transactionHash} = router.query;
  const [txData,setTxData] = useState<TransactionDetailsResult>();

  async function getTransactionData(){
    axios.get<TransactionDetailsResult>(`https://api.zksync.io/api/v0.2/transactions/${transactionHash}/data`).then(data=>{
      console.log(data)

      if(data.data.result)
        setTxData(data.data);
    }).catch(err=>{
      console.log(err)
    })
  }
  
  useEffect(()=>{
    if(txData) return;
    getTransactionData()
  },[txData])
  
  return <main className="w-full min-h-screen">
    <Header />
    <section className="px-8 md:px-[128px] bg-backgroundGrey text-white py-8">
      {transactionHash &&
      <h1 className="text-xl md:text-3xl font-semibold">Transaction #{transactionHash.slice(0,5) + "..." + transactionHash.slice(-5)}</h1>
      }
    </section>

{/* tx data */}
    <section className="shadow-lg text-backgroundGrey text-sm px-8 md:px-[128px]">
      {txData && 
      <table className='w-full'>
        <tbody>
        <tr className="w-full">
          <td className="text-gray-400 py-4">Transaction Hash</td>
          <td >{transactionHash ? transactionHash : ""}</td>
        </tr>
  
        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">Block Id</td>
          <td>{txData.result.tx.blockIndex}</td>
        </tr>

        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">Block Number</td>
          <td>{txData.result.tx.blockNumber}</td>
        </tr>

        <tr className="w-full py-4">
          <td className="text-gray-400 py-4">CreatedAt</td>
          <td><TimeAgo date={txData.result.tx.createdAt} /></td>
        </tr>

        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">Account Id</td>
          <td>{txData.result.tx.op.accountId}</td>
        </tr>

        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">Amount</td>
          <td>{txData.result.tx.op.amount}</td>
        </tr>
          
        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">Fee</td>
          <td>{txData.result.tx.op.fee}</td>
        </tr>

        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">From</td>
          <td>{txData.result.tx.op.from}</td>
        </tr>

        <tr className=" w-full py-4">
          <td className="text-gray-400 py-4">Status</td>
          <td>{txData.result.tx.op.status}</td>
        </tr>
          </tbody>
      </table>
      }
    </section>
  </main>
}

export default transactionHx;