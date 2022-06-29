interface MintProps {
  name: string
  twitter: string | boolean
  opensea: string
  etherscan: string
}

const MintData = (nft: MintProps) => {
  return (
    <tr className='border-b border-dotted'>
      <td className='pr-8 py-2'>{nft.name}</td>
      <td className='pr-8 py-2'>{nft.twitter}</td>
      <td className='pr-8 py-2'>{nft.opensea}</td>
      <td className='pr-8 py-2'>{nft.etherscan}H</td>
    </tr>
  )
}

export default MintData
