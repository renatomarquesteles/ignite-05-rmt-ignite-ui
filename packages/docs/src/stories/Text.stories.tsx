import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@rmt-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Sample text.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text.',
    as: 'strong',
  },
}
