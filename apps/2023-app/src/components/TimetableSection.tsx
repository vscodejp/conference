import { FC } from 'root/react-app-env'
import { Fragment } from 'react'
import i18next from 'i18next'
import { useDateTime, useString } from '@conference/shared/hooks'
import { sessions, trackNames, tracks } from '@contents/sessions'
import styles from '@static/Schedule.module.scss'
import { InfoPopover } from './modules/InfoPopover'

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
                        ) : track.presenterTitle === 'Rest' ? (
                          <div
                            className={`${styles.session} ${styles.rest}`}
                            aria-hidden={'true'}
                            style={{
                              gridColumn: track.trackId,
                              gridRow: `time-${session.startTime} time-${session.endTime}`,
                            }}
                          >
                            {i18next.t('rest_ask_the_speaker')}
                          </div>
                        ) : (
                          <div
                            className={`${styles.session} ${styles.track1}`}
                            style={{
                              gridColumn: track.trackId,
                              gridRow: `time-${session.startTime} time-${session.endTime}`,
                            }}
                          >
                            <InfoPopover track={track} />
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
