import { shortenAddress } from "../helpers"
import { ExternalLinkIcon } from "@heroicons/react/outline"

interface TxnProps {
  from: string
  to: string
  tokenName: string
  contractAddress: string
  txHash: string
}

const TxnData = (txn: TxnProps) => {
  return (
    <tr className='border-b border-dotted'>
      <td className='pr-8 py-2'>{txn.from}</td>
      <td className='pr-8 py-2'>{txn.contractAddress}</td>
      <td className='pr-8 py-2'>{txn.to}</td>
      <td className='pr-8 py-2'>{txn.tokenName}</td>

      <td className='pr-8 py-2'>
        <a
          href={"https://etherscan.io/tx/" + txn.txHash}
          target='_blank'
          rel='noreferrer'
        >
          <ExternalLinkIcon className='h-5 w-5 text-white' />
        </a>
      </td>
    </tr>
  )
}

export default TxnData
