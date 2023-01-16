import { FC } from 'root/react-app-env'
import { Fragment } from 'react'
import { Popover as Parent } from '@headlessui/react'
import { t } from 'i18next'
import { useDateTime } from '@conference/shared/hooks'
import { INewtSession } from '@conference/shared/types'
import { DetailIcon } from '@conference/shared/ui'
import { Popover } from './modules/Popover'
import styles from '@static/Schedule.module.scss'

interface TimetableSectionProps {
  sessions: INewtSession[]
}

const TimetableSection: FC<TimetableSectionProps> = ({ sessions }) => {
  const { getTimeStyle, formatTime } = useDateTime()

  return (
    <section id={'timetable'} className="w-10/12 ml-auto mr-auto pt-2 flex flex-col gap-4">
      <h2 className="text-light bg-vscode w-full text-center text-lg py-2 rounded-lg">
        {t('timetable')}
      </h2>
      <div className={styles.schedule}>
        <Fragment>
          {sessions?.map((session, index) => {
            return (
              <Fragment key={index}>
                <h2
                  className={styles.timeslot}
                  aria-hidden={'true'}
                  style={{
                    gridRow: `time-${getTimeStyle(session.started_at)} ${
                      session.area !== 'main' ? '/time-' + getTimeStyle(session.ended_at) : ''
                    }`,
                  }}
                >
                  {formatTime(session.started_at)}
                </h2>
                {session.title === '' ? (
                  <div />
                ) : session.title === 'Rest' ? (
                  <div
                    className={`${styles.session} ${styles.rest}`}
                    aria-hidden={'true'}
                    style={{
                      gridColumn: 2,
                      gridRow: `time-${getTimeStyle(session.started_at)} time-${getTimeStyle(
                        session.ended_at,
                      )}`,
                    }}
                  >
                    {session.title === 'Rest' ? t('rest_ask_the_speaker') : t('lunch_rest')}
                  </div>
                ) : (
                  <div
                    className={`${styles.session} ${styles.track1}`}
                    style={{
                      gridColumn: 2,
                      gridRow: `time-${getTimeStyle(session.started_at)} time-${getTimeStyle(
                        session.ended_at,
                      )}`,
                    }}
                  >
                    <Popover
                      content={
                        <Fragment>
                          <h4 className="flex items-start justify-start text-2xl">
                            {session.title}
                          </h4>
                          <h5 className="text-right text-lg">{session.speaker.name}</h5>
                          <h6 className="pl-2 my-2.5 text-sm border-l border-vscode before:bg-vscode after:bg-vscode">
                            {t('bio')}
                          </h6>
                          <p
                            className="p-0 m-0 text-sm"
                            dangerouslySetInnerHTML={{
                              __html: session.speaker.description.replace(/\r?\n/g, '<br>'),
                            }}
                          />
                          <h6 className="pl-2 my-2.5 text-sm border-l border-vscode before:bg-vscode after:bg-vscode">
                            {t('session_description')}
                          </h6>
                          <p
                            className="p-0 m-0 text-sm"
                            dangerouslySetInnerHTML={{
                              __html: session.description.replace(/\r?\n/g, '<br>'),
                            }}
                          />
                        </Fragment>
                      }
                    >
                      <Parent.Button className="to-transparent border-0 flex relative text-xl no-underline text-left py-4 text-white cursor-pointer">
                        <div className="flex items-start justify-start">{session.title}</div>
                        <div className="w-4 h-4 ml-2">
                          <DetailIcon />
                        </div>
                      </Parent.Button>
                    </Popover>
                    <h3 className={styles.sessionTitle}>
                      <div>
                        <p>{session.speaker.name}</p>
                      </div>
                    </h3>
                    <h4 className={styles.sessionTime}>
                      {`${formatTime(session.started_at)} - ${formatTime(session.ended_at)}`}
                    </h4>
                  </div>
                )}
              </Fragment>
            )
          })}
        </Fragment>
      </div>
    </section>
  )
}

export default TimetableSection
