import { ComponentProps, ReactNode } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastViewport,
  ToastClose,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  children: ReactNode
}

interface ToastProviderProps
  extends ComponentProps<typeof RadixToast.Provider> {
  children: ReactNode
}

export function ToastProvider({ children, ...rest }: ToastProviderProps) {
  return (
    <RadixToast.Provider {...rest}>
      {children}
      <ToastViewport />
    </RadixToast.Provider>
  )
}

export function Toast({ title, description, children, ...rest }: ToastProps) {
  return (
    <ToastContainer duration={3000} {...rest}>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>

      <ToastClose>
        <X size={20} />
      </ToastClose>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
