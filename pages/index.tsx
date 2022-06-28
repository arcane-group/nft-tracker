import type { NextPage } from "next"
import DashboardData from "../components/DashboardData"

const Home: NextPage = () => {
  return (
    <div className='flex justify-center text-white font-roboto'>
      <table className='table-auto'>
        <thead className='text-xl'>
          <tr className='border-b py-2 space-x-4'>
            <th className='px-4'>#</th>
            <th className='px-4'>Collection</th>
            <th className='px-4'>Category</th>
            <th className='px-4'>Floor Price</th>
            <th className='px-4'>24h Volume</th>
          </tr>
        </thead>
        <tbody>
          <DashboardData />
          <DashboardData />
          <DashboardData />
        </tbody>
      </table>
    </div>
  )
}

export default Home
