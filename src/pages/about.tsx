import { PrimaryLayout } from '../components/layouts/primary/'
import { NextPageWithLayout } from './page'

const About: NextPageWithLayout = () => {
  return (
    <main>
      <h2>Layout Example (About)</h2>
    </main>
  )
}

About.layout = PrimaryLayout

export default About
