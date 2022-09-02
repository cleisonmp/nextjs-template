import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SampleCard, SampleCardProps } from '.'
import { mockSampleCardProps } from './SampleCard.mocks'

export default {
  title: 'cards/SampleCard',
  component: SampleCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SampleCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SampleCard> = (args) => (
  <SampleCard {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSampleCardProps.base,
} as SampleCardProps
