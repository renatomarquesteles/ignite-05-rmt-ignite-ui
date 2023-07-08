import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@rmt-ignite-ui/react'

export default {
  title: 'Utils/Tooltip',
  component: Tooltip,

  args: {
    description: 'Some very helpful information',
    children: <Button>Hover me!</Button>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Box
          style={{
            width: 'fit-content',
            padding: '5rem',
          }}
        >
          {Story()}
        </Box>
      </TooltipProvider>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
