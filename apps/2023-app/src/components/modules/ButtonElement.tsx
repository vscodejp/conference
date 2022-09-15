import { ReactNode } from 'react'
import { TwitterLightIcon } from './Icon'

export const ButtonElement = ({
  path,
  tooltip,
  isExternalLink,
  children,
}: {
  path: string
  tooltip: string
  isExternalLink?: boolean
  children: ReactNode
}) => {
  return (
    <a
      href={path}
      title={tooltip}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className="bg-secondary h-8 text-white rounded-lg inline-flex text-xl leading-4 px-2 justify-center items-center shadow-button duration-300 relative"
      role="button"
    >
      {children}
    </a>
  )
}

export const TweetButtonElement = ({
  path,
  tooltip,
  isExternalLink,
  showSpaces,
  children,
}: {
  path: string
  tooltip: string
  isExternalLink?: boolean
  showSpaces?: boolean
  children: ReactNode
}) => {
  return (
    <a
      href={path}
      title={tooltip}
      target={isExternalLink && '_blank'}
      rel={isExternalLink && 'noopener noreferrer'}
      className="w-72 h-12 items-center rounded-3xl text-white flex justify-center m-auto no-underline"
      style={showSpaces ? { backgroundColor: '#8f5dfc' } : { backgroundColor: '#1da1f2' }}
      role="button"
    >
      {children}
      <div className="pl-1.5">
        <TwitterLightIcon />
      </div>
    </a>
  )
}
