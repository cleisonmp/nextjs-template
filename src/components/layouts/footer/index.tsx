import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {}

export const Footer = () => {
  return (
    <footer className='flex p-4 items-center justify-center'>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <span className=''>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}
