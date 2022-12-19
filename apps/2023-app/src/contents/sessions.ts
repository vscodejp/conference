import { ISession } from '@conference/shared/types'

export const sessions: ISession[] = [
  {
    tracks: [
      {
        personType: 'inviter',
        presenterName: 'Anthony Shaw',
        presenterTitle: 'Mastering Python in VS Code',
        presenterBio:
          'Anthony Shaw is a Developer Advocate at Microdoft, and Fellow of the Python Software Foundation.',
        presenterDescription:
          'In this talk, you’ll see some more advanced steps and setup for master Python development in VS Code. We’ll cover terminal configuration, linting, formatting, testing and remote development. ',
      },
    ],
    startTime: '1110',
    endTime: '1140',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
      },
    ],
    startTime: '1140',
    endTime: '1150',
  },
  {
    tracks: [
      {
        personType: 'presenter',
        presenterName: 'Makky12',
        presenterTitle: 'Remote SSHで行うVS Codeリモートホスト開発とトラブルシューティング',
        presenterDescription:
          '拡張機能「Remote SSH」を紹介するとともに、実際にRemote SSHにてリモートホストにssh接続し、接続先の環境でVSCodeにて開発を行う、という作業について紹介します。実際に業務で直面したトラブル、及びそのトラブルシューティングについても紹介いたします。',
        presenterLive: true,
        presenterLevel: 'beginner',
      },
    ],
    startTime: '1150',
    endTime: '1220',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
      },
    ],
    startTime: '1230',
    endTime: '1330',
  },
  {
    tracks: [
      {
        personType: 'presenter',
        presenterName: 'Yuhei FUJITA',
        presenterTitle: 'VS Codeによるチーム開発',
        presenterDescription:
          'チームメンバー間での開発環境を統一<br>拡張機能であるDev Containerを利用<br>エディタの環境をチームメンバー間で統一することも可能です。<br>Docker Containerとの連携方法や、環境を統一する上で知っておくと便利なことを紹介します。',
        presenterLive: true,
        presenterLevel: 'beginner',
      },
    ],
    startTime: '1330',
    endTime: '1400',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
      },
    ],
    startTime: '1400',
    endTime: '1410',
  },
  {
    tracks: [
      {
        personType: 'presenter',
        presenterName: 'かさいさん',
        presenterTitle: 'Dev Containers ことはじめ - 失敗から学ぶ開発環境運用法',
        presenterDescription:
          'VSCodeの開発環境としてコンテナを使うDev Containersについてその意義，実行環境としてビルドされたコンテナとの違いや注意すべきことについて登壇者の失敗談から見ていきます。',
        presenterLive: true,
        presenterLevel: 'intermediate',
      },
    ],
    startTime: '1410',
    endTime: '1440',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
      },
    ],
    startTime: '1440',
    endTime: '1450',
  },
  {
    tracks: [
      {
        personType: 'presenter',
        presenterName: 'nikkie',
        presenterTitle: '楽々入門！VS Codeで『リファクタリング』',
        presenterDescription:
          '書籍『リファクタリング』で紹介されたテクニックをVS Codeの操作と結び付けて理解するのを目的とします。<br>ちょっとしたテクニックたちを「どんなときに使うのか」「VS Codeではどんな操作になるのか」を共有していきます。',
        presenterLive: true,
        presenterLevel: 'beginner',
      },
      {
        personType: 'presenter',
        presenterName: 'nikkie',
        presenterTitle: 'Awakening Extension (拡張開発はじまるよ🔰)',
        presenterDescription:
          '過去のVS Code Conferenceのハンズオンテキストの内容を改造し、その拡張機能を公開”するまでのありのまま（成功も失敗も両方）の記録である。',
        presenterLive: true,
        presenterLevel: 'beginner',
      },
    ],
    startTime: '1450',
    endTime: '1520',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
      },
    ],
    startTime: '1520',
    endTime: '1550',
  },
  {
    tracks: [
      {
        personType: 'presenter',
        presenterName: 'Hirono Baba',
        presenterTitle: 'Azure Functionsをサクッと開発、サクッとデプロイ',
        presenterDescription:
          '最近は簡単なアプリを作りたい時、Azure FunctionsとAzure Static Web Appsでミニマムに始めることが多くなりました。<br>devcontainerで開発環境を用意し、GitHub Actionsでデプロイまで完了。<br>サクッと環境を整えてコードを書く時間に回しましょう。',
        presenterLive: true,
        presenterLevel: 'beginner',
      },
    ],
    startTime: '1550',
    endTime: '1605',
  },
  {
    tracks: [
      {
        presenterTitle: 'Rest',
      },
    ],
    startTime: '1605',
    endTime: '1620',
  },
  {
    tracks: [
      {
        personType: 'presenter',
        presenterName: '岩永かづみ',
        presenterTitle:
          'GitHub Codespaces が拡げる開発環境、いつでもどこでも Visual Studio Code で！',
        presenterBio:
          'フリーランス/ZEN Architects 所属、GitHub公認トレーナー。Microsoft MVP for Azure 継続受賞。<br>業務では Microsoft Azure や GitHub を用いた開発や、技術アドバイザリに携わっており、中でも Infrastructure as Code や GitHub Actions を用いた自動化を得意としています。<br>また、女性エンジニアを応援するコミュニティ Code Polaris を立上げ運営しているほか、Hack Everything. などの運営や登壇を通して、技術コミュニティへのコミットを続けています。',
        presenterLive: true,
      },
    ],
    startTime: '1620',
    endTime: '1650',
  },
]
