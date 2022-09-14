import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export const Header = () => {
  return (
    <header className='flex p-4 gap-4 items-center'>
      <Link href='/'>
        <a className='border border-gray-400 p-2'>Home</a>
      </Link>
      <Link href='/about'>
        <a className='border border-gray-400 p-2'>About</a>
      </Link>
      <input className='text-gray-900 w-1/3 text-lg' placeholder='Search...' />
    </header>
  )
}
