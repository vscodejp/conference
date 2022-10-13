import { useContext, useMemo } from 'react'
import { FC } from 'root/react-app-env'
import { Popover } from '@headlessui/react'
import i18next from 'i18next'
import { DetailIcon } from './Icon'
import { ColorThemeContext } from '@lib/ColorThemeContext'
import { ITrack } from '@conference/shared/types'
import { useHeadlessPatch } from '@components/hooks/useHeadlessPatch'

interface InfoPopover {
  track: ITrack
}

export const InfoPopover: FC<InfoPopover> = ({ track }) => {
  const colorTheme = useContext(ColorThemeContext)
  const { mounted } = useHeadlessPatch()

  const contentStyles = useMemo(() => {
    return colorTheme.colorMode === 'dark'
      ? { backgroundColor: '#fefefe', color: '#252526' }
      : { backgroundColor: '#252526', color: '#fefefe' }
  }, [colorTheme])

  return (
    <Popover className="relative">
      {track.presenterName && (
        <Popover.Button className="to-transparent border-0 flex relative text-xl no-underline text-center py-4 text-white cursor-pointer">
          {track.presenterName}
          <div className="w-4 h-4 ml-2">
            <DetailIcon />
          </div>
        </Popover.Button>
      )}
      {mounted && (
        <Popover.Panel
          className="translate-[0, 10px] absolute left-0 p-6 w-auto shadow-popover z-30"
          style={contentStyles}
        >
          <h4 className="flex items-start justify-start">{track.presenterTitle}</h4>
          <h5 className="text-right">{track.presenterName}</h5>
          <p className="p-0 m-0">
            {track.presenterLive && (
              <div className="border border-solid border-error to-transparent inline-block px-1.5 mr-2 text-lg font-medium leading-4 rounded">
                {'Live'}
              </div>
            )}
          </p>
          <h6 style={{ borderLeft: 'solid 5px rgba(0, 122, 204, 1)' }}>{i18next.t('bio')}</h6>
          <p className="p-0 m-0" dangerouslySetInnerHTML={{ __html: track.presenterBio }} />
          <h6 style={{ borderLeft: 'solid 5px rgba(0, 122, 204, 1)' }}>
            {i18next.t('session_description')}
          </h6>
          <p className="p-0 m-0" dangerouslySetInnerHTML={{ __html: track.presenterDescription }} />
        </Popover.Panel>
      )}
    </Popover>
  )
}
