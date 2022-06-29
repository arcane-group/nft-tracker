import type { NextPage } from "next"
import { botData } from "../botData"
import MintData from "../components/MintData"

const Bot: NextPage = () => {
  const nftInfo = botData.map((nft) => (
    <MintData
      key={nft.ID}
      name={nft.Name}
      etherscan={nft.Etherscan}
      opensea={nft.Opensea}
      twitter={nft.Twitter_Link}
    />
  ))

  return (
    <div className='flex justify-center text-white font-roboto'>
      <table className='table-auto'>
        <thead className='text-xl'>
          <tr className='border-b py-2 space-x-4'>
            <th className='px-4'>Name</th>
            <th className='px-4'>Twitter</th>
            <th className='px-4'>OpenSea</th>
            <th className='px-4'>Etherscan</th>
          </tr>
        </thead>
        <tbody>{nftInfo}</tbody>
      </table>
    </div>
  )
}

export default Bot
