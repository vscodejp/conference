import { FCWithChildren } from 'root/react-app-env'
import { ReactNode } from 'react'
import { Popover as _Popover } from '@headlessui/react'
import { useOnMounted } from '@conference/shared/hooks'

interface PopoverProps {
  content: ReactNode
}

export const Popover: FCWithChildren<PopoverProps> = (props) => {
  const { children, content } = props

  // https://github.com/tailwindlabs/headlessui/issues/470#issue-873819383
  const { mounted } = useOnMounted()

  return (
    <_Popover className="relative">
      {children}
      {mounted && (
        <_Popover.Panel className="translate-[0, 10px] absolute l-0 p-6 w-9/10 z-30 text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-900">
          {content}
        </_Popover.Panel>
      )}
    </_Popover>
  )
}
