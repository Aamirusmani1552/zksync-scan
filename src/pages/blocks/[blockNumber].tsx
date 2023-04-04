import { FC, ReactElement, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import axios from "axios";
import {
  SingleBlockDataResult,
  Result,
} from "../../Types/SingleBlockDataResult";
import Link from "next/link";
import {
  BlockInfoResult,
  Result as Result2,
} from "../../Types/BlockInfoResult";
import BlockInfoChip from "@/components/BlockInfoChip";
import Loader from "@/components/Loader";
import { customError } from "@/Types/AccountDetailsResult";

const BlockInfo: FC = (): ReactElement => {
  const router = useRouter();
  const { blockNumber } = router.query;
  const [blockData, setBlockData] = useState<Result>();
  const [blockInfo, setBlockInfo] = useState<Result2>();
  const [blockInfoJsx, setBlockInfoJsx] = useState<ReactNode[]>();

  async function getBlockData(page: string) {
    axios
      .get<SingleBlockDataResult>(
        `https://api.zksync.io/api/v0.2/blocks/${blockNumber}/transactions?from=${page}&limit=10&direction=older`
      )
      .then((data) => {
        if (data.data.result) {
          setBlockData(data.data.result);
        }
      })
      .catch((err) => {
        const error = err as customError;
        alert(error.code + ": " + error.message);
        console.log(err);
      });

    axios
      .get<BlockInfoResult>(
        `https://api.zksync.io/api/v0.2/blocks/${blockNumber}`
      )
      .then((data) => {
        if (data.data.result) {
          setBlockInfo(data.data.result);
        }
      })
      .catch((err) => {
        const error = err as customError;
        alert(error.code + ": " + error.message);
        console.log(err);
      });
  }

  useEffect(() => {
    if (!blockNumber) return;
    getBlockData("latest");
  }, [blockNumber]);

  useEffect(() => {
    if (!blockInfo) return;
    let blockInfoJsx = [];
    const keys = Object.keys(blockInfo);
    const values = Object.values(blockInfo);
    for (let i = 0; i < keys.length; i++) {
      blockInfoJsx.push(
        <BlockInfoChip info={values[i]} property={keys[i]} key={i} />
      );
    }
    setBlockInfoJsx(blockInfoJsx);
  }, [blockInfo]);

  return (
    <main className="w-full min-h-screen">
      <Header />
      <section className="px-8 flex flex-col gap-4 md:px-[128px] py-8 bg-backgroundGrey text-white">
        <div>
          <h1 className="text-xl md:text-4xl font-bold">
            Block #{blockNumber}
          </h1>
        </div>

        {/*       block Info */}
        <table className="bg-white shadow-md w-full rounded-xl overflow-hidden text-backgroundGrey">
          <tbody className="w-full">
            {blockInfo && blockInfoJsx && blockInfoJsx.map((item, key) => item)}
          </tbody>
        </table>

        {/*       transactions */}
      </section>
      <section className="px-8 md:px-[128px] py-4 flex flex-col gap-4">
        <h3 className="text-xl md:text-3xl font-semibold text-backgroundGrey">
          Transactions
        </h3>
        <table className="border-[1px] text-center w-full rouned-lg ">
          <tbody>
            <tr className="text-sm bg-gray-100">
              <th className="p-4">Status</th>
              <th className="p-4">Block Index</th>
              <th className="p-4">Block Number</th>
              <th className="p-4">Tx hash</th>
            </tr>

            {blockData &&
              blockData.list.map((i, k) => {
                return (
                  <tr key={k} className="text-xs border-t-[1px] border-b-[1px]">
                    <td className=":p-4">
                      <span className="bg-lightGrey text-backgroundGrey px-2 py-1 rounded-full text-xs">
                        {i.status}
                      </span>
                    </td>
                    <td className="p-4">{i.blockIndex}</td>
                    <td className="p-4">{i.blockNumber}</td>
                    <td className="p-4 underline cursor-pointer">
                      <Link href={`/transaction/${i.txHash}`}>
                        {i.txHash.slice(1, 4) + "..." + i.txHash.slice(-5)}
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!blockData && <Loader />}

        <div className="flex items-center justify-end py-8">
          <button
            className="bg-backgroundGrey text-white px-4 py-2 rounded-md "
            onClick={() => {
              if (blockData && blockData.pagination.count > 10) {
                getBlockData(blockData.list[blockData.list.length - 1].txHash);
              }
            }}
          >
            Previous
          </button>
        </div>
      </section>
    </main>
  );
};

export default BlockInfo;
