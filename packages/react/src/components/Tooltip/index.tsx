import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Root> {
  description: string
  children: ReactNode
}

interface TooltipProviderProps
  extends ComponentProps<typeof RadixTooltip.Provider> {
  children: ReactNode
}

export function TooltipProvider({ children, ...rest }: TooltipProviderProps) {
  return (
    <RadixTooltip.Provider delayDuration={300} {...rest}>
      {children}
    </RadixTooltip.Provider>
  )
}

export function Tooltip({ description, children, ...rest }: TooltipProps) {
  return (
    <RadixTooltip.Root {...rest}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <TooltipContent>
          {description}
          <TooltipArrow />
        </TooltipContent>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  )
}

Tooltip.displayName = 'Tooltip'
