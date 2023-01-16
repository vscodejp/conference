import { FC } from 'root/react-app-env'
import { t } from 'i18next'
import styles from '@static/Section.module.scss'

const AboutSection: FC = () => {
  return (
    <section id={'about'} className={styles.section}>
      <h2>{'AboutSection'}</h2>
      <div className={styles.detail}>
        <dl>
          <dt>{t('date_and_time')}</dt>
          <dd>{t('november_20_2021')}</dd>
        </dl>
        <dl>
          <dt>{t('venue')}</dt>
          <dd>{t('online')}</dd>
        </dl>
        <dl>
          <dt>{t('entry_fee')}</dt>
          <dd>{t('free')}</dd>
        </dl>
        <dl>
          <dt>{t('way_to_participate')}</dt>
          <dd>
            <a
              href="https://vscode.connpass.com/event/221961/"
              aria-label={t('apply_for_participation_from_connpass_form')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('apply_for_participation_from_connpass_form')}
            </a>
          </dd>
        </dl>
      </div>
    </section>
  )
}

export default AboutSection
