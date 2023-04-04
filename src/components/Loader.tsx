import React, { FC, ReactElement } from "react";

const Loader: FC = (): ReactElement => {
  return (
    <div className="w-full p-8 flex justify-center items-center">
      <span className="border-4 border-b-transparent animate-spin rounded-full w-[40px] h-[40px]"></span>
    </div>
  );
};

export default Loader;
