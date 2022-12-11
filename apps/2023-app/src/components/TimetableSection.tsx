import { FC } from 'root/react-app-env'
import { Fragment } from 'react'
import { Popover as _Popover } from '@headlessui/react'
import i18next from 'i18next'
import { useDateTime, useString } from '@conference/shared/hooks'
import { DetailIcon } from '@conference/shared/ui'
import { Popover } from './modules/Popover'
import { sessions, trackNames, tracks } from '@contents/sessions'
import styles from '@static/Schedule.module.scss'

const TimetableSection: FC = () => {
  const { capitalizeFirst } = useString()
  const { formatTime } = useDateTime()

  return (
    <section id={'timetable'} className="w-10/12 ml-auto mr-auto pt-2 flex flex-col gap-4">
      <h2 className="text-light bg-vscode w-full text-center text-lg py-2 rounded-lg">
        {i18next.t('timetable')}
      </h2>
      <div className={styles.schedule} aria-labelledby={'schedule-heading'}>
        <Fragment>
          {tracks.map((track: string, val: number) => {
            return (
              <span
                key={val}
                className={styles.trackslot}
                aria-hidden={'true'}
                style={{ gridColumn: track, gridRow: 'tracks' }}
              >
                {trackNames[val]}
              </span>
            )
          })}
        </Fragment>

        <Fragment>
          {sessions.map((session, index) => {
            return (
              <Fragment key={index}>
                <h2
                  className={styles.timeslot}
                  aria-hidden={'true'}
                  style={{ gridRow: `time-${session.startTime}` }}
                >
                  {formatTime(session.startTime)}
                </h2>
                <Fragment>
                  {session.tracks.map((track, key) => {
                    return (
                      <Fragment key={key}>
                        {track.presenterTitle === '' ? (
                          <div />
                        ) : track.presenterTitle === 'Rest' || track.presenterTitle === 'Lunch' ? (
                          <div
                            className={`${styles.session} ${styles.rest}`}
                            aria-hidden={'true'}
                            style={{
                              gridColumn: track.trackId,
                              gridRow: `time-${session.startTime} time-${session.endTime}`,
                            }}
                          >
                            {track.presenterTitle === 'Rest'
                              ? i18next.t('rest_ask_the_speaker')
                              : i18next.t('lunch_rest')}
                          </div>
                        ) : (
                          <div
                            className={`${styles.session} ${styles.track1}`}
                            style={{
                              gridColumn: track.trackId,
                              gridRow: `time-${session.startTime} time-${session.endTime}`,
                            }}
                          >
                            <Popover
                              content={
                                <Fragment>
                                  <h4 className="flex items-start justify-start text-2xl">
                                    {track.presenterTitle}
                                  </h4>
                                  <h5 className="text-right text-lg">{track.presenterName}</h5>
                                  {track.presenterLive && (
                                    <div className="border border-solid border-error to-transparent inline-block px-1.5 mr-2 text-lg font-medium leading-4 rounded">
                                      {'Live'}
                                    </div>
                                  )}
                                  <h6 className="pl-2 my-2.5 text-sm border-l border-vscode before:bg-vscode after:bg-vscode">
                                    {i18next.t('bio')}
                                  </h6>
                                  <p
                                    className="p-0 m-0 text-sm"
                                    dangerouslySetInnerHTML={{ __html: track.presenterBio }}
                                  />
                                  <h6 className="pl-2 my-2.5 text-sm border-l border-vscode before:bg-vscode after:bg-vscode">
                                    {i18next.t('session_description')}
                                  </h6>
                                  <p
                                    className="p-0 m-0 text-sm"
                                    dangerouslySetInnerHTML={{ __html: track.presenterDescription }}
                                  />
                                </Fragment>
                              }
                            >
                              <_Popover.Button className="to-transparent border-0 flex relative text-xl no-underline text-center py-4 text-white cursor-pointer">
                                {track.presenterName}
                                <div className="w-4 h-4 ml-2">
                                  <DetailIcon />
                                </div>
                              </_Popover.Button>
                            </Popover>
                            <h3 className={styles.sessionTitle}>
                              <div>
                                <p>{track.presenterTitle}</p>
                              </div>
                            </h3>
                            <h4 className={styles.sessionTime}>
                              {`${formatTime(session.startTime)} - ${formatTime(session.endTime)}`}
                            </h4>
                            <p className={styles.sessionPresenter}>
                              {capitalizeFirst(track.personType)}
                              {track.presenterLevel && ` / ${i18next.t(track.presenterLevel)}`}
                            </p>
                          </div>
                        )}
                      </Fragment>
                    )
                  })}
                </Fragment>
              </Fragment>
            )
          })}
        </Fragment>
      </div>
    </section>
  )
}

export default TimetableSection
