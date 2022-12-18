import { ISession, TrackID, TrackName } from '@conference/shared/types'

export const tracks: TrackID[] = ['track1']

export const trackNames: TrackName[] = ['Track A']

export const sessions: ISession[] = [
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'inviter',
        presenterName: 'Anthony Shaw',
        presenterTitle: 'Mastering Python in VS Code',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1110',
    endTime: '1140',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
        trackId: 'track1',
      },
    ],
    startTime: '1140',
    endTime: '1150',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'Makky12',
        presenterTitle: 'Remote SSHで行うVS Codeリモートホスト開発とトラブルシューティング',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1150',
    endTime: '1220',
  },
  {
    tracks: [
      {
        presenterTitle: 'Lunch',
        trackId: 'track1',
      },
    ],
    startTime: '1230',
    endTime: '1330',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'Yuhei Fujita',
        presenterTitle: 'VS Codeによるチーム開発',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1330',
    endTime: '1400',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'kasaisan',
        presenterTitle: 'Dev Containers ことはじめ - 失敗から学ぶ開発環境運用法',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1410',
    endTime: '1440',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
        trackId: 'track1',
      },
    ],
    startTime: '1440',
    endTime: '1450',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'nikkie',
        presenterTitle:
          '楽々入門！VS Codeで『リファクタリング』 / Awakening Extension (拡張開発はじまるよ🔰)',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1450',
    endTime: '1520',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
        trackId: 'track1',
      },
    ],
    startTime: '1520',
    endTime: '1530',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'presenter',
        presenterName: 'Hirono Baba',
        presenterTitle: 'Azure Functionsをサクッと開発、サクッとデプロイ',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1550',
    endTime: '1610',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
        trackId: 'track1',
      },
    ],
    startTime: '1610',
    endTime: '1620',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        personType: 'presenter',
        presenterName: '岩永かづみ',
        presenterTitle:
          'GitHub Codespaces が拡げる開発環境、いつでもどこでも Visual Studio Code で！',
        presenterDescription: '(仮)',
        presenterLive: true,
        presenterBio: '(仮)',
        presenterUrl: '',
      },
    ],
    startTime: '1620',
    endTime: '1650',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
        trackId: 'track1',
      },
    ],
    startTime: '1650',
    endTime: '1700',
  },
  {
    tracks: [
      {
        trackId: 'track1',
        presenterName: '',
        presenterTitle: '懇親会',
        presenterUrl: '',
      },
    ],
    startTime: '1720',
    endTime: '1800',
  },
]
