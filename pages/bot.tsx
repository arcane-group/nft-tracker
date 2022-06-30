import type { NextPage } from "next"
import { useEffect } from "react"
import { botData } from "../botData"
import MintData from "../components/MintData"
import { useMoralisWeb3Api } from "react-moralis"

interface apiOptions {
  chain: any
  address: any
}

const Bot: NextPage = () => {
  const Web3Api = useMoralisWeb3Api()
  const fetchSearchNFTs = async () => {
    const options: apiOptions = {
      chain: "eth",
      address: "0xbf92a355c73de74969a75258e02a15a2764d4970",
    }
    const NFTs = await Web3Api.token.getAllTokenIds(options)
    console.log(NFTs)
  }

  useEffect(() => {
    if (Web3Api) {
      fetchSearchNFTs()
    } else {
      console.log("false")
    }
  }, [Web3Api])

  const nftInfo = botData.map((nft) => {
    return (
      <MintData
        key={nft.ID}
        name={nft.Name}
        etherscan={nft.Etherscan}
        opensea={nft.Opensea}
        totalSupply={nft.totalSupply}
      />
    )
  })

  return (
    <div className='flex justify-center text-white font-roboto'>
      <table className='table-auto'>
        <thead className='text-xl'>
          <tr className='border-b py-2 space-x-4'>
            <th className='px-4'>Name</th>
            <th className='px-4'>Total Supply</th>
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
