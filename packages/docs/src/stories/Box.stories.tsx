import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@rmt-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testing the Box element</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
