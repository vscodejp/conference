import { FC } from 'root/react-app-env'
import { Fragment } from 'react'
import i18next from 'i18next'
import timetableStyles from '../static/Schedule.module.scss'
import { InfoPopover } from './modules/InfoPopover'
import { tracks, trackNames, sessions } from '../contents/sessions'
import { formatTime } from '@utils/dateTime'
import { capitalizeFirstCharacter } from '@utils/text'

const Schedule: FC = () => {
  return (
    <div className={timetableStyles.schedule} aria-labelledby={'schedule-heading'}>
      <Fragment>
        {tracks.map((track: string, val: number) => {
          return (
            <span
              key={val}
              className={timetableStyles.trackslot}
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
                className={timetableStyles.timeslot}
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
                        className={`${timetableStyles.session} ${timetableStyles.rest}`}
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
                        className={`${timetableStyles.session} ${timetableStyles.track1}`}
                        style={{
                          gridColumn: track.trackId,
                          gridRow: `time-${session.startTime} time-${session.endTime}`,
                        }}
                      >
                        <InfoPopover track={track} />
                        <h3 className={timetableStyles.sessionTitle}>
                          <div>
                            <div>{track.presenterTitle}</div>
                          </div>
                        </h3>
                        <h4 className={timetableStyles.sessionTime}>
                          {`${formatTime(session.startTime)} - ${formatTime(session.endTime)}`}
                        </h4>
                        <div className={timetableStyles.sessionPresenter}>
                          {capitalizeFirstCharacter(track.personType)}
                          {track.presenterLevel && ` / ${i18next.t(track.presenterLevel)}`}
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
