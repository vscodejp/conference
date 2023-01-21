import { FC } from 'root/react-app-env'
import i18next, { t } from 'i18next'
import styles from '@static/Footer.module.scss'
import { organizationName } from '@utils/constants'

const FooterSection: FC = () => {
  const lang = i18next.language.substring(0, 2)
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <a
          href={`/${lang}/code-for-conduct`}
          aria-label="Link to Code for Conduct"
          aria-describedby={t('code_of_conduct')}
        >
          {t('code_of_conduct')}
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdK_V1uIMzh2RkvCod86dytZ-Ww3D6GvCFrpqlQX5zsfLQYxA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Contact"
          aria-describedby={t('contact')}
        >
          {t('contact')}
        </a>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default FooterSection
