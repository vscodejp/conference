import { ReactNode } from 'react'
import { TwitterIcon } from '../assets/Icon'
import { button, tweetButton } from './Button.styles'

export interface ButtonProps {
  path: string
  tooltip: string
  isExternalLink?: boolean
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  const {
    path,
    tooltip,
    isExternalLink,
    children,
  } = props

  return (
    <a
      href={path}
      title={tooltip}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className={button}
      role="button"
    >
      {children}
    </a>
  )
}

interface TweetButtonProps {
  path: string
  tooltip: string
  isExternalLink?: boolean
  showSpaces?: boolean
  children: ReactNode
}

export const TweetButton = (props: TweetButtonProps) => {
  const {
    path,
    tooltip,
    isExternalLink,
    showSpaces,
    children,
  } = props

  return (
    <a
      href={path}
      title={tooltip}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className={tweetButton}
      style={showSpaces ? { backgroundColor: '#8f5dfc' } : { backgroundColor: '#1da1f2' }}
      role="button"
    >
      {children}
      <div className="icon_wrapper">
        <TwitterIcon />
      </div>
    </a>
  )
}
