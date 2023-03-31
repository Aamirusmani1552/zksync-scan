import {FC, ReactElement,useEffect, useState} from "react";
import {useRouter} from 'next/router';
import Header from "../../components/Header";
import axios from "axios";
import {SingleBlockDataResult} from "../../Types/SingleBlockDataResult";

const BlockInfo:FC = ():ReactElement=>{
  const router = useRouter();
  const {blockNumber} = router.query;
  const [blockData, setBlockData] = useState<SigleBlockDataResult>();
  

  async function getBlockData(){
    const response = await axios.get<SingleBlockDataResult>(`https://api.zksync.io/api/v0.2/blocks/${blockNumber}/transactions?from=latest&limit=10&direction=older`);

    if(response.data.result){
      setBlockData(response.data);
    }
  }

  useEffect(()=>{
    getBlockData();
  },[])

  console.log(blockData);
  
  return <main className="w-full min-h-screen">
    <Header />
    <section className="px-8 flex flex-col gap-4 md:px-[128px] py-8 bg-backgroundGrey text-white">
      <div >
        <h1 className="text-xl md:text-4xl font-bold">Block #{blockNumber}</h1>
      </div>

{/*       block Info */}
      <div className="bg-white shadow-md text-backgroundGrey px-4 py-4 rounded-lg text-md md:text-lg flex flex-col ">
        <div className='border-b-[1px] pb-4 flex gap-4'>
          <span className="text-gray-500">Block Size</span>
          <span>32</span>
        </div>
        <div className='border-b-[1px] py-4 flex gap-4'>
          <span className="text-gray-500">Tx Hash</span>
          <span>0xffffffffffffffffffffffffffffffffffffff</span>
        </div>
      </div>

{/*       transactions */}

    </section>
    <section className="px-8 md:px-[128px] py-4 flex flex-col gap-4">
        <h3 className="text-xl md:text-3xl font-semibold text-backgroundGrey">Transactions</h3>
        <table className="border-[1px] w-full rouned-lg ">
            <tr className='text-sm bg-gray-100'>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Block Index</th>
              <th className="px-4 py-2">Block Numbe</th>
              <th className="px-4 py-2">Tx hash</th>
            </tr>

          {blockData&& blockData.result.list.map((i,k)=>{
            return <tr key={k} className="text-xs border-t-[1px] border-b-[1px]">
              <td className="px-4 py-2">
                <span className="bg-lightGrey text-backgroundGrey px-2 py-1 rounded-full text-xs">{i.status}</span>
              </td>
              <td className="px-4 py-2">{i.blockIndex}</td>
              <td className="px-4 py-2">{i.blockNumber}</td>
              <td className="px-4 py-2">{i.txHash}</td>
            </tr>
          })}
        </table>
      
      </section>
  </main>
}

export default BlockInfo;