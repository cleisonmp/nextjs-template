import { ReactNode } from 'react'
import { Footer } from '../footer'
import { Header } from '../header'

export interface PrimaryLayoutProps {
  children: ReactNode
}
//Data Fetching
//https://nextjs.org/docs/basic-features/layouts#data-fetching

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <>
      <div className='flex flex-col h-screen px-8 py-4 gap-4 mx-auto'>
        <Header />
        <div className='flex flex-col max-w-360 w-full mx-auto'>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
