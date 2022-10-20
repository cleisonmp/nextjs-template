import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <main className='mx-auto flex w-full min-w-[320px] max-w-3xl grow flex-col items-center gap-5 px-2'>
        <Image src='/404.svg' width={600} height={450} alt='' />
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold text-gray-300'>
            Ooops! The page you&apos;re looking for was not found
          </h1>
          <Link href='/'>
            <div className='group mx-auto w-1/2 cursor-pointer rounded-full bg-gray-800 p-4 text-center text-lg font-bold transition-all hover:brightness-110'>
              <a className='group-hover:underline'>Return Home</a>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}
