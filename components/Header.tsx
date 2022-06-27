import Link from "next/link"

const Header = () => {
  return (
    <div className='flex place-content-between my-8'>
      <Link href='/' passHref>
        <h1 className='ml-48 text-4xl font-extrabold text-transparent bg-clip-text font-bold bg-teal-500 cursor-pointer'>
          NFT Tracker
        </h1>
      </Link>
    </div>
  )
}

export default Header
