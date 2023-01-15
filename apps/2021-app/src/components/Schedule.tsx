import { FC } from 'root/react-app-env'
import { Fragment } from 'react'
import { Popover as Parent } from '@headlessui/react'
import { t } from 'i18next'
import { useDateTime, useString } from '@conference/shared/hooks'
import { DetailIcon } from '@conference/shared/ui'
import { Popover } from './modules/Popover'
import { tracks, trackNames, sessions } from '@contents/sessions'
import styles from '@static/Schedule.module.scss'

const Schedule: FC = () => {
  const { formatTime } = useDateTime()
  const { capitalizeFirst } = useString()

  return (
    <div className={styles.schedule}>
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
                        {t('rest_ask_the_speaker')}
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
                              <h4>{track.presenterTitle}</h4>
                              <h5 className={styles.align_right}>{track.presenterName}</h5>
                              {track.presenterLive && <p className={styles.tag}>{'Live'}</p>}
                              <h6>{t('bio')}</h6>
                              <p dangerouslySetInnerHTML={{ __html: track.presenterBio }} />
                              <h6>{t('session_description')}</h6>
                              <p dangerouslySetInnerHTML={{ __html: track.presenterDescription }} />
                            </Fragment>
                          }
                        >
                          <Parent.Button className={styles.title}>
                            {track.presenterName}
                            <DetailIcon />
                          </Parent.Button>
                        </Popover>
                        <h3 className={styles.sessionTitle}>
                          <div>
                            <div>{track.presenterTitle}</div>
                          </div>
                        </h3>
                        <h4 className={styles.sessionTime}>
                          {`${formatTime(session.startTime)} - ${formatTime(session.endTime)}`}
                        </h4>
                        <div className={styles.sessionPresenter}>
                          {capitalizeFirst(track.personType)}
                          {track.presenterLevel && ` / ${t(track.presenterLevel)}`}
                        </div>
                      </div>
                    )}
                  </Fragment>
                )
              })}
            </Fragment>
          )
        })}
      </Fragment>
    </div>
  )
}

export default Schedule
