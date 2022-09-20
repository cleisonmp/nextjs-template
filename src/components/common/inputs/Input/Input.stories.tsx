import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '.'
import { InputComponentProps } from './input'
import { mockInputComponentProps } from './Input.mocks'

export default {
  title: 'inputs/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockInputComponentProps.base,
} as InputComponentProps
