import { FC, ReactElement } from "react";


const Banner: FC = (): ReactElement => {
  return <section className="bg-backgroundGrey relative px-8 md:px-[128px]">
    <div className="w-full max-w-[800px] mx-auto flex gap-2 flex-col">
    <h1 className="font-bold text-5xl  text-white">zkSync Era Bloc Explorer</h1>
    <h3 className="font-semibold text-2xl text-white">zkSync Era Block Explorer provides all the information to deep dive into transactions, blocks, contracts, and much more. Deep dive into zkSync Era and explore the network.
</h3>
      </div>

    <div className="w-[90%] absolute rounded-lg p-4 bg-white text-backgroundGrey left-[50%] translate-x-[-50%] shadow-md bottom-[-26px]">
      <div>
        <p className="text-2xl font-semibold">Network Stats</p>
        <p className="">zkSync Era Mainnet is open to everyone.</p>
      </div>
    </div>
  </section>
}

export default Banner;