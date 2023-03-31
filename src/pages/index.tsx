import Head from 'next/head'
import axios from "axios";
import { useEffect,useState } from "react";
import { Inter } from 'next/font/google'
import Header from "../components/Header";
import Banner from "../components/Banner";
import BlockDataChip from "../components/BlockDataChip";
import {BlockDataRequest} from "../Types/BlockDataRequest";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [blockData, setBlockData] = useState<BlockDataRequest>();

  async function getData(from:string){
        axios.get<BlockDataRequest>(`https://api.zksync.io/api/v0.2/blocks?from=${from}&limit=10&direction=older`).then((data) => {
      console.log(data.data)
      setBlockData(data.data);
    }).catch(err => {
      console.log(err);
    })
  }
  
  useEffect(() => {
    getData("latest");
  }, [])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={inter.className + 'w-screen min-h-screen'}>
        <Header />
        <Banner />
        <div className="w-full px-8 md:px-[128px] py-10 pt-[100px] md:pt-16 text-xs flex flex-col">
          <h1 className="text-xl font-semibold py-4">Latest Blocks</h1>

          <div className="flex px-6 items-center justify-between bg-lightGrey py-4 rounded-tl-lg text-sm rounded-tr-lg">
            <span>Status</span>
            <span>Block</span>
            <span>Size</span>
            <span>Age</span>
          </div>
          {
            blockData && 
            blockData.result.list.map((i,k)=>{
              return <BlockDataChip key={k} item={i} />
            })
          }
        </div>

        <div className="px-8 md:px-[128px] flex items-center justify-end pb-8">
          <button
            onClick={()=>{
              getData((blockData.result.pagination.from - 10).toString());
            }}
            className="bg-backgroundGrey text-white px-4 py-2 rounded-md">Previous</button>
        </div>
      </main>
    </>
  )
}
