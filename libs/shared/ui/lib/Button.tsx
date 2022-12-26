import React from 'react'
import { button } from './Button.styles'

export interface ButtonProps {
  path: string
  tooltip: string
  isExternalLink?: boolean
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { path, tooltip, isExternalLink, children } = props

  return (
    <a
      href={path}
      title={tooltip}
      {...(isExternalLink && { target: '_blank', rel: 'noopener noreferrer' })}
      className={button}
      role="button"
    >
      {children}
    </a>
  )
}
