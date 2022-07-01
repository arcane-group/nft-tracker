import type { NextPage } from "next"
import { useEffect, useState } from "react"
import TxnData from "../components/TxnData"
import { validateAddress } from "../helpers"

interface TxnData {
  blockHash: string
  blockNumber: string
  confirmations: string
  contractAddress: string
  cumulativeGasUsed: string
  from: string
  gas: string
  gasPrice: string
  gasUsed: string
  hash: string
  input: string
  nonce: string
  timeStamp: string
  to: string
  tokenDecimal: string
  tokenID: string
  tokenName: string
  tokenSymbol: string
  transactionIndex: string
}

const Watchlist: NextPage = () => {
  const [searchAddress, setSearchAddress] = useState<any>()
  const [txnData, setTxnData] = useState<TxnData[]>([])
  const [filteredData, setFilteredData] = useState<TxnData[]>([])

  const submitQuery = async () => {
    if (validateAddress(searchAddress)) {
      const response = await fetch(
        `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${searchAddress}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY}`
      )
      const res = await response.json()
      console.log("res:", res)
      if (res.status !== "1") {
        console.log("api call rate exceeded")
        // alert("api call rate exceeded")

        submitBackupQuery()
      } else {
        const data = res.result
        setTxnData(data)
        const filtered = data.filter(
          (txn: any) =>
            txn.from === "0x0000000000000000000000000000000000000000"
        )
        setFilteredData(filtered)
      }
    } else {
      alert("please enter a valid address")
    }
  }

  const submitBackupQuery = async () => {
    const response = await fetch(
      `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${searchAddress}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${process.env.ETHERSCAN_API_KEY2}`
    )
    const res = await response.json()
    console.log("backup query res:", res)
    if (res.status !== "1") {
      alert("api call rate exceeded")
    } else {
      const data = res.result
      setTxnData(data)
      const filtered = data.filter(
        (txn: any) => txn.from === "0x0000000000000000000000000000000000000000"
      )
      setFilteredData(filtered)
    }
  }

  const handleInputChange = (e: any) => {
    setSearchAddress(e.target.value)
  }

  const displayTxns = filteredData.map((txn) => {
    return (
      <TxnData
        key={txn.hash}
        from={txn.from}
        to={txn.to}
        tokenName={txn.tokenName}
        contractAddress={txn.contractAddress}
        txHash={txn.hash}
      />
    )
  })

  return (
    <div className='flex justify-center text-white font-roboto'>
      <div>
        <div className='mb-10'>
          <h1 className='py-3 text-center inline'>Enter Query Address:</h1>
          <input
            type='text'
            onChange={handleInputChange}
            value={searchAddress}
            className='bg-black mx-2 w-1/3 border border-slate-200 rounded px-2 py-1'
          />
          <button
            className='border border-white px-2 py-1'
            onClick={submitQuery}
          >
            Search
          </button>
        </div>
        <div>
          <table className='table-auto'>
            <thead className='text-xl'>
              <tr className='border-b py-2 space-x-4'>
                <th className='px-4'>Contract Address</th>
                <th className='px-4'>To</th>
                <th className='px-4'>Token Name</th>
                <th className='px-4'>Txn Hash</th>
              </tr>
            </thead>
            <tbody>{filteredData && displayTxns}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Watchlist
