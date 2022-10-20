import { NextPageWithLayout } from './page'

import { PrimaryLayout } from '../components/layouts/primary/'
import { SampleCard } from '../components/common/cards/sample'
import { mockSampleCardProps } from '../components/common/cards/sample/SampleCard.mocks'
import { Seo } from '../components/utils/Seo'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Seo />
      <main className='flex w-full flex-1 flex-col gap-4 p-4'>
        <h1 className='text-gray-900'>Next.js template</h1>

        <div className='grid max-w-fit grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
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
