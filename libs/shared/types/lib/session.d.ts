export type TrackID = 'track1' | 'track2'
export type TrackName = 'Track A' | 'Track B'
export type PersonType = 'presenter' | 'inviter'

export interface ITrack {
  trackId?: TrackID
  personType?: PersonType
  presenterName?: string
  presenterTitle: string
  presenterDescription?: string
  presenterLive?: boolean
  presenterLevel?: 'beginner' | 'intermediate'
  presenterBio?: string
  presenterUrl?: string
}

export interface ISession {
  tracks: Array<ITrack>
  startTime: string
  endTime?: string
}

export type Area = 'main'

export interface INewtImage {
  _id: string
  src: string
  fileType: 'image/png'
  fileSize: number
  fileName: string
  width: number
  height: number
}

export interface INewtSpeaker {
  name: string
  title: string
  affiliation: string
  description: string
  image: INewtImage
  twitter: string
  facebook: string
}

export interface INewtSession {
  title: string
  description: string
  started_at: string
  ended_at: string
  speaker: INewtSpeaker
  area: Area
}
