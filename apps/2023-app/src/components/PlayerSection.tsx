import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import ReactPlayer from 'react-player/lazy'

const PlayerElement: FC<{ url: string }> = ({ url }) => {
  return <ReactPlayer width={'100%'} url={url} />
}

const PreEventPlayer: FC = () => {
  return (
    <div
      id={'player'}
      className="max-w-640 py-2 mt-1.5 w-full flex items-center justify-center flex-col md:relative"
    >
      <h1 className="m-0 leading-5 text-xl">{i18next.t('pre_event')}</h1>
      <p>{i18next.t('subscribing_to_the_youtube_channel')}</p>
      <PlayerElement url="https://youtu.be/Y8dl1y2qdG8" />
    </div>
  )
}

const MainEventPlayer: FC = () => {
  return (
    <div
      id={'player'}
      className="max-w-640 py-2 mt-1.5 w-full flex items-center justify-center flex-col md:relative"
    >
      <h2 className="text-error w-full text-center text-xl pt-2 rounded-lg">{'Handson'}</h2>
      <p className="w-full text-center text-lg p-0 rounded-lg">
        {i18next.t('subscribing_to_the_youtube_channel')}
      </p>
      <PlayerElement url="https://youtu.be/wmjX6-mDsME" />
      <h2 className="text-error w-full text-center text-xl pt-2 rounded-lg">{'Track A'}</h2>
      <p className="w-full text-center text-lg p-0 rounded-lg">
        {i18next.t('subscribing_to_the_youtube_channel')}
      </p>
      <PlayerElement url="https://youtu.be/AAVTnEa4vEs" />
      <h2 className="text-error w-full text-center text-xl pt-2 rounded-lg">{'Track B'}</h2>
      <p className="w-full text-center text-lg p-0 rounded-lg">
        {i18next.t('subscribing_to_the_youtube_channel')}
      </p>
      <PlayerElement url="https://youtu.be/J2li3qYgu9U" />
    </div>
  )
}

export default { PreEventPlayer, MainEventPlayer }
