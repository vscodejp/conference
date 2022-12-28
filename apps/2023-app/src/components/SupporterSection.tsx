import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { useArray } from '@conference/shared/hooks'
import { AvatarIcon } from '@conference/shared/ui'
import { supporters } from '@contents/supporters'
import styles from '@static/Staff.module.scss'

const SupporterSection: FC = () => {
  const { sortArray } = useArray()

  const members = sortArray(supporters)

  return (
    <section id="supporters" className="w-10/12 mx-auto flex flex-col gap-4">
      <h2 className="text-light bg-vscode w-full text-center text-lg py-2 rounded-lg">
        {i18next.t('supporters')}
      </h2>
      <div className={styles.supporters}>
        {members.map((person, index) => {
          return (
            <AvatarIcon
              key={index}
              url={person.url}
              alt={person.name}
              src={person?.iconFilename ? `../icons/${person?.iconFilename}` : person?.iconName}
            />
          )
        })}
      </div>
    </section>
  )
}

export default SupporterSection
