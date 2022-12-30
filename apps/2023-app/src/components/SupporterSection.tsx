import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { AvatarIcon } from '@conference/shared/ui'
import styles from '@static/Staff.module.scss'
import { INewtSupporter } from '@conference/shared/types'

interface SuporterSectionProps {
  supporters: INewtSupporter[]
}

const SupporterSection: FC<SuporterSectionProps> = ({ supporters }) => {
  return (
    <section id="supporters" className="w-10/12 mx-auto flex flex-col gap-4">
      <h2 className="text-light bg-vscode w-full text-center text-lg py-2 rounded-lg">
        {i18next.t('supporters')}
      </h2>
      <div className={styles.supporters}>
        {supporters.map((person, index) => {
          return (
            <AvatarIcon
              key={index}
              url={person.url}
              alt={person.name}
              src={person.imagePath}
              description={person.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default SupporterSection
