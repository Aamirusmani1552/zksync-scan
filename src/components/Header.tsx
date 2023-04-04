import { FC, ReactElement, useState } from "react";
import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import {
  Result,
  TransactionDetailsResult,
} from "@/Types/TransactionDetailsResult";
import {
  Result as Result2,
  AccountDetailsResult,
} from "@/Types/AccountDetailsResult";
import { customError } from "@/Types/AccountDetailsResult";
import Link from "next/link";
import { FaFileContract } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: FC = (): ReactElement => {
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<Result | Result2>();

  function searchData() {
    searchText.length <= 42
      ? console.log(`https://api.zksync.io/api/v0.2/accounts/${searchText}`)
      : console.log(
          `https://api.zksync.io/api/v0.2/transactions/${searchText}/data`
        );
    axios
      .get<TransactionDetailsResult | AccountDetailsResult>(
        searchText.length <= 42
          ? `https://api.zksync.io/api/v0.2/accounts/${searchText}`
          : `https://api.zksync.io/api/v0.2/transactions/${searchText}/data`
      )
      .then((data) => {
        console.log(data);
        if (data.data.result) setData(data.data.result);
      })
      .catch((err) => {
        const error = err as customError;
        alert(error.code + ": " + error.message);
        console.log(err);
      });
  }

  return (
    <header className="bg-backgroundGrey px-8 md:px-[128px] py-6 flex items-center text-white ">
      <div className="border-b-[1px] border-lightGrey flex w-full items-center pb-6 h-full relative">
        <div className="w-fit flex items-center h-full">
          <Logo />
        </div>

        <div className="flex-1 flex items-center justify-end">
          <label
            htmlFor="search"
            className="bg-white px-4 py-2 text-md rounded-md w-full h-full max-w-[500px] md:flex hidden"
          >
            <input
              type="text"
              name="search"
              id="search"
              className="bg-white text-backgroundGrey outline-none w-full"
              placeholder="Search for txHash, AccountAddress"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                data && setData(undefined);
              }}
            />

            <button
              className="p-2 bg-backgroundGrey text-white text-3xl rounded-lg"
              onClick={() => {
                if (searchText.length == 0) return;
                searchData();
              }}
            >
              <IoSearch />
            </button>
          </label>
          {data && (
            <Link
              href={
                searchText.length <= 42
                  ? `/account/${searchText}`
                  : `/transaction/${searchText}`
              }
              className="absolute bottom-[-50px] z-20 w-full max-w-[500px]"
            >
              <div className=" flex gap-2 items-center bg-white w-full truncate text-backgroundGrey border-2 px-4 py-4  rounded-lg ">
                <FaFileContract />
                <span>{searchText}</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
