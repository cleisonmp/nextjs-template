import { NextPageWithLayout } from './page'

import { PrimaryLayout } from '../components/layouts/primary/'
import { SampleCard } from '../components/common/cards/sample'
import { mockSampleCardProps } from '../components/common/cards/sample/SampleCard.mocks'
import { Seo } from '../components/utils/Seo'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Seo />
      <main className='flex flex-1 flex-col w-full p-4 gap-4'>
        <h1 className='text-gray-900'>Next.js template</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-fit gap-10'>
          <SampleCard {...mockSampleCardProps.base} />
          <SampleCard {...mockSampleCardProps.base} />
          <SampleCard {...mockSampleCardProps.base} />
          <SampleCard {...mockSampleCardProps.base} />
        </div>
      </main>
    </>
  )
}

Home.layout = PrimaryLayout

export default Home
