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
          href={`/${lang}/privacy-policy`}
          aria-label="Link to Privacy Policy"
          aria-describedby={t('privacy_policy')}
        >
          {t('privacy_policy')}
        </a>
        <a href={`/${lang}/contact`} aria-label="Link to Contact" aria-describedby={t('contact')}>
          {t('contact')}
        </a>
        <a
          href={`/${lang}/pre-event`}
          aria-label="Link to Pre Event"
          aria-describedby={t('pre_event')}
        >
          {t('pre_event')}
        </a>
      </p>
      <p className={styles.copyright}>
        {`Created © 2021 ${organizationName}. All Rights Reserved.`}
      </p>
    </footer>
  )
}

export default FooterSection
