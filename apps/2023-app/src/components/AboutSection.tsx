import { Fragment } from 'react'
import { FC } from 'root/react-app-env'
import i18next from 'i18next'
import { conferenceNameWithYear } from '@utils/constants'
import { APPLY } from '@utils/feature'

const AboutSection: FC = () => {
  return (
    <section id="about" className="text-gray-600 dark:text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 dark:text-gray-300 mb-4">
            {conferenceNameWithYear}
          </h2>
          <h3 className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {i18next.t('explain')}
          </h3>
        </div>
        {APPLY && (
          <Fragment>
            <div className="flex justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <a
                href="https://vscode.connpass.com/event/263206/"
                className="inline-flex text-white dark:text-white bg-emphasis border-0 py-4 px-16 focus:outline-none hover:bg-detail4 rounded text-lg"
                aria-label={i18next.t('apply_for_participation_from_connpass_form')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {i18next.t('apply_for_participation_from_connpass_form')}
              </a>
            </div>
          </Fragment>
        )}
      </div>
    </section>
  )
}

export default AboutSection
