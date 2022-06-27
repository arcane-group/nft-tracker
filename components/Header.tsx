import Link from "next/link"

const Header = () => {
  return (
    <div className='flex place-content-between my-16 mx-80'>
      <Link href='/' passHref>
        <h1 className='text-4xl font-extrabold text-transparent bg-clip-text font-bold bg-teal-400 cursor-pointer'>
          NFT Tracker
        </h1>
      </Link>
      <div className='flex place-content-center space-x-8 text-white font-roboto'>
        <Link href='/' passHref>
          <button className='hover:underline hover:underline-offset-4 rounded-lg px-4 py-2 text-xl'>
            <p className='flex items-center'>Dashboard</p>
          </button>
        </Link>
        <Link href='/watchlist' passHref>
          <button className='hover:underline hover:underline-offset-4 rounded-lg px-4 py-2 text-xl'>
            <p className='flex items-center'>Watchlist</p>
          </button>
        </Link>
        <Link href='/bot' passHref>
          <button className='hover:underline hover:underline-offset-4 rounded-lg px-4 py-2 text-xl'>
            Minting Bot
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
