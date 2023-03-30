import { FC, ReactElement,useEffect,useState  } from "react";
import axios from 'axios';
import {NetworkDataResult} from "../NetworkDataResult"

const Banner: FC = (): ReactElement => {
  const [networkData, setNetworkData] = useState<NetworkDataResult>();
  async function getNetworkStatus (){
      axios.get(`https://api.zksync.io/api/v0.2/networkStatus`).then(data=>{
      console.log(data);
        setNetworkData(data.data as NetworkDataResult);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getNetworkStatus();
  },[])
  
  return <section className="bg-backgroundGrey relative px-8 md:px-[128px]">
    <div className="w-full flex pb-8 gap-2 pt-6 flex-col">
      <h1 className="font-semibold text-3xl  text-white">zkSync Era Bloc Explorer</h1>
      <h3 className="font-semibold text-xl pb-12 text-white">zkSync Era Block Explorer provides all the information to deep dive into transactions, blocks, contracts, and much more. Deep dive into zkSync Era and explore the network.
      </h3>
    </div>

    <div className="w-full max-w-[85%] absolute rounded-lg p-6 bg-white text-backgroundGrey left-[50%] translate-x-[-50%] shadow-md bottom-[-100px] md:bottom-[-60px] gap-4 justify-between flex flex-col md:flex-row">
{/*    title    */}
      <div>
        <p className="text-2xl font-semibold">Network Stats</p>
        <p className="text-sm">zkSync Era Mainnet is open to everyone.</p>
      </div>
{/*    data    */}
{networkData && 
      <div className="flex gap-3">
      <div className="border-r-[1px] pr-8">
        <h3 className="text-lg md:text-xl md:text-2xl text-gray-500">Committed Blocks</h3>
        <p className="text-xl md:text-2xl font-semibold">{networkData.result.lastCommitted}</p>
      </div>
      <div className="border-r-[1px] pr-8" >
        <h3 className="text-lg md:text-xl md:text-2xl text-gray-500">Finalized</h3>
        <p className="text-xl md:text-2xl font-semibold">{networkData.result.finalized}</p>
      </div>
      <div >
        <h3 className="text-lg md:text-xl md:text-2xl text-gray-500">Transactions</h3>
        <p className="text-xl md:text-2xl font-semibold">{networkData.result.totalTransactions}</p>
      </div>
        </div>
}
    </div>
  </section>
}

export default Banner;