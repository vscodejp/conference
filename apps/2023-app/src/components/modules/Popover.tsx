import { FCWithChildren } from 'root/react-app-env'
import { ReactNode, useContext } from 'react'
import { Popover as _Popover } from '@headlessui/react'
import { useOnMounted } from '@conference/shared/hooks'
import { ColorThemeContext } from '@lib/ColorThemeContext'

interface PopoverProps {
  content: ReactNode
}

export const Popover: FCWithChildren<PopoverProps> = (props) => {
  const { children, content } = props

  const colorTheme = useContext(ColorThemeContext)

  // https://github.com/tailwindlabs/headlessui/issues/470#issue-873819383
  const { mounted } = useOnMounted()

  const contentStyles =
    colorTheme.colorMode === 'dark'
      ? { backgroundColor: '#fefefe', color: '#252526' }
      : { backgroundColor: '#252526', color: '#fefefe' }

  return (
    <_Popover className="relative">
      {children}
      {mounted && (
        <_Popover.Panel
          className="translate-[0, 10px] absolute l-0 p-6 md:w-[320px] w-[400px] z-30"
          style={contentStyles}
        >
          {content}
        </_Popover.Panel>
      )}
    </_Popover>
  )
}
