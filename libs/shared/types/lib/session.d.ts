import React from 'react'

export type TrackId = 'track1' | 'track2'

export type Area = 'Track A' | 'Track B' | 'main'
export type TrackName = Extract<Area, 'Track A' | 'Track B'>

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
  area: Extract<Area, 'Track A' | 'Track B'>
  type: PersonType | null
  isLive: boolean
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
  image: INewtImage // upload images to Newt
  twitter: string
  facebook: string
}

export interface INewtSession {
  title: string
  description: string
  started_at: string
  ended_at: string
  speaker: INewtSpeaker
  area: Extract<Area, 'main'>
  // type: PersonType | null
  // isLive: boolean
  documentUrl?: string
  movieUrl?: string
}
