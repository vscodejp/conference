import { Fragment } from 'react'
import { FC } from 'root/react-app-env'
import { t } from 'i18next'
// import Image from 'next/image'
import { urlPrefix } from '@utils/endpoints.constants'
import { APPLY } from '@utils/feature'
import { conferenceNameWithYear } from '@utils/constants'

const ConceptSection: FC = () => {
  return (
    <section id={'concept'} className="p-0 m-0 text-gray-600 body-font bg-vscode">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="md:w-[32vw] w-full title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {conferenceNameWithYear}
          </h2>
          <h3 className="mb-8 leading-relaxed text-gray-300">{t('explain')}</h3>
          <div className="flex justify-center">
            {APPLY && (
              <Fragment>
                <a
                  href="https://vscode.connpass.com/event/263206/"
                  className="inline-flex text-white dark:text-white bg-emphasis border-0 py-2 px-8 focus:outline-none hover:bg-detail4 rounded text-lg "
                  aria-label={t('apply_for_participation_from_connpass_form')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('apply_for_participation_from_connpass_form')}
                </a>
              </Fragment>
            )}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-white dark:bg-gray-700">
          <img
            className="object-cover object-center rounded dark:invert"
            alt="hero"
            src={`${urlPrefix}/concept.png`}
          />
        </div>
      </div>
    </section>
  )
}

export default ConceptSection
