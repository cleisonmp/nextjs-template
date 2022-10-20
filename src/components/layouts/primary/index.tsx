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
      <div className='mx-auto flex h-screen flex-col gap-4 px-8 py-4'>
        <Header />
        <div className='max-w-360 mx-auto flex w-full flex-col'>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
