export type TrackID = 'track1' | 'track2'
export type TrackName = 'Track A' | 'Track B'

export type Area = 'Track A' | 'Track B' | 'main'

export type PersonType = 'presenter' | 'inviter'

export interface ISpeaker {
  name: string
  affiliation: string
  description: string
  twitter: string
  facebook: string
}

export interface ISession {
  title: string
  description: string
  started_at: string
  ended_at: string
  speaker?: ISpeaker
  area: Pick<Area, 'Track A' | 'Track B'> | string
  type?: PersonType
  level?: boolean
  documentUrl?: string
  movieUrl?: string
}

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
  area: Pick<Area, 'main'>
  documentUrl?: string
  movieUrl?: string
}
