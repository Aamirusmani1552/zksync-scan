import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import axios from "axios";
import {
  AccountDetailsResult,
  customError,
} from "@/Types/AccountDetailsResult";
import { Result } from "@/Types/AccountDetailsResult";

import {
  AccountTransactions,
  Result as TxResult,
} from "@/Types/AccountTransaction";
import Link from "next/link";
import Loader from "@/components/Loader";
type Props = {};

const AddressDetails = (props: Props) => {
  const router = useRouter();
  const { addressOrId } = router.query;
  const [accountData, setAccountData] = useState<Result>();
  const [accounTx, setAccountTx] = useState<TxResult>();
  console.log(addressOrId);

  useEffect(() => {
    if (!addressOrId) return;
    !accountData &&
      axios
        .get<AccountDetailsResult>(
          `https://api.zksync.io/api/v0.2/accounts/${addressOrId}`
        )
        .then((data) => {
          if (data.data.result) setAccountData(data.data.result);
        })
        .catch((err) => {
          const error = err as customError;
          alert(error.code + ": " + error.message);
          console.log(err);
        });
  }, [addressOrId, accountData]);

  useEffect(() => {
    if (!addressOrId) return;
    getAccounTx("latest");
  }, [addressOrId]);

  async function getAccounTx(from: string) {
    axios
      .get<AccountTransactions>(
        `https://api.zksync.io/api/v0.2/accounts/${addressOrId}/transactions?from=${from}&limit=5&direction=older`
      )
      .then((data) => {
        console.log(data.data.result);
        if (data.data.result) setAccountTx(data.data.result);
      })
      .catch((err) => {
        const error = err as customError;
        alert(error.code + ": " + error.message);
        console.log(err);
      });
  }

  return (
    <main className="w-full min-h-screen">
      <Header />
      <section className="px-8 flex flex-col gap-4 md:px-[128px] py-8 relative bg-backgroundGrey text-white">
        <div>
          <h1 className="text-xl md:text-4xl font-bold">
            Account #
            {addressOrId?.toString().slice(0, 5) +
              "..." +
              addressOrId?.toString().slice(-5)}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full ">
          <table className="bg-white flex-1 text-backgroundGrey rounded-md">
            <tbody>
              <tr>
                <td className="p-4 border-b-[0.5px] text-gray-500">Address</td>
                <td className="text-center">
                  {accountData?.committed.address.slice(0, 5) +
                    "..." +
                    accountData?.committed.address.slice(-5)}
                </td>
              </tr>

              <tr>
                <td className="p-4 border-b-[0.5px] text-gray-500">
                  Account Id
                </td>
                <td className="text-center">
                  {accountData?.committed.accountId}
                </td>
              </tr>

              <tr>
                <td className="p-4 text-gray-500">Account Type</td>
                <td className="text-center">
                  {accountData?.committed.accountType}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="bg-white flex-1 text-backgroundGrey rounded-md">
            <tbody>
              <tr>
                <td className="p-4 border-b-[0.5px] text-gray-500">ETH</td>
                <td className="text-center">
                  {accountData
                    ? (Number(accountData.finalized.balances.ETH!) / 10 ** 18)
                        .toFixed(2)
                        .toString()
                    : "NA"}
                </td>
              </tr>

              <tr>
                <td className="p-4 border-b-[0.5px] text-gray-500">DAI</td>
                <td className="text-center">
                  {accountData
                    ? (Number(accountData.finalized.balances.DAI!) / 10 ** 18)
                        .toFixed(2)
                        .toString()
                    : "NA"}
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b-[0.5px] text-gray-500">MATIC</td>
                <td className="text-center">
                  {accountData
                    ? (Number(accountData.finalized.balances.MATIC!) / 10 ** 18)
                        .toFixed(8)
                        .toString()
                    : "NA"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/*  transactions */}
      <section className="px-8 md:px-[128px] py-8">
        <table className="overflow-hidden border-2 border-lightGrey shadow-lg w-full bg-white flex-1 text-backgroundGrey rounded-lg">
          <tbody>
            <tr className="bg-lightGrey text-center text-xs md:text-sm">
              <td className="p-4">Status</td>
              <td>BatchId</td>
              <td>TxHash</td>
              <td>Block Index</td>
              <td>Block Number</td>
            </tr>
            {accounTx &&
              accounTx.list.map((i, k) => {
                return (
                  <tr key={k} className="text-xs text-center">
                    <td className="p-4">
                      <span className="bg-lightGrey text-backgroundGrey px-2 py-1 rounded-full text-xs">
                        {i.status}
                      </span>
                    </td>
                    <td>{i.batchId ? i.batchId : "NA"}</td>
                    <td className="hover:underline">
                      <Link href={`/transaction/${i.txHash}`}>
                        {i.txHash.slice(0, 4) + "..." + i.txHash.slice(-4)}
                      </Link>
                    </td>
                    <td>{i.blockIndex}</td>
                    <td>{i.blockNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!accounTx && <Loader />}
      </section>
      <div className="px-8 md:px-[128px] flex items-center justify-end pb-8">
        {accounTx && accounTx.pagination && (
          <button
            onClick={() => {
              getAccounTx(accounTx.pagination.from);
            }}
            className="bg-backgroundGrey text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
        )}
      </div>
    </main>
  );
};

export default AddressDetails;
