import {FC, ReactElement} from "react";
import {useRouter} from 'next/router';

const BlockInfo:FC = ():ReactElement=>{
  const router = useRouter();

  const {blockNumber} = router.query;
  console.log(blockNumber);
  return <div>hello </div>
}

export default BlockInfo;