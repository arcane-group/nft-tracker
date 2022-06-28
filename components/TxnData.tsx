import { shortenAddress } from "../helpers"

const TxnData = () => {
  return (
    <tr className='border-b border-dotted'>
      <td className='pr-8 py-2'>0x6975be450864c02b4613023c2152ee0743572325</td>
      <td className='pr-8 py-2'>0xc7af99fe5513eb6710e6d5f44f9989da40f27f26</td>
      <td className='pr-8 py-2'>CryptoKitties</td>
      <td className='pr-8 py-2'>110</td>
      <td className='pr-8 py-2'>
        <a
          href='https://etherscan.io/tx/0xba589935866674e3a7fedabd52c043a497dcf00d40f68192ddf83ae93dc1b8d7'
          target='_blank'
          rel='noreferrer'
        >
          Etherscan Hash
        </a>
      </td>
    </tr>
  )
}

export default TxnData
