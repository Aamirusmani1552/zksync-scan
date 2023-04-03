import { FC, ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  TransactionDetailsResult,
  Result,
} from "../../Types/TransactionDetailsResult";
import Header from "../../components/Header";
import axios from "axios";
import TransactionInfo from "@/components/TransactionInfo";
import DynamicChipData from "@/components/DynamicChipData";

const TransactionHx: FC = (): ReactElement => {
  const router = useRouter();
  const { transactionHash } = router.query;
  const [txData, setTxData] = useState<Result>();

  async function getTransactionData() {
    axios
      .get<TransactionDetailsResult>(
        `https://api.zksync.io/api/v0.2/transactions/${transactionHash}/data`
      )
      .then((data) => {
        console.log(data);
        if (data.data.result) setTxData(data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (!transactionHash) return;
    getTransactionData();
  }, [transactionHash]);

  return (
    <main className="w-full min-h-screen">
      <Header />
      <section className="px-8 md:px-[128px] bg-backgroundGrey text-white py-8">
        {transactionHash && (
          <h1 className="text-xl md:text-3xl font-semibold">
            Transaction #
            {transactionHash.slice(0, 5) + "..." + transactionHash.slice(-5)}
          </h1>
        )}
      </section>

      {/* tx data */}
      <section className="shadow-lg text-backgroundGrey text-sm px-8 md:px-[128px]">
        {txData && (
          <table className="w-full">
            <tbody>
              <TransactionInfo data={txData.tx} />

              <DynamicChipData op={txData.tx.op} />
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
};

export default TransactionHx;
