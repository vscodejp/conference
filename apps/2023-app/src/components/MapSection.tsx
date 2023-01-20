import { t } from 'i18next'
import { FC } from 'root/react-app-env'

import styles from '@static/Map.module.scss'

const ConceptSection: FC = () => {
  return (
    <section id={'map'} className="w-10/12 mx-auto flex flex-col gap-4">
      <h2 className="text-light bg-vscode w-full text-center text-lg py-2 rounded-lg">
        {t('offline_venue')}
      </h2>
      <div className={styles.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12968.61539092173!2d139.7027647!3d35.648581!3m2!1i1024!2i768!4f1!3m3!1m2!1s0x0%3A0xe379c17c18bf9970!2sMicrosoft%20Base%20Daikanyama!5e0!3m2!1sja!2sjp!4v1674217728076!5m2!1sja!2sjp"
          className={styles.map}
          title={t('offline_venue')}
          loading="lazy"
        />
      </div>
    </section>
  )
}
export default ConceptSection
