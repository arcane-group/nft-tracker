import type { NextPage } from "next"
import { useEffect, useState } from "react"
import TxnData from "../components/TxnData"

const Watchlist: NextPage = () => {
  const [userAddress, setUserAddress] = useState<string>(
    "0x6975be450864c02b4613023c2152ee0743572325"
  )
  const fetchData = async () => {
    const response = await fetch(
      `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${userAddress}&page=1&offset=110&startblock=0&endblock=27025780&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`
    )
    const res = await response.json()
    console.log("res:", res)
  }

  const handleInputChange = (e: any) => {
    console.log("event:", e.target.value)
  }

  const checkAddressValidity = () => {}

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div className='flex justify-center text-white font-roboto'>
      <div>
        <h1 className='py-3 text-center'>
          Address:
          <input
            type='text'
            onChange={handleInputChange}
            value={userAddress}
            className='bg-black ml-2 w-1/3 border border-slate-200 rounded px-2 py-1'
          />
        </h1>
        <div>
          <table className='table-auto'>
            <thead className='text-xl'>
              <tr className='border-b py-2 space-x-4'>
                <th className='px-4'>From</th>
                <th className='px-4'>To</th>
                <th className='px-4'>Token Name</th>
                <th className='px-4'>Token ID</th>
                <th className='px-4'>Transaction Hash</th>
              </tr>
            </thead>
            <tbody>
              <TxnData />
              <TxnData />
              <TxnData />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Watchlist
