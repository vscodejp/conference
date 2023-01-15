import { FC } from 'root/react-app-env'
import { t } from 'i18next'
import { useArray } from '@conference/shared/hooks'
import { AvatarIcon } from '@conference/shared/ui'
import { staffs } from '@contents/staffs'
import styles from '@static/Staff.module.scss'

const StaffSection: FC = () => {
  const { sortArray } = useArray()

  const members = sortArray(staffs)

  return (
    <section id="staffs" className={styles.section}>
      <h2>{t('staffs')}</h2>
      <div className={styles.staffs}>
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

export default StaffSection
