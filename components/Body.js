import Image from 'next/image'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid'

const Body = () => {
  return (
    <form className='flex flex-col items-center mt-40'>
      <Image
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
        alt='user-image'
        width={300}
        height={100}
        className={` hover:bg-gray-100`}
      />
      <div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 text-gray-500 mr-3' />
        <input type='text' className='flex-grow focus:outline-none' />
        <MicrophoneIcon className='h-5 text-gray-500' />
      </div>
      <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
        <button className='btn'>Google Search</button>
        <button className='btn'>I&apos;m Feeling Lucky</button>
      </div>
    </form>
  )
}

export default Body