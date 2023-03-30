import { FC, ReactElement } from "react";
import Logo from "./Logo";

const Header: FC = (): ReactElement => {
  return <header className="bg-backgroundGrey px-8 md:px-[128px] py-4 flex items-center text-white">
    <div>
      <Logo />
    </div>
  </header>
}

export default Header;