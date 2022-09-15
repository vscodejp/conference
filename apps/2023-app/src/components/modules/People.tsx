import { useMemo } from 'react'
import { FC } from 'root/react-app-env'
import i18next from 'i18next'
// import Image from 'next/image'
import styles from '../../static/Staff.module.scss'

interface PersonInformation {
  name: string
  url: string
  iconFilename?: string
  iconName?: string
}

export const People: FC<{ people: PersonInformation[]; sectionName: string }> = (prop) => {
  const filterMembers = useMemo(() => {
    return prop.people.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }, [prop.people])

  return (
    <section id={prop.sectionName} className="w-10/12 mx-auto py-2">
      <h2 className="text-light bg-vscode w-full text-center text-lg py-2 rounded-lg">
        {i18next.t(prop.sectionName)}
      </h2>
      <div className={styles.staffs}>
        {filterMembers.map((person) => {
          return (
            <div key={person.name} className={styles.icon}>
              <a href={person.url} target="_blank" rel="noopener noreferrer">
                <img
                  alt={`Image ${person.name}`}
                  src={person?.iconFilename ? `/icons/${person?.iconFilename}` : person?.iconName}
                />
                <div className={styles.info}>
                  <div className={styles.name}>{person.name}</div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
