import * as Tooltip from '@radix-ui/react-tooltip'

import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(4px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  maxWidth: '30rem',
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  color: '$gray100',
  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
