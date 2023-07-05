import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@rmt-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Sample text',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default heading is an `h2`, but we can change it through the property `as`.',
      },
    },
  },
}
