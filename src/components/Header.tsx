import { FC, ReactElement } from "react";
import Logo from "./Logo";

const Header: FC = (): ReactElement => {
  return (
    <header className="bg-backgroundGrey px-8 md:px-[128px] pt-6 flex items-center text-white ">
      <div className="border-b-[1px] border-lightGrey w-full pb-6">
        <Logo />
      </div>
    </header>
  );
};
export default Header;
