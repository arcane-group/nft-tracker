import { ExternalLinkIcon } from "@heroicons/react/outline"

interface MintProps {
  name: string
  totalSupply: any
  opensea: string
  etherscan: string
}

const MintData = (nft: MintProps) => {
  return (
    <tr className='border-b border-dotted'>
      <td className='pr-8 py-2'>{nft.name}</td>
      <td className='pr-8 py-2'>{nft.totalSupply}</td>
      <td className='pr-8 py-2'>
        {!nft.opensea ? (
          "-"
        ) : (
          <a href={nft.opensea} target='_blank' rel='noreferrer'>
            <ExternalLinkIcon className='h-5 w-5 text-white' />
          </a>
        )}
      </td>
      <td className='pr-8 py-2'>
        {!nft.etherscan ? (
          "-"
        ) : (
          <a href={nft.etherscan} target='_blank' rel='noreferrer'>
            <ExternalLinkIcon className='h-5 w-5 text-white' />
          </a>
        )}
      </td>
    </tr>
  )
}

export default MintData
