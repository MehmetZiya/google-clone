import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function User({ className }) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          onClick={signOut}
          alt='user-image'
          width={10}
          height={10}
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
      </>
    )
  }
  return (
    <>
      <button
        className={`bg-blue-500 text-white px-6 py-2  font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
        onClick={signIn}
      >
        Sign in
      </button>
    </>
  )
}
