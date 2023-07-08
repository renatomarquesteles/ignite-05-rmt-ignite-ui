import { useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Toast,
  ToastProps,
  ToastProvider,
} from '@rmt-ignite-ui/react'

export default {
  title: 'Utils/Toast',
  component: Toast,

  args: {
    title: 'Title of the Toast',
    description: 'Some very helpful information about the Toast',
    open: false,
  },
  argTypes: {
    open: {
      control: { type: null },
    },
  },
  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false)

      args.open = isOpen
      args.onOpenChange = setIsOpen

      return (
        <ToastProvider>
          <Box>
            <Button onClick={() => setIsOpen(true)}>Click me!</Button>
          </Box>
          {Story()}
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
