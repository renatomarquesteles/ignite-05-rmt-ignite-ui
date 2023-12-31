import * as Toast from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

const viewportPadding = '24px'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + ${viewportPadding}))`,
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: `translateX(calc(100% + ${viewportPadding}))`,
  },
})

export const ToastContainer = styled(Toast.Root, {
  background: '$gray800',
  borderRadius: '$sm',
  padding: '$3 $4',
  border: '1px solid $colors$gray600',
  display: 'grid',
  gridTemplateAreas: `
    'title close'
    'description action'
  `,
  gridTemplateColumns: 'auto min-content',
  rowGap: '$1',
  columnGap: '$4',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  color: '$white',
  lineHeight: '$base',
  gridArea: 'title',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
  gridArea: 'description',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  gridArea: 'close',
  cursor: 'pointer',

  svg: {
    color: '$gray200',

    '&:hover': {
      color: '$gray100',
    },
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: viewportPadding,
  gap: '$3',
  width: '22.5rem',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: '99999',
  outline: 'none',
})
